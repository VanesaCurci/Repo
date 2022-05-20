import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/interfaces/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { TokenService } from 'src/app/usuario/service/token.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {
  idiomas:Idioma[]=[];
  roles:string[]=[];
  isAdmin = false

  constructor(
    private service:IdiomaService,
    private tokenService:TokenService,
    ) { }

  ngOnInit(): void {
    this.getIdiomas();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true
      }
    })
  }

  getIdiomas(): void {
    this.service.getIdiomas()
    .subscribe(idiomas => this.idiomas = idiomas);
  }

  delete(idioma:Idioma): void {
    this.idiomas = this.idiomas.filter(t => t !== idioma);
    this.service.deleteIdioma(idioma.id).subscribe();
  }

}
