import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { OnInit } from "@angular/core";

export abstract class AbstractFormComponent<T> implements OnInit {
  protected resultadoForm: FormGroup;
  protected action: string;
  protected navRoute: string;

  constructor(
    protected service: any,
    protected router: Router,
    protected route: ActivatedRoute,
    protected builder: FormBuilder
  ) {}

  ngOnInit() {
    this.action = this.route.snapshot.url[0].path;

    if (this.action == "alterar") {
      this.setValue();
    }
  }

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

    if (this.resultadoForm.invalid) {
      return;
    }

    this.service
      .save(value)
      .subscribe((response) => this.router.navigate([this.navRoute]));
  }

  onCancel(): void {
    this.router.navigate([this.navRoute]);
  }
}
