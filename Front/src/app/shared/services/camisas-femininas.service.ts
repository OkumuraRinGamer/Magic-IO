import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractRestService } from "src/app/core/service/abstract-rest.service";
import { environment } from "src/environments/environment";
import Camisa from "../Data/Camisa";

@Injectable({
  providedIn: "root",
})
export class CamisasFemininasService extends AbstractRestService<Camisa> {
  protected url = `${environment.api.url}/camisasFemininas`;
  constructor(protected http: HttpClient) {
    super(http);
  }
}
