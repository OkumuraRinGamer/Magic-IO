import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AbstractFormComponent } from "src/app/core/components/abstract-form-component";
import Camisa from "src/app/shared/Data/Camisa";
import { CamisasFemininasService } from "src/app/shared/services/camisas-femininas.service";

@Component({
  selector: "app-camisas-femininas-adm-form",
  templateUrl: "./camisas-femininas-adm-form.component.html",
  styleUrls: ["./camisas-femininas-adm-form.component.sass"],
})
export class CamisasFemininasAdmFormComponent extends AbstractFormComponent<Camisa> {
  camisasFemininasForm: FormGroup;

  onInit() {
    this.createForm();
    this.resultadoForm = this.camisasFemininasForm;
    this.navRoute = "administrador/camisasFemininas";
  }

  constructor(
    protected service: CamisasFemininasService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected builder: FormBuilder
  ) {
    super(service, router, route, builder);
  }

  createForm(): void {
    this.camisasFemininasForm = this.builder.group({
      id: null,
      marca: [null, [Validators.required, Validators.maxLength(120)]],
      cor: [null, [Validators.required, Validators.maxLength(120)]],
      tamanho: [null, Validators.required],
      preco: [null, [Validators.required, Validators.maxLength(120)]],
    });
  }
}
