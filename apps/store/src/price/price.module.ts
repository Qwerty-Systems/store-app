import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PriceModuleBase } from "./base/price.module.base";
import { PriceService } from "./price.service";
import { PriceController } from "./price.controller";
import { PriceResolver } from "./price.resolver";

@Module({
  imports: [PriceModuleBase, forwardRef(() => AuthModule)],
  controllers: [PriceController],
  providers: [PriceService, PriceResolver],
  exports: [PriceService],
})
export class PriceModule {}
