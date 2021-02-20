import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioLojaComponent } from "./inicio/inicio-loja.component";

const routes: Routes = [
  {
    path: "",
    component: InicioLojaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioLojaRoutingModule {}
