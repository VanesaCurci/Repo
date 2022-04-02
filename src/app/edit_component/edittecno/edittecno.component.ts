import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tecnologia } from 'src/app/interfaces/tecnologia';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edittecno',
  templateUrl: './edittecno.component.html',
  styleUrls: ['./edittecno.component.css']
})
export class EdittecnoComponent implements OnInit {
  tecnologia: Tecnologia | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private tecnologiaService: TecnologiaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTecnologia();
  }

  getTecnologia(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.tecnologiaService.getTecnologia(id)
      .subscribe(tecnologia => this.tecnologia = tecnologia);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.tecnologia) {
      this.tecnologiaService.updateTecnologia(this.tecnologia)
        .subscribe(() => this.goBack());
    }
  }

}
