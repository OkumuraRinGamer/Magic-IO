import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CamisasMasculinasAdmFormComponent } from "./form/camisas-masculinas-adm-form.component";
import { CamisasMasculinasAdmListComponent } from "./list/camisas-masculinas-adm-list.component";

const routes: Routes = [
  {
    path: "",
    component: CamisasMasculinasAdmListComponent,
  },
  {
    path: "cadastrar",
    component: CamisasMasculinasAdmFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisasMasculinasAdmRoutingModule {}
