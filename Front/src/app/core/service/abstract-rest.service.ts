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

  async save(data: any, ImgFile: FormData): Promise<Observable<T>> {
    if (data.id) {
      let urlImg = new Promise<any>((resolve, reject) => {
        this.http
          .post<any>(`http://localhost:8080/imagem`, ImgFile, {
            observe: "body",
            responseType: "text" as "json",
          })
          .subscribe((imgFile) => {
            resolve(encodeURI(imgFile));
          });
      });
      data.urlImage = await urlImg;
      return this.http.post<T>(`${this.url}`, data);
    } else {
      let urlImg = new Promise<any>((resolve, reject) => {
        this.http
          .post<any>(`http://localhost:8080/imagem`, ImgFile, {
            observe: "body",
            responseType: "text" as "json",
          })
          .subscribe((imgFile) => {
            resolve(encodeURI(imgFile));
          });
      });
      data.urlImage = await urlImg;
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
