import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AbstractFormComponent } from "src/app/core/components/abstract-form-component";
import { AbstractListComponent } from "src/app/core/components/abstract-list-component";
import Camisa from "src/app/shared/Data/Camisa";
import { CamisasMasculinasService } from "src/app/shared/services/camisas-masculinas.service";

@Component({
  selector: "app-camisas-masculinas-adm-form",
  templateUrl: "./camisas-masculinas-adm-form.component.html",
  styleUrls: ["./camisas-masculinas-adm-form.component.sass"],
})
export class CamisasMasculinasAdmFormComponent extends AbstractFormComponent<Camisa> {
  camisasMasculinasForm: FormGroup;

  onInit() {
    this.createForm();
    this.resultadoForm = this.camisasMasculinasForm;
    this.navRoute = "/administrador/camisasMasculinas";
  }

  constructor(
    protected service: CamisasMasculinasService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected builder: FormBuilder
  ) {
    super(service, router, route, builder);
  }

  createForm(): void {
    this.camisasMasculinasForm = this.builder.group({
      id: null,
      marca: [null, [Validators.required, Validators.maxLength(120)]],
      cor: [null, [Validators.required, Validators.maxLength(120)]],
      tamanho: [null, Validators.required],
      preco: [null, [Validators.required, Validators.maxLength(120)]],
    });
  }
}
