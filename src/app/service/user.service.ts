import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Observable, map } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
    providedIn:"root"
})
export class UserService{



    private url='assets/users.json';
    private apiUrl="https://api.citybik.es/v2/networks";
    latitud: number | undefined;
    longitud: number | undefined;

    constructor(private http: HttpClient, private router:Router){}

    

    registrarUsuario(user:User):Observable<any>{
        return this.http.post<void>(this.url, user);

    }

    getBykes():Observable<any>{
      return this.http.get(this.apiUrl);
    }


    iniciarSesion(email:any,contrasenia:any): Observable<any>{
        return this.http.post("https://reqres.in/api/login"+email,contrasenia)
      }
      modificarDatosUsu(email:any,contrasenia:any):Observable<any>{
          return this.http.put("https://reqres.in/api/users/2"+email,contrasenia)
      }
      borrarCuenta(email:any,contrasenia:any): Observable<any>{
          return this.http.delete("https://reqres.in/api/users/2"+email,contrasenia)
      }
}