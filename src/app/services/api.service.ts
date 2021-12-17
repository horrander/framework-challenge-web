import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Decomposicao } from '../models/decomposicao';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public ObterDecomposicao(numero: number): Observable<Decomposicao>{
    return this.http.get<Decomposicao>(environment.apiUrl + 'decomposicao/'  + numero);
  }
}
