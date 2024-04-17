import { Component } from '@angular/core';

import { ReadDbService } from '../read-db.service';

@Component({
  selector: 'app-view-event',
  standalone: true,
  imports: [],
  templateUrl: './view-event.component.html',
  styleUrl: './view-event.component.css',
})
export class ViewEventComponent {
  
  constructor(private readDBservice: ReadDbService) {}

  // getSchedule(): void {
  //  this.readDBservice.readDB();
  // }
}
