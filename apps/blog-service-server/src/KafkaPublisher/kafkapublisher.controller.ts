import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaPublisherService } from "./kafkapublisher.service";
import { PostMessageDto } from "../kafkaPublisher/PostMessageDto";

@swagger.ApiTags("kafkaPublishers")
@common.Controller("kafkaPublishers")
export class KafkaPublisherController {
  constructor(protected readonly service: KafkaPublisherService) {}

  @common.Post("/publishPostMessage")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PublishPostMessage(
    @common.Body()
    body: PostMessageDto
  ): Promise<string> {
        return this.service.PublishPostMessage(body);
      }
}
