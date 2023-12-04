import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData: any;

  data = [
    {
      'country': 'India',
      'capital': 'New Delhi'
    },
    {
      'country': 'China',
      'capital': 'Beijing'
    },
    {
      'country': 'New Zealand',
      'capital': 'Auckland'
    } 
  ]

  getAllUsers() {
    var users = this.data;
    return users; 
  }
}
