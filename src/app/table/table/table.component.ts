import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationComponent } from 'src/app/reservation/reservation.component';
import { Constants } from 'src/app/shared/constants.ts/globalConstants';
import { CustomerContactDetailsModel } from 'src/app/shared/interfaces/customer-contact-details.interface';
import { ReservationService } from 'src/app/shared/services/reservation.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns = Constants.displayedColumns;
  dataSource: any;
  constructor(private service: ReservationService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.listBookings().subscribe((res) => {
      return (this.dataSource = new MatTableDataSource<any>(res));
    });
  }

  applyFilter(filterValue: any) {
    filterValue.target.value = filterValue.target.value.trim();
    filterValue.target.value = filterValue.target.value.toLowerCase();
    this.dataSource.filter = filterValue.target.value;
  }

  openDetails(userData: any) {
    this.dialog.open(ReservationComponent, {
      data: { userData },
      autoFocus: false,
      maxHeight: '100vh',
    });
  }
}
