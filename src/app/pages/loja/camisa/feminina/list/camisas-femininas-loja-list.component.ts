import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AbstractListComponent } from "src/app/core/components/abstract-list-component";
import Camisa from "src/app/shared/Data/Camisa";
import { CamisasFemininasService } from "src/app/shared/services/camisas-femininas.service";

@Component({
  selector: "app-camisas-femininas-loja-list",
  templateUrl: "./camisas-femininas-loja-list.component.html",
  styleUrls: ["./camisas-femininas-loja-list.component.sass"],
})
export class CamisasFemininasLojaListComponent extends AbstractListComponent<Camisa> {
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
}
