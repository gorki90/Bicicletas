import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  dudas={ nombre: '', email: '', comentario: '' };
  mensaje: string = '';
constructor(){}

contactar(){
  console.log(this.dudas);
  this.mensaje="¡Mensaje enviado correctamente! Nombre: "+this.dudas.nombre+" Email: "+this.dudas.email+" Comentario: "+this.dudas.comentario;
  setTimeout(()=>{
    this.mensaje="";
    window.location.href="/";
  },3000);

  }


}
