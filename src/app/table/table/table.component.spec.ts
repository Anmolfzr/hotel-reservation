import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
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
      declarations: [TableComponent],
      imports: [
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatDialogModule,
      ],
      providers: [
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj<MatDialog>(['open']),
        },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Render mat table', () => {
    component.dataSource = new MatTableDataSource<any>(userData);
    expect(component).toBeTruthy();
  });

  it('should test the table ', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const tableRows =
        fixture.nativeElement.querySelectorAll('mat-header-cell');
      expect(tableRows[0].innerHTML).toBe('Name');
      expect(tableRows[1].innerHTML).toBe('E-mail');
      expect(tableRows[2].innerHTML).toBe('Phone');
      expect(tableRows[3].innerHTML).toBe('Stay');
      expect(tableRows[4].innerHTML).toBe('Room');
      expect(tableRows[5].innerHTML).toBe('Address Street');
      expect(tableRows[6].innerHTML).toBe('Address Location');
      done();
    });
  });

  it('open reservation modal ', () => {
    component.openDetails(userData[0]);
    expect(component).toBeTruthy();
  });
});
