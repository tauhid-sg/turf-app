import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    fullname: string | null = null;
  
    constructor(private playerService: PlayerService) { 
      // this.fullname=localStorage.getItem("fullname")!;
      this.fullname = this.playerService.getPlayerName();
    }

  ngOnInit(): void {
   
  }
  
}
