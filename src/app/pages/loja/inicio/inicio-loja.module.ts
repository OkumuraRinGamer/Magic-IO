import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { InicioLojaRoutingModule } from "./inicio-loja-routing.module";
import { InicioLojaComponent } from "./inicio/inicio-loja.component";

@NgModule({
  declarations: [InicioLojaComponent],
  imports: [CommonModule, SharedModule, InicioLojaRoutingModule],
  providers: [],
})
export class InicioLojaModule {}
