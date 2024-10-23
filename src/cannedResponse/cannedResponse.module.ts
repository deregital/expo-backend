import { Module } from '@nestjs/common';
import { CannedResponseController } from './cannedResponse.controller';
import { CannedResponseService } from './cannedResponse.service';

@Module({
  providers: [CannedResponseService],
  controllers: [CannedResponseController],
})
export class CannedResponseModule {}
