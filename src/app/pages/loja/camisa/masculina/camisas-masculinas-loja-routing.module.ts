import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CamisasMasculinasLojaListComponent } from "./list/camisas-masculinas-loja-list.component";

const routes: Routes = [
  {
    path: "",
    component: CamisasMasculinasLojaListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisasMasculinasLojaRoutingModule {}
