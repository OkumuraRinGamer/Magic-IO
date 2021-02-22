import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CamisasFemininasAdmFormComponent } from "./form/camisas-femininas-adm-form.component";
import { CamisasFemininasAdmListComponent } from "./list/camisas-femininas-adm-list.component";

const routes: Routes = [
  {
    path: "",
    component: CamisasFemininasAdmListComponent,
  },
  {
    path: "cadastrar",
    component: CamisasFemininasAdmFormComponent,
  },
  {
    path: "alterar/:id",
    component: CamisasFemininasAdmFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisasFemininasAdmRoutingModule {}
