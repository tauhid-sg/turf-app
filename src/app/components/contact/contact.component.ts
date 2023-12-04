import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Turf } from 'src/app/models/Turf';
import { BadgeService } from 'src/app/services/badge.service';
import { TurfService } from 'src/app/services/turf.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  turfDetails: Turf[] = [];
  formData: Turf;

  users: any[] = []

  user: string = '';

    constructor(private turfService: TurfService, private badgeService: BadgeService) {}

    ngOnInit(): void {
      this.getTurfBooking();
    }
  
    getTurfBooking() {
      this.turfService.getBooking().subscribe(res => {
        this.turfDetails = res;
        console.log(res);
      })
    }

    // fetchTurfDetails(): void {
    //   const url = `${this.APIURL}/Turf`;
    //   this.http.get(url).subscribe(
    //     (response: any) => {
    //       this.turfDetails = response;
    //     },
    //     (error: any) => {
    //       console.error('Error:', error);
    //       throw new Error('Failed to fetch turf details.');
    //     }
    //   );
    // }
    
  
    deleteTurf(TurfID: number) {
      this.turfService.deleteTurf(TurfID)
        .subscribe(
          () => {
            console.log('Turf deleted successfully.');
            // Handle success scenario, e.g., refresh the turf list
            this.getTurfBooking();
          },
          (error) => {
            console.error('Failed to delete turf:', error);
            // Handle error scenario
          }
        );

      this.badgeService.decrementNewEntryCount();  
    }

}

