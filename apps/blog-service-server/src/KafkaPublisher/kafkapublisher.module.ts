import { Module } from "@nestjs/common";
import { KafkaPublisherService } from "./kafkapublisher.service";
import { KafkaPublisherController } from "./kafkapublisher.controller";
import { KafkaPublisherResolver } from "./kafkapublisher.resolver";

@Module({
  controllers: [KafkaPublisherController],
  providers: [KafkaPublisherService, KafkaPublisherResolver],
  exports: [KafkaPublisherService],
})
export class KafkaPublisherModule {}
