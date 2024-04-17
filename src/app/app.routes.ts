import { Routes } from '@angular/router';
import { SelectEventComponent } from './select-event/select-event.component';
import { ViewEventComponent } from './view-event/view-event.component';

export const routes: Routes = [
    {path: 'home', component: SelectEventComponent},
    {path: 'view', component: ViewEventComponent},
];
