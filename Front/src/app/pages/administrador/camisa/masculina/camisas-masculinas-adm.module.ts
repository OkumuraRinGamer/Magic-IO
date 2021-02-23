import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CamisasMasculinasService } from "src/app/shared/services/camisas-masculinas.service";

import { SharedModule } from "src/app/shared/shared.module";
import { CamisasMasculinasAdmRoutingModule } from "./camisas-masculinas-adm-routing.module";
import { CamisasMasculinasAdmFormComponent } from "./form/camisas-masculinas-adm-form.component";
import { CamisasMasculinasAdmListComponent } from "./list/camisas-masculinas-adm-list.component";

@NgModule({
  declarations: [
    CamisasMasculinasAdmListComponent,
    CamisasMasculinasAdmFormComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CamisasMasculinasAdmRoutingModule,
  ],
  providers: [CamisasMasculinasService],
})
export class CamisasMasculinasAdmModule {}
