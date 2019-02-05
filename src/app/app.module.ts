import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 


import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './project.service';
import { HeaderComponent } from './header/header.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ExtracComponent } from './extrac/extrac.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MyReportsComponent } from './my-reports/my-reports.component';
import { MatFormFieldModule, MatInputModule , MatSelectModule, MatOptionModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    LoginComponent,
    ProjectComponent,
    HeaderComponent,
    MilestonesComponent,
    DashboardComponent,
    
    ExtracComponent,
    InvoiceComponent,
    MyReportsComponent
  ],
  imports: [
    RouterModule.forRoot([]),BrowserModule,BrowserAnimationsModule,FormsModule,MatButtonModule,MatCheckboxModule,FormsModule,MatSidenavModule, AppRoutingModule,RouterModule,HttpClientModule,
    ReactiveFormsModule,NgbModule,MatToolbarModule,PDFExportModule,ChartsModule,MatFormFieldModule, MatInputModule , MatSelectModule, MatOptionModule
  ],
  providers: [ProjectService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
