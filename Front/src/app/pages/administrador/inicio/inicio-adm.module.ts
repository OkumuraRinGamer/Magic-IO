import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { InicioAdmRoutingModule } from "./inicio-adm-routing.module";
import { InicioAdmComponent } from "./inicio/inicio-adm.component";

@NgModule({
  declarations: [InicioAdmComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    InicioAdmRoutingModule,
  ],
  providers: [],
})
export class InicioAdmModule {}
