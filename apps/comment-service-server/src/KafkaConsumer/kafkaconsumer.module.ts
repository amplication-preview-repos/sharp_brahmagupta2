import { Module } from "@nestjs/common";
import { KafkaConsumerService } from "./kafkaconsumer.service";
import { KafkaConsumerController } from "./kafkaconsumer.controller";
import { KafkaConsumerResolver } from "./kafkaconsumer.resolver";

@Module({
  controllers: [KafkaConsumerController],
  providers: [KafkaConsumerService, KafkaConsumerResolver],
  exports: [KafkaConsumerService],
})
export class KafkaConsumerModule {}
