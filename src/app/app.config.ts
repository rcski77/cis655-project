import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"rykse-cis655-project","appId":"1:768682786425:web:c12f885d0ba1450b5d9ea8","storageBucket":"rykse-cis655-project.appspot.com","apiKey":"AIzaSyAy2WpyYE-PI0qL2QybT11PTQOHewWjhys","authDomain":"rykse-cis655-project.firebaseapp.com","messagingSenderId":"768682786425"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
