import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { Observable, startWith, map } from 'rxjs';
import { ReservationService } from '../shared/services/reservation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Constants } from '../shared/constants.ts/globalConstants';

export interface Fruit {
  name: string;
}

export interface User {
  name: string;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  suitOptions: string[] = Constants.roomSuits;
  extraFacilities: string;
  paymentOptions: string[] = Constants.paymentOptions;
  personalNotes: string;
  tagNames:any;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit() {
    this.formIntialize();
    this.extraFacilities = this.data.userData.extras;
    const paymentMethod = this.data.userData.payment;
    if (paymentMethod === 'cc' || paymentMethod === 'credit card') {
      this.data.userData.payment = 'Credit Card';
    } else if (paymentMethod === 'cash') {
      this.data.userData.payment = 'Cash';
    }
    this.personalNotes = this.data.userData.note;
    this.tagNames = this.data.userData.tags;
    this.reservationForm.patchValue(this.data.userData);
  }

  formIntialize() {
    this.reservationForm = new FormGroup({
      stay: new FormGroup({
        arrivalDate: new FormControl(''),
        departureDate: new FormControl(''),
      }),
      room: new FormGroup({
        roomSize: new FormControl(''),
        roomQuantity: new FormControl(''),
      }),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      addressStreet: new FormGroup({
        streetName: new FormControl(''),
        streetNumber: new FormControl(''),
      }),
      addressLocation: new FormGroup({
        zipCode: new FormControl(''),
        state: new FormControl(''),
        city: new FormControl(''),
      }),
      extras: new FormControl(''),
      payment: new FormControl(''),
      note: new FormControl(''),
      tags: new FormControl(''),
      reminder: new FormControl(''),
      newsletter: new FormControl(''),
      confirm: new FormControl(''),
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tagNames.push({ name: value });
    }
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tagNames.indexOf(tag);

    if (index >= 0) {
      this.tagNames.splice(index, 1);
    }
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(tag);
      return;
    }
    const index = this.tagNames.indexOf(tag);
    if (index > 0) {
      this.tagNames[index].name = value;
    }
  }

}
