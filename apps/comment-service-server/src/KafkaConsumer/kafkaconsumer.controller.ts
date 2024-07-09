import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaConsumerService } from "./kafkaconsumer.service";
import { CommentMessageDto } from "../kafkaConsumer/CommentMessageDto";

@swagger.ApiTags("kafkaConsumers")
@common.Controller("kafkaConsumers")
export class KafkaConsumerController {
  constructor(protected readonly service: KafkaConsumerService) {}

  @common.Post("/consumeCommentMessage")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConsumeCommentMessage(
    @common.Body()
    body: CommentMessageDto
  ): Promise<string> {
        return this.service.ConsumeCommentMessage(body);
      }
}
