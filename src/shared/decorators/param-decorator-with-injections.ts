// modified version of https://github.com/incetarik/nestjs-create-param-decorator-with-injections/blob/master/src/index.ts

import {
  createParamDecorator,
  ExecutionContext,
  Injectable,
  ParamDecoratorEnhancer,
  Type,
} from '@nestjs/common';
import {
  ArgumentMetadata,
  CustomParamFactory,
  PipeTransform,
} from '@nestjs/common/interfaces';

const BoundParameters = Symbol('@@BoundParameters');

interface SymbolContainingObject {
  [k: string | number | symbol]: unknown;
}

function getBoundParameters(target: SymbolContainingObject): unknown[] {
  return (target[BoundParameters] as unknown[]) ?? [];
}

function setBoundParameters(
  target: SymbolContainingObject,
  args: unknown[],
): void {
  if (BoundParameters in target) {
    target[BoundParameters] = args;
  } else {
    Object.defineProperty(target, BoundParameters, {
      value: args,
      enumerable: false,
      configurable: false,
    });
  }
}

type InjectionDictionary = { [key: string]: Type<unknown> };
type MapToInstanceTypes<T extends object> = {
  [K in keyof T]: T[K] extends Type<infer I> ? I : never;
};

interface ExtraGetters {
  /**
   * The metadata of the argument of the underlying {@link PipeTransform}.
   */
  metadata: ArgumentMetadata;

  /**
   * The request instance.
   */
  req: unknown;
}

type ProvidedServices<Injections extends InjectionDictionary> =
  MapToInstanceTypes<Injections>;

type HandlerFn<Data, Injections extends InjectionDictionary> =
  /**
   * The handler function.
   *
   * The returned value will be passed to the parameter.
   *
   * @param data The passed to the decorator.
   * @param context The execution context.
   * @param services The injected services.
   * @param extraGetters The extra getters for underlying {@link PipeTransform} class.
   */
  (
    data: Data | undefined,
    context: ExecutionContext,
    services: ProvidedServices<Injections>,
    extraGetters: ExtraGetters,
  ) => unknown;

type ParamDecoratorFunction = (...dataOrPipes: unknown[]) => ParameterDecorator;

/**
 * Creates a proxy class with the specified dependencies
 */
function createProxy<Injections extends InjectionDictionary>(
  keys: string[],
  _fn: HandlerFn<unknown, Injections>,
): Type<PipeTransform> {
  @Injectable()
  class HiddenProxy implements PipeTransform, SymbolContainingObject {
    [k: string | number | symbol]: unknown;

    constructor(...args: unknown[]) {
      setBoundParameters(this, args);
    }

    transform(
      carrier: [(...args: unknown[]) => unknown, unknown, ExecutionContext],
      metadata: ArgumentMetadata,
    ): unknown {
      const [actualFunction, initialData, ctx] = carrier;
      const boundParameters = getBoundParameters(this);

      const getters = this.getInitialData(ctx, metadata);
      const builtParams = boundParameters.reduce<Record<string, unknown>>(
        (p, s, i) => {
          p[keys[i]!] = s;
          return p;
        },
        {},
      );

      return actualFunction(initialData, ctx, builtParams, getters);
    }

    private getInitialData(
      ctx: ExecutionContext,
      metadata: ArgumentMetadata,
    ): ExtraGetters {
      return {
        metadata,
        get req(): unknown {
          return ctx.switchToHttp().getRequest();
        },
      };
    }
  }

  return HiddenProxy;
}

/**
 * Defines route param decorator with services injected according to the
 * given dependencies object.
 *
 * @template Injections The injections object type.
 * @param fn The handler function.
 * @param deps The optional dependencies. If this parameter is not an object,
 * then {@link createParamDecorator} will be called. Otherwise, this object
 * will contain service classes which will be injected and their instances
 * will be set in their corresponding properties.
 * @param enhancers The optional parameter enhancers.
 */
export function createParamDecoratorWithInjections<
  Injections extends InjectionDictionary,
>(
  fn: HandlerFn<unknown, Injections>,
  deps?: Injections,
  enhancers?: ParamDecoratorEnhancer[],
): ParamDecoratorFunction {
  if (typeof deps !== 'object') {
    return createParamDecorator(fn as CustomParamFactory, enhancers);
  }

  const keys = Object.keys(deps);
  const HiddenProxy = createProxy(keys, fn);
  const types = keys.map((it) => deps[it]);

  // Set the injection tokens as metadata
  Reflect.defineMetadata('design:paramtypes', types, HiddenProxy);

  const func = createParamDecorator(
    (
      data: unknown,
      ctx: ExecutionContext,
    ): [(...args: unknown[]) => unknown, unknown, ExecutionContext] => [
      fn,
      data,
      ctx,
    ],
    enhancers,
  );

  return function _createParamDecoratorWithInjections(
    ...dataOrPipes: unknown[]
  ): ParameterDecorator {
    return func(...dataOrPipes, HiddenProxy);
  };
}
