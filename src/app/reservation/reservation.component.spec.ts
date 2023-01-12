import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationComponent } from './reservation.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;
  let userData = [
    {
      stay: {
        arrivalDate: '2021-11-18T05:00:00.000Z',
        departureDate: '2021-11-25T05:00:00.000Z',
      },
      room: {
        roomSize: 'business-suite',
        roomQuantity: 3,
      },
      firstName: 'IDM',
      lastName: 'ENG',
      email: 'idm.test@idm.com',
      phone: '9999999999',
      addressStreet: {
        streetName: 'IDM Street',
        streetNumber: '1234',
      },
      addressLocation: {
        zipCode: '123456',
        state: 'Arizona',
        city: 'OAKVILLE',
      },
      extras: [
        'extraBreakfast',
        'extraTV',
        'extraWiFi',
        'extraParking',
        'extraBalcony',
      ],
      payment: 'cc',
      note: 'idm lab test',
      tags: ['hotel', 'booking', 'labtest'],
      reminder: true,
      newsletter: true,
      confirm: false,
    },
    {
      stay: {
        arrivalDate: '2021-11-01T04:00:00.000Z',
        departureDate: '2021-11-04T04:00:00.000Z',
      },
      room: {
        roomSize: 'presidential-suite',
        roomQuantity: 2,
      },
      firstName: 'IDM',
      lastName: 'PM',
      email: 'idm.op@idm.com',
      phone: '123456789',
      addressStreet: {
        streetName: 'IDM',
        streetNumber: '1234',
      },
      addressLocation: {
        zipCode: '123456',
        state: 'Arkansas',
        city: 'OAK',
      },
      extras: ['extraParking', 'extraBalcony'],
      payment: 'cash',
      note: 'lab test',
      tags: ['angular', 'material', 'labtest'],
      reminder: true,
      newsletter: false,
      confirm: true,
    },
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationComponent],
      imports: [
        MatAutocompleteModule,
        FormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatListModule,
        MatStepperModule,
        MatTabsModule,
        MatTreeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatRippleModule,
        MatBottomSheetModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatNativeDateModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { userData } },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the form ', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      done();
    });
  });
});
