import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})



export class PaisesComponent implements OnInit {

iniciales: string = '';
estacionesPorPais: { [key: string]: any[] } = {};
estacionesOriginales: { [key: string]: any[] } = {};

constructor(private userService:UserService){}

ngOnInit(): void {
this.getBykes();  
}

getBykes(){
  this.userService.getBykes().subscribe(result=>{
    const networks: any[] = result.networks;
    networks.forEach(network => {
      const country = network.location.country;
      if (!(country in this.estacionesPorPais)) {
        this.estacionesPorPais[country] = [];
      }
      this.estacionesPorPais[country].push(network);
      this.estacionesOriginales=this.estacionesPorPais;
    });
  },
  (error) => {
    console.log("El mensaje de error es " + error);
  }
);
}

buscarPais() {
  this.estacionesPorPais=this.estacionesOriginales;
  const estacionesFiltradas: { [key: string]: any[] } = {};
  Object.keys(this.estacionesPorPais).forEach(key => {
    if (key.startsWith(this.iniciales.toUpperCase())) {
      estacionesFiltradas[key] = this.estacionesPorPais[key];
    }
  });
  this.estacionesPorPais = estacionesFiltradas;
}

}
