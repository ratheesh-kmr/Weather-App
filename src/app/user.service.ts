import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getmessage(): string
  {
    return '*You are end to end encrypted No one outside of this website or even the user cannot view your Mail id and passwords *';
  }
}
