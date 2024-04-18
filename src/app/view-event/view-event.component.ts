import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { ReadDbService } from '../read-db/read-db.service';
import { CallGridImportService } from '../call-grid-import/call-grid-import.service';

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
  eventName: string = '';

  constructor(private readdbService: ReadDbService, private callGridImportService: CallGridImportService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.readdbService.getEvents().subscribe((events) => {
      this.events = events;
      this.getCourts(events[0].eventID);
      this.getEventName(events[0].eventID);
    });
  }

  getCourts(eventID: string): void {
    this.readdbService.getCourts(eventID).subscribe((courts) => {
      this.courts = courts;
      console.log(courts);
    });
  }

  getEventName(eventID: string): void {
    this.callGridImportService.getEventName(eventID).subscribe((eventName) => {
      this.eventName = eventName.Name;
    });
  }

}
