import {Component} from '@angular/core';
import {Event} from "../../../model/event";
import {EventService} from "../../../services/event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe((data: any) => {
      this.events = data;
      console.log(this.events);
    });
  }
}
