import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/interfaces/persona';
import {Localidad} from 'src/app/interfaces/localidad'
import { LocalidadService } from 'src/app/servicios/localidad.service';
import { ProvinciaService } from 'src/app/servicios/provincia.service';
import { Provincia } from 'src/app/interfaces/provincia';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personas: Persona[]= []
  localidades: Localidad[]=[]
  provincias: Provincia[]=[]

  constructor(
    private personaService: PersonaService,
    private localidadService:LocalidadService,
    private provinciaService: ProvinciaService
    ) { }

  ngOnInit(): void {
    this.getPersonas()
    this.getLocalidades()
    this.getProvincias()
  }

  getPersonas(): void {
    this.personaService.getPersonas()
    .subscribe(personas => this.personas = personas);
  }

  getLocalidades(): void {
    this.localidadService.getLocalidades()
    .subscribe(localidades => this.localidades = localidades);
  }

  getProvincias(): void {
    this.provinciaService.getProvincias()
    .subscribe(provincias => this.provincias = provincias);
  }


}
