import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserSettings } from '../types/user-settings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  private _usersEndpoint: string = "https://putsreq.com/mSA86HilRjvSdV1Oacj1";

  constructor(private http: HttpClient) { }
  
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly','Annual', 'Lifetime']);
  }

  postUsersSettingsForm(userSettings: UserSettings): Observable<any> {
    // return of(userSettings);
    return this.http.post<UserSettings>(this._usersEndpoint, userSettings)
  }
}
