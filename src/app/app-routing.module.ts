import {NgModule} from '@angular/core';
import {EventComponent} from "./event/event/event.component";
import {EventCreateComponent} from "./event/event/components/event-create/event-create.component";
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: EventCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
