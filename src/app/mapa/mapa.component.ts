import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { UserService } from '../service/user.service';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { ActivatedRoute } from '@angular/router';
import Circle from 'ol/geom/Circle';
import { Fill, Stroke, Style } from 'ol/style';
import Icon from 'ol/style/Icon';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})

export class MapaComponent implements OnInit {

  map: Map = new Map;

  markers: Feature[] = [];

  iconStyle=new Style({
    image:new Icon({
      src:"assets/img/carril-bici.png",
      scale:1.2
    })
  })


  constructor(private userService:UserService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.iniciarMapa(0,0);
    this.getBykes();
  }

  iniciarMapa(latitud: number, longitud: number){
    
   this.map=new Map({
    target:'map',
    layers:[
      new TileLayer({
        source: new OSM({
          attributions: []
        })
        
      })
    ],
    view: new View({
      center:fromLonLat([latitud,longitud]),
      zoom:2
    })
   })

  }

  getBykes(){
    this.userService.getBykes().subscribe(
      (result)=>{
      const networks: any[] = result.networks;
      networks.forEach(network=>{
      const location=network.location;
      const lat=network.location.latitude;
      const lon=network.location.longitude;
      const country=network.location.country;
      const name=network.name;
      const iconFeature=new Feature({
        geometry:new Point(fromLonLat([lon, lat])),
      });
      iconFeature.setStyle(this.iconStyle)
      iconFeature.setId(network.id);
      iconFeature.set('nombre', network.name)
      this.markers.push(iconFeature);
    })
    this.addMarkersToMap();
    
    },
    (error)=>{
      console.log("el mensaje de error es "+error);
    });
  }

  addMarkersToMap() {
    const vectorSource = new VectorSource({
      features: this.markers
    });

    const markerLayer = new VectorLayer({
      source: vectorSource
    });

    this.map.addLayer(markerLayer);
  }

  irALocalizacion(latitud: number, longitud: number) {
    const view = this.map.getView();
    view.animate({
      center: fromLonLat([longitud, latitud]),
      duration: 1000
    });
  }

}
