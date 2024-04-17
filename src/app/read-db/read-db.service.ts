import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ReadDbService {
  private firestore: Firestore = inject(Firestore);
  private events$: Observable<any>;
  private collection;

  constructor() {
    this.collection = collection(this.firestore, 'Events');
    this.events$ = collectionData(this.collection) as Observable<any>;
  }

  getEvents(): Observable<any> {
    return this.events$;
  }

  getCourts(eventID: string): Observable<any> {
    const courtCollection = collection(this.firestore, `Events/${eventID}/Courts`);
    return collectionData(courtCollection) as Observable<any>;
  }
}
