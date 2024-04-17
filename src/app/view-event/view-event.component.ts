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

  constructor(private readdbService: ReadDbService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.readdbService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

}
