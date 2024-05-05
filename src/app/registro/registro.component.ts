import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

user:User=new User("","","");
mensaje: string = '';


constructor(private userService:UserService){}

registrarUsuario(): void {
  this.userService.registrarUsuario(this.user).subscribe(() => {
      console.log(this.user.username+" "+this.user.email+" "+this.user.password);
      localStorage.setItem('usuario', JSON.stringify(this.user));
      this.mensaje="¡Te has registrado correctamente, Bienvenid@!"
      setTimeout(()=>{
        this.mensaje="";
        window.location.href="/";
      },2000)
  });
}

irAlPerfil(){
  window.location.href="/perfil";
}

}
