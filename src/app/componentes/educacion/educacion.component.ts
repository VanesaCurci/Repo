import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones:Educacion[]=[]

  constructor(private service:EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones()
  }

  getEducaciones(): void {
    this.service.getEducaciones()
    .subscribe(educaciones => this.educaciones = educaciones);
  }

  delete(educacion:Educacion): void {
    this.educaciones = this.educaciones.filter(t => t !== educacion);
    this.service.deleteEducacion(educacion.id).subscribe();
  }
}
