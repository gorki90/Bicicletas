import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})



export class PerfilComponent implements OnInit {

  mensaje: string = '';
  mensaje2: string = '';
  mensaje3: string = '';
  datos1={ username1: '', password1: '', email1: '' };
  datos2={ username2: '', password2: '', email2: '' };
  datos3={ username3: '', password3: '', email3: '' };
constructor(private userService:UserService){}

login(){
    
  var nombre:string=this.datos1.username1
  var contrasenia:string=this.datos1.password1
  var email:string=this.datos1.email1
 
  this.userService.iniciarSesion(contrasenia,email).subscribe(
    result=>{
      console.log(result)
    },
    error=>{
      console.log(<any> error)
    }
  )

  this.mensaje="Login correcto"
  setTimeout(()=>{
  this.mensaje="";
  window.location.reload()
  },3000);
}

modify(){
  var nombre:string=this.datos2.username2
  var contrasenia:string=this.datos2.password2
  var email:string=this.datos2.email2
 
  this.userService.modificarDatosUsu(contrasenia,email).subscribe(
    result=>{
      console.log(result)
    },
    error=>{
      console.log(<any> error)
    }
  )
  this.mensaje2="Cuenta modificada correctamente"
  setTimeout(()=>{
  this.mensaje2="";
  window.location.reload()
  },3000);
  
}

borrarCuenta(){
  var nombre:string=this.datos3.username3
  var contrasenia:string=this.datos3.password3
  var email:string=this.datos3.email3
 
  this.userService.borrarCuenta(contrasenia,email).subscribe(
    result=>{
      console.log(result)
    },
    error=>{
      console.log(<any> error)
    }
  )
  this.mensaje3="Cuenta borrada correctamente"
  setTimeout(()=>{
  this.mensaje3="";
  window.location.href="/"
  },3000);
  
}

ngOnInit(): void {
  
}



}
