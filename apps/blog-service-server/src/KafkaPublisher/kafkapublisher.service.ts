import { Injectable } from "@nestjs/common";
import { PostMessageDto } from "../kafkaPublisher/PostMessageDto";

@Injectable()
export class KafkaPublisherService {
  constructor() {}
  async PublishPostMessage(args: PostMessageDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
