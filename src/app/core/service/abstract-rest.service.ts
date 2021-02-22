import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class AbstractRestService<T> {
  // Endereço da API
  protected url: string;

  constructor(protected http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  /**
   * MÉTODO PARA BUSCAR TODOS
   */

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}`);
  }

  /**
   * MÉTODO PARA BUSCAR POR ID
   * @param id
   */

  findById(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  /**
   * MÉTODO PARA SALVAR
   * @param data
   */

  save(data: any): Observable<T> {
    if (data.id) {
      return this.http.put<T>(`${this.url}`, data);
    } else {
      return this.http.post<T>(`${this.url}`, data);
    }
  }

  /**
   * MÉTODO PARA DELETAR POR ID
   * @param id
   */

  deteleById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
