import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  private newEntryCountSubject = new Subject<number>();
  public newEntryCount$ = this.newEntryCountSubject.asObservable();

  private newEntryCount: number = 0;

  constructor() { 
    this.newEntryCount = parseInt(localStorage.getItem('newEntryCount') || '0', 10);
  }

  getNewEntryCount(): number {
    return this.newEntryCount;
  }

  incrementNewEntryCount(): void {
    this.newEntryCount++;
    this.updateLocalStorage();
    this.newEntryCountSubject.next(this.newEntryCount);
  }

  decrementNewEntryCount(): void {
    if (this.newEntryCount > 0) {
      this.newEntryCount--;
      this.updateLocalStorage();
      this.newEntryCountSubject.next(this.newEntryCount);
    }
  }

  resetNewEntryCount(): void {
    this.newEntryCount = 0;
    this.updateLocalStorage();
    this.newEntryCountSubject.next(this.newEntryCount);
  }

  private updateLocalStorage(): void {
    // Store the count in local storage
    localStorage.setItem('newEntryCount', this.newEntryCount.toString());
  }

}
