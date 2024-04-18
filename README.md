# AesCourtSchedule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Project Setup

Project was created using Angular and Node.js, hosting is setup with Firebase.

Cloud Firestore is used to store schedule information for events from advancedeventsystems.com.

There are two cloud functions in this project:
- AES Grid Import: reads data from an external API and stores in the Cloud Firestore instance.
- PubSub notification: creates a PubSub message when the first cloud function is finished importing data into Cloud Firestore.

Cloud Storage Bucket is used to store image assets for the application.

PubSub is supposed to be used to notify the application when the data import is finished. However, there seems to be an issue with the PubSub package and Angular, as it was throwing an error anytime I tried to instantiate a PubSub client.