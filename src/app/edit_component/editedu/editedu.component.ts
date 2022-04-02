import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/interfaces/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editedu',
  templateUrl: './editedu.component.html',
  styleUrls: ['./editedu.component.css']
})
export class EditeduComponent implements OnInit {
  educacion:Educacion | undefined

  constructor(
    private route: ActivatedRoute,
    private service:EducacionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  getEducacion(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getEducacion(id)
      .subscribe(educacion => this.educacion = educacion);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.educacion) {
      this.service.updateEducacion(this.educacion)
        .subscribe(() => this.goBack());
    }
  }

}
