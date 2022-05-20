import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/usuario/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos:Proyecto[]=[];
  roles:string[]=[];
  isAdmin = false

  constructor(
    private service:ProyectoService,
    private tokenService:TokenService
    ) { }

  ngOnInit(): void {
    this.getProyectos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true
      }
    })
  }

  getProyectos(): void {
    this.service.getProyectos()
    .subscribe(proyectos => this.proyectos = proyectos);
  }

  delete(proyecto:Proyecto): void {
    this.proyectos = this.proyectos.filter(t => t !== proyecto);
    this.service.deleteProyecto(proyecto.id).subscribe();
  }

}
