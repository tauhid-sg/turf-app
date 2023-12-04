import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BadgeService } from 'src/app/services/badge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  newEntryCount: number = 0;

  constructor(private router: Router, private badgeService: BadgeService) { }

  ngOnInit() {
    this.badgeService.newEntryCount$.subscribe(count => {
      this.newEntryCount = count;
    });
  }

  shouldShowHeader(): boolean {
    const excludedRoutes = ['../registration', '../login'];
    const currentRoute = this.router.url;
    
    const routeData = this.router.routerState.snapshot.root.firstChild?.data;
    
  // Check if the current route is in the excluded routes array
  // or if the showHeader data property is set to false
  return !excludedRoutes.includes(currentRoute) &&
         (!routeData || routeData['showHeader'] !== false);
  }

}