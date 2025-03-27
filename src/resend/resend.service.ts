import { Inject, Injectable } from '@nestjs/common';
import {
  CreateBatchOptions,
  CreateEmailOptions,
  CreateEmailRequestOptions,
  Resend,
} from 'resend';

import { RESEND_CONFIGURATION_OPTIONS } from './resend.constant';
import { ResendOptions } from './resend.interface';

@Injectable()
export class ResendService extends Resend {
  constructor(
    @Inject(RESEND_CONFIGURATION_OPTIONS)
    readonly options: ResendOptions,
  ) {
    if (!(options && options.apiKey)) {
      return;
    }

    super(options.apiKey);
  }

  public send = async (
    payload: CreateEmailOptions,
    options?: CreateEmailRequestOptions,
  ): Promise<ReturnType<typeof this.emails.send>> =>
    this.emails.send(payload, options);

  public sendBatch = async (
    payload: CreateBatchOptions,
    options?: CreateEmailRequestOptions,
  ): Promise<ReturnType<typeof this.batch.send>> =>
    this.batch.send(payload, options);
}
