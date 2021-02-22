import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CamisasMasculinasService } from "src/app/shared/services/camisas-masculinas.service";
import { SharedModule } from "src/app/shared/shared.module";
import { CamisasMasculinasLojaRoutingModule } from "./camisas-masculinas-loja-routing.module";
import { CamisasMasculinasLojaListComponent } from "./list/camisas-masculinas-loja-list.component";

@NgModule({
  declarations: [CamisasMasculinasLojaListComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    CamisasMasculinasLojaRoutingModule,
  ],
  providers: [CamisasMasculinasService],
})
export class CamisasMasculinasLojaModule {}
