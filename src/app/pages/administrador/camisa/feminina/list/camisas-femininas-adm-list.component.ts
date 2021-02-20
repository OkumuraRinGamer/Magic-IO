import { Component } from "@angular/core";
import Camisa from "src/app/shared/Data/Camisa";
import { AbstractListComponent } from "src/app/core/components/abstract-list-component";
import { ActivatedRoute } from "@angular/router";
import { CamisasFemininasService } from "src/app/shared/services/camisas-femininas.service";

@Component({
  selector: "app-camisas-femininas-adm-list",
  templateUrl: "./camisas-femininas-adm-list.component.html",
  styleUrls: ["./camisas-femininas-adm-list.component.sass"],
})
export class CamisasFemininasAdmListComponent extends AbstractListComponent<Camisa> {
  protected resultados: Camisa[];

  constructor(
    protected service: CamisasFemininasService,
    protected route: ActivatedRoute
  ) {
    super(service, route);
  }

  onListar() {
    this.service
      .findAll()
      .subscribe((resultados) => (this.resultados = resultados));
  }

  deleteById(id: number): void {
    this.service.deteleById(id).subscribe(() => this.onListar());
  }
}
