import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CallGridImportService } from '../call-grid-import/call-grid-import.service';

@Component({
  selector: 'app-select-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select-event.component.html',
  styleUrl: './select-event.component.css',
})
export class SelectEventComponent {
  inputText: string = ''; // Variable to hold the input text
  eventID: string = '';
  date: string = '';

  constructor(private callGridImportService: CallGridImportService) {}

  callFunction(eventID: string, date: string) {
    this.callGridImportService.callFunction(eventID, date).subscribe();
  }
}
