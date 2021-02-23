import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CamisasFemininasService } from "src/app/shared/services/camisas-femininas.service";
import { SharedModule } from "src/app/shared/shared.module";
import { CamisasFemininasLojaRoutingModule } from "./camisas-femininas-loja-routing.module";
import { CamisasFemininasLojaListComponent } from "./list/camisas-femininas-loja-list.component";

@NgModule({
  declarations: [CamisasFemininasLojaListComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CamisasFemininasLojaRoutingModule,
  ],
  providers: [CamisasFemininasService],
})
export class CamisasFemininasLojaModule {}
