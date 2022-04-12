import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { TecnologiaClass } from 'src/app/clases/Tecnologia';
import { Tecnologia } from 'src/app/interfaces/tecnologia';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';


@Component({
  selector: 'app-addtecno',
  templateUrl: './addtecno.component.html',
  styleUrls: ['./addtecno.component.css']
})
export class AddtecnoComponent implements OnInit{
tecnologias:Tecnologia[]=[]

constructor(
private service:TecnologiaService, 
private router:Router
){}
ngOnInit(): void {
}

  imagenes = ['Angular.jpg', 'CSS.jpg','delfín.jpg','front-end.jpg','Github.jpg',
            'go.jpg', 'HTML.jpg','JavaScript.jpg','MySQL.jpg', 'python.jpg',
             'postman.jpg', 'spring-jpg', 'SpringBoot.jpg', 'Java.jpg'];

  model = new TecnologiaClass(0,'', '');

  

  onSubmit(values: any): void { 
    this.service.addTecnologia(values).subscribe((tecnologia)=> (
      this.tecnologias.push(tecnologia) 
    ))
    this.router.navigate(['informacion'])
  }
  
  

  }
  
