import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../environment/environment";
import {Event} from "../model/event";

@Injectable({
  providedIn: 'root',
})
export class EventService {

  constructor(private http: HttpClient) {
  }
  getEvents() {
    return this.http.get(`${environment.apiUrl}/events`);
  }

  createEvent(event: Event) {
    var body = {
      Title: event.Title,
      Description: event.Description,
      DataTime: event.DateTime,
      Location: event.Location,
    };

    console.log('Body:', body)

    return this.http.post(`${environment.apiUrl}/events`, body);
  }
}
