import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  private url='assets/users.json';
  profiles: any[] = [];

ngOnInit(): void {
   this.cargarUsuarios();
}

constructor(private http:HttpClient){}

cargarUsuarios(): any {
  
  this.http.get<any[]>(this.url).subscribe(usuarios => {
    
    const usuarioString = JSON.stringify(usuarios);
    this.profiles=usuarios;
    localStorage.setItem('usuarios', usuarioString);
    
    
  });
}
}
