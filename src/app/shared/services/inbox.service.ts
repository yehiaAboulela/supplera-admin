import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InboxService {
  constructor() {}

  inboxData: BehaviorSubject<any[]> = new BehaviorSubject([0]);
}
