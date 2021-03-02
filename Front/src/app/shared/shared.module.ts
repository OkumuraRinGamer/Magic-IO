import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { LojaHeaderComponent } from "./components/header/loja/loja-header.component";
import { AdministradorHeaderComponent } from "./components/header/administrador/administrador-header.component";
import { RouterModule } from "@angular/router";
import { FieldValidationComponent } from "./validation/field-validation/field-validation.component";

@NgModule({
  declarations: [
    LojaHeaderComponent,
    AdministradorHeaderComponent,
    FooterComponent,
    FieldValidationComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LojaHeaderComponent,
    AdministradorHeaderComponent,
    FooterComponent,
    FieldValidationComponent,
  ],
})
export class SharedModule {}
