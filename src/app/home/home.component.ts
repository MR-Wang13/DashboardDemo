import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

export interface Record {
  participantId: number; 
  username: string;
  warning: string;
  lastReportTime: string;
 
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  dataSource = new MatTableDataSource<Record>()
  
 displayedColumns: string[] = ['username', 'warning', 'lastReportTime'];

chartData: ChartData<'line'> = {
  labels: ['2023-12-01'],
  datasets: [
    { label: 'Records Number', data: [1000], tension: 1 }
  ],
};

chartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Records of past seven days',
    },
  },
};

 @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  @ViewChild(BaseChartDirective) 
  public chart?: BaseChartDirective;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
 }


  constructor(private dataService:DataService,
    public dialog: MatDialog){}
  ngOnInit(): void {
 
    this.dataService.getRecordList().subscribe((data: Record[])=>{
      this.dataSource.data = data;
    });


    this.dataService.getDashboardChartData().subscribe((data:any)=>{
      this.chartData.labels = data.days;
      this.chartData.datasets[0].data = data.nums;
      this.chart?.chart?.update();
    });
  }
  openDetails(row:Record){
    this.dialog.open(DetailDialogComponent, {
      width: '50vw',
      data: row
    });
  }
}
