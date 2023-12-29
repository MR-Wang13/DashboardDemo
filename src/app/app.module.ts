import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatButtonModule} from  '@angular/material/button';
import { MatInputModule} from  '@angular/material/input';
import { MatDialogModule} from  '@angular/material/dialog';
import { MatTableModule} from  '@angular/material/table';
import { MatMenuModule} from  '@angular/material/menu';
import { MatIconModule} from  '@angular/material/icon';
import { MatProgressSpinnerModule} from  '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DetailDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,MatButtonModule,MatIconModule,MatDialogModule,MatInputModule,
    MatTableModule,MatMenuModule,MatProgressSpinnerModule,BrowserAnimationsModule,
    HttpClientModule,MatPaginatorModule, NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
