import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../services/data.service';


export interface RecordDetail {
  participantId: number; 
  attackId: number;
  attackDate: string;
  location: string;
}

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrl: './detail-dialog.component.css'
})
export class DetailDialogComponent {

  dataSource = new MatTableDataSource<RecordDetail>();

  displayedColumns: string[] = ['attackDate',  'location'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  input:any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService:DataService
  ) {
    this.input = data;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {

    console.log(this.input);
    this.dataService.getRecordDetail(this.input.participantId).subscribe((data:RecordDetail[])=>{
      this.dataSource.data = data;
    });
    
  }
}
