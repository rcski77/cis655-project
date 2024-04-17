import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { ReadDbService } from '../read-db/read-db.service';

@Component({
  selector: 'app-view-event',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view-event.component.html',
  styleUrl: './view-event.component.css',
})
export class ViewEventComponent {

  events: any[] = [];
  courts: any[] = [];

  constructor(private readdbService: ReadDbService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.readdbService.getEvents().subscribe((events) => {
      this.events = events;
      this.getCourts(events[0].eventID);
    });
  }

  getCourts(eventID: string): void {
    this.readdbService.getCourts(eventID).subscribe((courts) => {
      this.courts = courts;
      console.log(courts);
    });
  }

}
