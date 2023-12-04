import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venue } from '../models/Venue.model';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  readonly APIURL = 'http://localhost:5078/api';

  constructor(private http: HttpClient) { }

  getVenues():Observable<Venue[]> {
    return this.http.get<Venue[]>(this.APIURL + '/Venue');
  }
}
