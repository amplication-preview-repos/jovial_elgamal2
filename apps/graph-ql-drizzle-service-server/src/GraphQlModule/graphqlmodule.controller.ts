import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GraphQlModuleService } from "./graphqlmodule.service";

@swagger.ApiTags("graphQlModules")
@common.Controller("graphQlModules")
export class GraphQlModuleController {
  constructor(protected readonly service: GraphQlModuleService) {}
}
