import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CamisasFemininasLojaListComponent } from "./list/camisas-femininas-loja-list.component";

const routes: Routes = [
  {
    path: "",
    component: CamisasFemininasLojaListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisasFemininasLojaRoutingModule {}
