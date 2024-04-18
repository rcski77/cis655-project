import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallGridImportService {

  constructor(private http: HttpClient) {}

  callFunction(eventID: string, date: string): Observable<any> {
    console.log('calling function');
    return this.http.get(`https://us-central1-rykse-cis655-project.cloudfunctions.net/aes-importgrid?eventID=${eventID}&date=${date}`);
  }

  getEventName(eventID: string): Observable<any> {
    return this.http.get(`https://results.advancedeventsystems.com/api/event/${eventID}`);
  }

}
