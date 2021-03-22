import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AbstractListComponent } from "src/app/core/components/abstract-list-component";
import Camisa from "src/app/shared/Data/Camisa";
import { CamisasMasculinasService } from "src/app/shared/services/camisas-masculinas.service";

@Component({
  selector: "app-camisas-masculinas-loja-list",
  templateUrl: "./camisas-masculinas-loja-list.component.html",
  styleUrls: ["./camisas-masculinas-loja-list.component.sass"],
})
export class CamisasMasculinasLojaListComponent extends AbstractListComponent<Camisa> {
  protected resultados: Camisa[];

  constructor(
    protected service: CamisasMasculinasService,
    protected route: ActivatedRoute
  ) {
    super(service, route);
  }

  btnCarrinhoCor(id: number) {
    if (document.getElementById("" + id).style.backgroundColor == "green") {
      document.getElementById("" + id).style.backgroundColor = "#0074d9";
      document.getElementById("" + id).style.borderColor = "#0074d9";
    } else {
      document.getElementById("" + id).style.backgroundColor = "green";
      document.getElementById("" + id).style.borderColor = "green";
    }
  }

  onListar() {
    this.service
      .findAll()
      .subscribe((resultados) => (this.resultados = resultados));
  }
}
