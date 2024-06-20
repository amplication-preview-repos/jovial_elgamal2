import { Module } from "@nestjs/common";
import { GraphQlModuleService } from "./graphqlmodule.service";
import { GraphQlModuleController } from "./graphqlmodule.controller";
import { GraphQlModuleResolver } from "./graphqlmodule.resolver";

@Module({
  controllers: [GraphQlModuleController],
  providers: [GraphQlModuleService, GraphQlModuleResolver],
  exports: [GraphQlModuleService],
})
export class GraphQlModuleModule {}
