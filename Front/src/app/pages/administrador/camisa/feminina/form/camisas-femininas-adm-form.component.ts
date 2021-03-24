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
  imagePath;
  imgURL: any = "../../../../../../assets/img/gallery/preview.jpg";
  message: string;
  addBtnLabel: string = "Adicionar";
  altPrev: boolean = false;
  savImg: boolean = true;

  onInit() {
    this.createForm();
    this.resultadoForm = this.camisasFemininasForm;
    this.navRoute = "administrador/camisasFemininas";
    if (this.route.snapshot.url[0].path == "alterar") {
      this.addBtnLabel = "Alterar";
      this.altPrev = true;
      this.savImg = false;
    }
  }

  constructor(
    protected service: CamisasFemininasService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected builder: FormBuilder
  ) {
    super(service, router, route, builder);
  }

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Apenas imagens são suportadas!";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  imgUploadClick() {
    document.getElementById("Imagem").click();
    document
      .getElementById("Imagem")
      .addEventListener("change", (imgNome: any) => {
        this.nomeImg = imgNome.target.files[0].name;
        if (this.nomeImg.length > 100) {
          this.message = "Nome muito comprido, por favor altere!";
        }
        this.savImg = true;
        this.altPrev = false;
        this.service.imgSettedVerify(false);
      });
  }

  createForm(): void {
    this.camisasFemininasForm = this.builder.group({
      id: null,
      marca: [null, [Validators.required, Validators.maxLength(120)]],
      cor: [null, [Validators.required, Validators.maxLength(120)]],
      tamanho: [null, Validators.required],
      preco: [null, [Validators.required, Validators.maxLength(120)]],
      urlImage: [null],
    });
  }
}
