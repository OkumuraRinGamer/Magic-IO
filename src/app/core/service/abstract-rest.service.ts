import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class AbstractRestService<T> {
  // Endereço da API
  protected url: string;

  constructor(protected http: HttpClient) {}

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
      return this.http.put<T>(`${this.url}`, JSON.stringify(data));
    } else {
      return this.http.post<T>(`${this.url}`, JSON.stringify(data));
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
