import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import { Observable, startWith, map } from 'rxjs';
import { ReservationService } from '../shared/service/reservation.service';


export interface Fruit {
  name: string;
}

export interface User {
  name: string;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  mockdata: any;

  reservationForm: FormGroup;
  suitOptions:string;
  extraFacilities:string;
  paymentOptions:string;
  tagNames:string;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
  

  myControl = new FormControl<string | User>('');
  options: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  filteredOptions: Observable<User[]>;

  constructor(private service: ReservationService) {

  }

  ngOnInit() {

    this.service.listBookings().subscribe((response: any) => {
      console.log('data', response)
      this.reservationForm.patchValue(response[0]);
      this.suitOptions = response.map((res:any) => res.room.roomSize)
      this.extraFacilities = response[0].extras
      this.paymentOptions = response.map((res:any) => res.payment)
      this.tagNames =  response[0].tags
      console.log('form', this.reservationForm)
      console.log('tagNames', this.tagNames)

      this.reservationForm.controls['roomsize']

    })

   

    this.reservationForm = new FormGroup({
      stay: new FormGroup({
        arrivalDate: new FormControl(''),
        departureDate: new FormControl('')
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
        streetNumber: new FormControl('')
      }),
      addressLocation: new FormGroup({
        zipCode: new FormControl(''),
        state: new FormControl(''),
        city: new FormControl('')
      }),
      extras: new FormControl(''),
      payment: new FormControl(''),
      note: new FormControl(''),
      tags: new FormControl(''),
      reminder: new FormControl(''),
      newsletter: new FormControl(''),
      confirm: new FormControl(''),
    })


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );

  }


  onSubmit() {

    console.log(this.reservationForm.value)

  }

  // setRoomSize() {

  //   this.reservationForm.controls['roomSize'].setValue(this.suitOptions[0])
      
  // }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index > 0) {
      this.fruits[index].name = value;
    }
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
