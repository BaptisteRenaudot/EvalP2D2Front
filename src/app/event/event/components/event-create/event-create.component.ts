import {Component} from '@angular/core';
import {Event} from "../../../../../model/event";
import {EventService} from "../../../../../services/event.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent {
  formSubmitted = false;
  eventForm: FormGroup = this.fb.group({
    Title: ['', Validators.required],
    Description: ['', Validators.required],
    DateTime: ['', Validators.required],
    Location: ['', Validators.required],
  });

  constructor(private eventService: EventService, private fb: FormBuilder, private router : Router) {
  }

  createEvent() {
    this.formSubmitted = true;
    this.markAllFieldsAsTouched();

    if (this.eventForm.valid) {
      let eventData = this.eventForm.value as Event;
      this.eventService.createEvent(eventData)
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            this.router.navigate(['']);
          },
          error: (error) => {
            console.log('Error:', error);
          }
        });
    }
  }

  markAllFieldsAsTouched() {
    console.log(this.eventForm.controls)
    Object.values(this.eventForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
