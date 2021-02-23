import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioAdmComponent } from "./inicio/inicio-adm.component";

const routes: Routes = [
  {
    path: "",
    component: InicioAdmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAdmRoutingModule {}
