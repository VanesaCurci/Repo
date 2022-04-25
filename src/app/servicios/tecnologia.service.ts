import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable,  } from 'rxjs';

import { Tecnologia } from '../interfaces/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  

  constructor(private http: HttpClient,) { }

  private tecnologiaUrl = 'https://faraones.herokuapp.com/tecnologias'

  getTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.tecnologiaUrl)   
  }

  addTecnologia(tecnologia:Tecnologia): Observable<Tecnologia>{
    return this.http.post<Tecnologia>(this.tecnologiaUrl,tecnologia);
  }

  deleteTecnologia(id:number): Observable<Tecnologia> {
    const url = `${this.tecnologiaUrl}/borrar/${id}`
    return this.http.delete<Tecnologia>(url);
  }

  getTecnologia(id: number): Observable<Tecnologia> {
    const url = `${this.tecnologiaUrl}/${id}`;
    return this.http.get<Tecnologia>(url)
  }

  updateTecnologia(tecnologia:Tecnologia): Observable<Tecnologia> {
    const url = `${this.tecnologiaUrl}/${tecnologia.id}?nombre=${tecnologia.nombre}&imagen=${tecnologia.imagen}`;
    return this.http.put<Tecnologia>(url,tecnologia) 
  }

  

}




  

