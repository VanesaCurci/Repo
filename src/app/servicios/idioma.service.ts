import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../interfaces/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor(private http: HttpClient,) { }

  private idiomaUrl = 'https://faraones.herokuapp.com/idiomas'

  getIdiomas(): Observable<Idioma[]> {
    return this.http.get<Idioma[]>(this.idiomaUrl)   
  }

  addIdioma(idioma:Idioma): Observable<Idioma>{
    return this.http.post<Idioma>(this.idiomaUrl,idioma);
  }

  deleteIdioma(id:number): Observable<Idioma> {
    const url = `${this.idiomaUrl}/${id}`
    return this.http.delete<Idioma>(url);
  }

  getIdioma(id: number): Observable<Idioma> {
    const url = `${this.idiomaUrl}/${id}`;
    return this.http.get<Idioma>(url)
  }

  updateIdioma(idioma:Idioma): Observable<Idioma> {
    const url = `${this.idiomaUrl}/${idioma.id}?nombre=${idioma.nombre}&nivel=${idioma.nivel}`;
    return this.http.put<Idioma>(url,idioma) 
  }
}
