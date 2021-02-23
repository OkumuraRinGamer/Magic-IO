import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CamisasFemininasService } from "src/app/shared/services/camisas-femininas.service";
import { SharedModule } from "src/app/shared/shared.module";
import { CamisasFemininasAdmRoutingModule } from "./camisas-femininas-adm-routing.module";
import { CamisasFemininasAdmFormComponent } from "./form/camisas-femininas-adm-form.component";
import { CamisasFemininasAdmListComponent } from "./list/camisas-femininas-adm-list.component";

@NgModule({
  declarations: [
    CamisasFemininasAdmListComponent,
    CamisasFemininasAdmFormComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CamisasFemininasAdmRoutingModule,
  ],
  providers: [CamisasFemininasService],
})
export class CamisasFemininasAdmModule {}
