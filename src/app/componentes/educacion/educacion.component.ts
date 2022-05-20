import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/usuario/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones:Educacion[]=[];
  roles:string[]=[];
  isAdmin = false

  constructor(
    private service:EducacionService,
    private tokenService:TokenService
    ) { }

  ngOnInit(): void {
    this.getEducaciones();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true
      }
    })
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
