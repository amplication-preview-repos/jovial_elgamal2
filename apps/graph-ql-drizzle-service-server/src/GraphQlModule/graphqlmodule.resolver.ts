import * as graphql from "@nestjs/graphql";
import { GraphQlModuleService } from "./graphqlmodule.service";

export class GraphQlModuleResolver {
  constructor(protected readonly service: GraphQlModuleService) {}
}
