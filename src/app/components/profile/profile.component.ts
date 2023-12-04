import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LogicComponent } from '../logic/logic.component';
import { TurfService } from 'src/app/services/turf.service';
import { Turf } from 'src/app/models/Turf';
import { Time } from '@angular/common';
import { BadgeService } from 'src/app/services/badge.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [LogicComponent]
})

export class ProfileComponent {

  turfDetails: Turf[] = [];
  
  turfID: number;
  fullName: string = '';
  email: string = '';
  phoneNo: string = '';
  playTime: Time;
  playDate: Date;
  turfName: string = '';
  selectedTurf: any;

  constructor(private turfService: TurfService, private badgeService: BadgeService) { 
    // getting data from LocalStorage
    // this.fullname=localStorage.getItem("fullname")!;
    // this.email=localStorage.getItem("email")!;
    // this.phone=localStorage.getItem("phone")!;
  }

  ngOnInit(): void {
    this.getTurfBooking();
  }

  getTurfBooking() {
    this.turfService.getBooking().subscribe(res => {
      this.turfDetails = res;
      console.log(res);
    })
  }

  submitForm() {
    const turfData: Turf = {
      turfID: this.turfID,
      fullName: this.fullName,
      email: this.email,
      phoneNo: this.phoneNo,
      playTime: this.playTime,
      playDate: this.playDate,
      turfName: this.turfName,
    };
  
    this.turfService.addTurfBooking(turfData).subscribe(() => {
      this.getTurfBooking();
      console.log('Turf booking added successfully');
    });

    this.badgeService.incrementNewEntryCount();
  }
  
}