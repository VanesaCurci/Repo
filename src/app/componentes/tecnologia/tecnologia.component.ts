import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces/tecnologia';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';
import { TokenService } from 'src/app/usuario/service/token.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
  tecnologias: Tecnologia[] = [];
  roles:string[]=[];
  isAdmin = false
  
  constructor(
    private tecnologiaService:TecnologiaService,
    private tokenService:TokenService
    ) { }

  ngOnInit(): void {
    this.getTecnologias();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true
      }
    })
  }

  getTecnologias(): void {
    this.tecnologiaService.getTecnologias()
    .subscribe(tecnologias => this.tecnologias = tecnologias);
  }

  delete(tecnologia:Tecnologia): void {
    this.tecnologias = this.tecnologias.filter(t => t !== tecnologia);
    this.tecnologiaService.deleteTecnologia(tecnologia.id).subscribe();
  }

}
