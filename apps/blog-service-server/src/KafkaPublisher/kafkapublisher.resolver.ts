import * as graphql from "@nestjs/graphql";
import { PostMessageDto } from "../kafkaPublisher/PostMessageDto";
import { KafkaPublisherService } from "./kafkapublisher.service";

export class KafkaPublisherResolver {
  constructor(protected readonly service: KafkaPublisherService) {}

  @graphql.Mutation(() => String)
  async PublishPostMessage(
    @graphql.Args()
    args: PostMessageDto
  ): Promise<string> {
    return this.service.PublishPostMessage(args);
  }
}
