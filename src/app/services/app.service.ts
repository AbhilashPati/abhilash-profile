import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  appURL = 'https://abhi-profile-default-rtdb.firebaseio.com/';
  constructor() {}
}
