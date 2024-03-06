import { Component } from '@angular/core';
import {EventService} from "../services/event.service";
import {Event} from "../model/event";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  events : Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe((data: any) => {
      this.events = data;
      console.log(this.events);
    });
  }
}
