import { Injectable } from '@angular/core';
import { LatLngLiteral } from 'leaflet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCurrentLocation():Observable<LatLngLiteral>{
    return new Observable((observer) =>{ //inside the constructor of the observable can define observer method
      if(!navigator.geolocation) return;
      return navigator.geolocation.getCurrentPosition(
        (pos) =>{
          observer.next({
            lat:pos.coords.latitude,
            lng:pos.coords.longitude
          })
        },
        (error) =>{
          observer.error(error);
        }
      );
    })//anytime changed inside this method inform Observable object
  }
}
