import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turf } from '../models/Turf';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TurfService {

  readonly APIURL = 'http://localhost:5078/api';
  turfDetails: Turf[] = [];

  newEntryCount: number = 0;

  constructor(private http: HttpClient) { }

  getBooking():Observable<Turf[]> {
    return this.http.get<Turf[]>(this.APIURL + '/Turf');
  }

  addTurfBooking(turf: Turf): Observable<any> {
    this.newEntryCount++;
    return this.http.post<any>(this.APIURL + '/Turf', turf);
  }

 deleteTurf(turfID: number): Observable<any> {
  const url = `${this.APIURL}/Turf/${turfID}`;
  return this.http.delete(url, { observe: 'response', responseType: 'text' })
    .pipe(
      map((response: HttpResponse<any>) => {
        console.log('Response:', response); // Log the response for debugging
        if (response.status === 200) {
          const successMessage = response.body; // Use the plain text response as the success message
          return successMessage;
        } else {
          throw new Error('Failed to delete turf.');
        }
      }),
      catchError((error) => {
        console.error('Error:', error); // Log the error for debugging
        throw new Error('Failed to delete turf.');
      })
    );
  }

  getNewEntryCount(): number {
    return this.newEntryCount;
  }

  resetNewEntryCount(): void {
    this.newEntryCount = 0;
  }
  
}
