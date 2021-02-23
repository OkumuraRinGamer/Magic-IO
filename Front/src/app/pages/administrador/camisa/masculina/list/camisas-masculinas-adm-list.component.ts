import { CamisasMasculinasService } from "src/app/shared/services/camisas-masculinas.service";
import { Component } from "@angular/core";
import Camisa from "src/app/shared/Data/Camisa";
import { AbstractListComponent } from "src/app/core/components/abstract-list-component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-camisas-masculinas-adm-list",
  templateUrl: "./camisas-masculinas-adm-list.component.html",
  styleUrls: ["./camisas-masculinas-adm-list.component.sass"],
})
export class CamisasMasculinasAdmListComponent extends AbstractListComponent<Camisa> {
  protected resultados: Camisa[];

  constructor(
    protected service: CamisasMasculinasService,
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
