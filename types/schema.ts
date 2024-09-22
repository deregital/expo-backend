/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/auth/register': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['AuthController_registerUser'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/auth/login': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['AuthController_loginUser'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/auth/refresh': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['AuthController_refreshToken'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    RegisterDto: {
      username: string;
      password: string;
      /** @default false */
      isAdmin: boolean;
    };
    RegisterResponseDto: {
      username: string;
      /** @default false */
      isAdmin: boolean;
    };
    LoginDto: {
      username: string;
      password: string;
    };
    LoginResponseDto: {
      user: {
        /** Format: uuid */
        id?: string;
        username?: string;
        /** @default false */
        isAdmin: boolean;
        /** Format: date-time */
        created_at?: string;
        /** Format: date-time */
        updated_at?: string;
        filtroBase?: {
          etiquetas: {
            /** Format: uuid */
            id: string;
            name: string;
            grupo: {
              /** Format: uuid */
              id: string;
              color: string;
              isExclusive: boolean;
            };
          };
          active: boolean;
        };
        /** @default false */
        filtroBaseActivo: boolean;
        /** @default [] */
        fcmToken: string[];
      };
      backendTokens: {
        accessToken?: string;
        refreshToken?: string;
      };
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  AuthController_registerUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['RegisterDto'];
      };
    };
    responses: {
      /** @description Cuenta creada */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['RegisterResponseDto'];
        };
      };
    };
  };
  AuthController_loginUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['LoginDto'];
      };
    };
    responses: {
      /** @description Cuenta creada */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['LoginResponseDto'];
        };
      };
    };
  };
  AuthController_refreshToken: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
}
