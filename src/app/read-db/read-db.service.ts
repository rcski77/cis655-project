import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { 
  Firestore,
  collection,
  collectionData
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})

export class ReadDbService {

  private firestore: Firestore = inject(Firestore);
  private events$: Observable<any>;
  private collection;

  constructor() {
    this.collection = collection(this.firestore, 'aes-grid-import');
    this.events$ = collectionData(this.collection, {
      idField: 'CourtId',
    }) as Observable<any>;
  }

  getEvents(): Observable<any> {
    return this.events$;
  }

}
