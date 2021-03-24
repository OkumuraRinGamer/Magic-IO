import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { OnInit } from "@angular/core";

export abstract class AbstractFormComponent<T> implements OnInit {
  protected resultadoForm: FormGroup;
  protected action: string;
  protected navRoute: string;
  protected imgValid: boolean = true;
  nomeImg: string = "Selecione uma imagem!";
  nomePastImg: string;

  constructor(
    protected service: any,
    protected router: Router,
    protected route: ActivatedRoute,
    protected builder: FormBuilder
  ) {}

  ngOnInit() {
    this.onInit();
    this.action = this.route.snapshot.url[0].path;
    if (this.action == "alterar") {
      this.setValue();
      this.service.imgSettedVerify(true);
    }
  }

  onInit() {}

  setValue() {
    const id = this.route.snapshot.url[1].path;
    this.service
      .findById(Number(id))
      .subscribe((response) => this.resultadoForm.patchValue(response));
  }

  onSave(value: T): void {
    Object.keys(this.resultadoForm.controls).forEach((field) =>
      this.resultadoForm.get(field).markAllAsTouched()
    );

    let ImgFile = new FormData();
    const Imagem = (document.getElementById("Imagem") as HTMLInputElement)
      .files[0];

    ImgFile.append("file", Imagem);

    if (this.action == "alterar") {
      this.service.imgPastUrl(this.nomePastImg);
    }
    if (
      (this.resultadoForm.invalid || !Imagem) &&
      !this.service.imgSettedValue()
    ) {
      if (!Imagem) {
        this.imgValid = false;
      }
      return;
    }

    this.service
      .save(value, ImgFile)
      .then((observable) =>
        observable.subscribe((response) =>
          this.router.navigate([this.navRoute])
        )
      );
  }

  onCancel(): void {
    this.router.navigate([this.navRoute]);
  }
}
