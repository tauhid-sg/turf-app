import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/Player.model';
import { LoginResponse } from '../models/LoginResponse.model';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  readonly APIURL = 'http://localhost:5078/api';

  playerName: string | null = null;

  constructor(private http: HttpClient) { }

  registerPlayer(player: Player): Observable<Player[]> {
    return this.http.post<Player[]>(this.APIURL + '/PlayerRegistration', player);
  }

  loginPlayer(playerData: any): Observable<any> {
    return this.http.post(`${this.APIURL}/PlayerRegistration/login`, playerData);
  }

  // FOR SETTING THE LOGGED IN NAME OF THE PERSON
  setPlayerName(name: string): void {
    this.playerName = name;
  }

  getPlayerName(): string | null {
    return this.playerName;
  }
  
}
