import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionClass } from 'src/app/clases/educacion';
import { Educacion } from 'src/app/interfaces/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-addedu',
  templateUrl: './addedu.component.html',
  styleUrls: ['./addedu.component.css']
})
export class AddeduComponent implements OnInit {
  educaciones:Educacion[]=[]

  constructor(
    private service:EducacionService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  model = new EducacionClass(0,'', '','');

  onSubmit(values: any): void { 
    this.service.addEducacion(values).subscribe((educacion)=> (
      this.educaciones.push(educacion) 
    ))
    this.router.navigate(['informacion'])
  }

}
