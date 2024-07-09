import { Injectable } from "@nestjs/common";
import { CommentMessageDto } from "../kafkaConsumer/CommentMessageDto";

@Injectable()
export class KafkaConsumerService {
  constructor() {}
  async ConsumeCommentMessage(args: CommentMessageDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
