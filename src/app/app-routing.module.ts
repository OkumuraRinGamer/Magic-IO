import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdministradorLayoutComponent } from "./layouts/administrador/administrador-layout.component";
import { LojaLayoutComponent } from "./layouts/loja/loja-layout.component";

import { ADMINISTRADOR_ROUTES } from "./shared/routes/administrador.routes";
import { LOJA_ROUTES } from "./shared/routes/loja.routes";

const routes: Routes = [
  {
    path: "",
    component: LojaLayoutComponent,
    children: LOJA_ROUTES,
  },
  {
    path: "administrador",
    component: AdministradorLayoutComponent,
    children: ADMINISTRADOR_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
