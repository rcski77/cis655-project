import { Injectable } from '@angular/core';
import { Datastore } from '@google-cloud/datastore';

@Injectable({
  providedIn: 'root',
})
export class ReadDbService {
  private datastore;

  constructor() {
    this.datastore = new Datastore({
      projectId: 'ryksead-aesproject',
      databaseId: 'aes-gridapi',
    });
  }

  // async readDB() {
  //   const query = this.datastore.createQuery('Court');

  //   try {
  //     const [courts] = await this.datastore.runQuery(query);
  //     for (const court of courts) {;
  //       console.log(court);
  //     }
  //   } catch (err) {
  //     console.log('ERROR', err);
  //   }

  // }

  //datastore write
  // saveCourt() {
  //   aesresult.CourtSchedules.forEach((element) => {
  //     const kind = 'Court';
  //     const courtKey = datastore.key(kind);
  //     const entity = {
  //       key: courtKey,
  //       data: element,
  //     }

  //     try {
  //       datastore.save(entity);
  //     } catch (err) {
  //       console.log('ERROR', err);
  //     }
  //   })
  // }
}
