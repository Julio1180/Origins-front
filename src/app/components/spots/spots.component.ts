import { Component, OnInit } from '@angular/core';
import { SpotsService } from 'src/app/services/spots.service';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {

  lat: number;
  lng: number;
  arrSpots: any[];
  located: boolean;

  spots: any[];

  constructor(private SpotsService: SpotsService
  ) {

    this.lat = 40;
    this.lng = -3;
    this.arrSpots = [];
    this.located = false;
    this.spots = []
  }

  ngOnInit() {
    this.SpotsService.getAll()
      .then(spots => this.spots = spots)
      .catch(error => console.log(error));

  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.located = true;



    });
  }

  async ngAfterViewInit() {
    this.arrSpots = await this.SpotsService.getAll();
    console.log(this.arrSpots)
  }


}
