import * as graphql from "@nestjs/graphql";
import { CommentMessageDto } from "../kafkaConsumer/CommentMessageDto";
import { KafkaConsumerService } from "./kafkaconsumer.service";

export class KafkaConsumerResolver {
  constructor(protected readonly service: KafkaConsumerService) {}

  @graphql.Mutation(() => String)
  async ConsumeCommentMessage(
    @graphql.Args()
    args: CommentMessageDto
  ): Promise<string> {
    return this.service.ConsumeCommentMessage(args);
  }
}
