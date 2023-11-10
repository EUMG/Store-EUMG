import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {LatLng, LatLngExpression, LatLngTuple, LeafletMouseEvent, Map, Marker, latLng, map, marker, tileLayer} from 'leaflet';
import { LocationService } from 'src/app/services/location.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input()
  order!:Order;

  private readonly MARKER_ZOOM_LEVEL = 16;
  currentMarker!:Marker;
  constructor(private locationService:LocationService){

  }
  ngOnInit(): void {
    this.initializeMap();
  }
  private readonly DEFAULT_LATLNG:LatLngTuple = [13.75,21.62];
  @ViewChild('map',{static:true}) //responsibility selecting a tag from the view file (html)
  mapRef!:ElementRef;

  map!:Map;

  initializeMap(){
    if(this.map) return;
    this.map = map(this.mapRef.nativeElement,{
      attributionControl:false
    }).setView(this.DEFAULT_LATLNG,1); //SHOWING ALL WORLD
    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
    this.map.on('click',(e:LeafletMouseEvent)=>{
      this.setMarker(e.latlng);
    })
  }

  findMyLocation(){
    this.locationService.getCurrentLocation().subscribe({
      next:(latLng) =>{
        this.map.setView(latLng,this.MARKER_ZOOM_LEVEL);
        this.setMarker(latLng);
      }
    })
  }

  setMarker(latlng:LatLngExpression){
    this.addressLatLng = latlng as LatLng;
    if(this.currentMarker){
      this.currentMarker.setLatLng(latlng);
      return;
    }
    this.currentMarker = marker(latlng,{
      draggable:true
    }).addTo(this.map);

    this.currentMarker.on('dragend',()=>{
      this.addressLatLng=this.currentMarker.getLatLng();
    })
  }

  set addressLatLng(latlng:LatLng){
    latlng.lat = parseFloat(latlng.lat.toFixed(8));
    latlng.lng = parseFloat(latlng.lng.toFixed(8));
    this.order.addressLatLng = latlng;
    console.log(this.order.addressLatLng);
  }
}
