import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../../models/nuevo-usuario';
import { AuthService } from '../../service/auth.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
isLogged=false;
isRegister = false;
isRegisterFail = false;
nuevoUsuario: NuevoUsuario | undefined;
nombre:string="";
nombreUsuario: string = "";
email:string="";
password:string= "";
errMsj:string = ""
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onRegister():void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre,this.nombreUsuario,this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe (
      data => {
        this.isRegister = true;
        this.isRegisterFail=false;
        this.router.navigate(['/login'])
      },
      err => {
        this.isRegister = false;
        this.isRegisterFail = true;
        this.errMsj = "error";
        console.log(this.errMsj);
  
      }
    )
    }

}
