import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Venue } from 'src/app/models/Venue.model';
import { VenueService } from 'src/app/services/venue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {

  venueDetails: Venue[] = []

  constructor(public domSanitizer: DomSanitizer, private venueService: VenueService) { }

  ngOnInit(): void {
    this.getVenueDetails();
  }

  getVenueDetails() {
    this.venueService.getVenues().subscribe(res => {
      this.venueDetails = res;
      console.log(res);
    })
  }

  cards = [
    {
      image: '../../../assets/goregaon-sports-club',
      text: 'Goregaon Sports Club',
      location: 'Malad West',
      review: '⭐⭐⭐',
      price: '2800',
      rating: '4.5'
    },
    {
      image: '../../../assets/andheri-sports-complex',
      text: 'Andheri Sports Complex',
      location: 'Andheri West',
      review: '⭐⭐⭐⭐',
      price: '4000',
      rating: '3.7'
    },
    {
      image: '../../../assets/trickshot',
      text: 'Trickshot Turf',
      location: 'Goregaon East',
      review: '⭐⭐',
      price: '1500',
      rating: '2.5'
    },
    {
      image: '../../../assets/players-turf',
      text: 'Players Turf',
      location: 'Andheri East',
      review: '⭐⭐⭐',
      price: '2000',
      rating: '4.0'
    },
    {
      image: '../../../assets/Sporloc.jfif',
      text: 'Sporloc',
      location: 'Vile Parle',
      review: '⭐⭐',
      price: '1200',
      rating: '3.3'
    },
    {
      image: '../../../assets/greenspace.jfif',
      text: 'GreenSpace Turf',
      location: 'Saki Naka',
      review: '⭐⭐⭐',
      price: '2000',
      rating: '2.5'
    },
    {
      image: '../../../assets/andreas.jfif',
      text: 'St. Andreas Turf',
      location: 'Bandra West',
      review: '⭐⭐⭐⭐',
      price: '3500',
      rating: '4.7'
    },
    {
      image: '../../../assets/dribble.jfif',
      text: 'Dribble Turf',
      location: 'Dadar',
      review: '⭐⭐⭐',
      price: '1800',
      rating: '4.0'
    },
    {
      image: '../../../assets/playball.jfif',
      text: 'Playball Street',
      location: 'Prabhadevi',
      review: '⭐⭐⭐',
      price: '1800',
      rating: '3.5'
    },
  ];
}
