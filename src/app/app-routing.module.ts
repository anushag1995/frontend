import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { SidemenuComponent } from 'src/app/sidemenu/sidemenu.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ProjectComponent } from './project/project.component';
import { MilestonesComponent } from 'src/app/milestones/milestones.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
// import { InvoiceTemplateComponent } from 'src/app/invoice-template/invoice-template.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { ExtracComponent } from 'src/app/extrac/extrac.component';
import { MyReportsComponent } from './my-reports/my-reports.component';
const routes:Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
  path:'extrac',
  component:ExtracComponent
  },
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'milestone/:id',
    component:MilestonesComponent
  },
  {
    path:'myreports',
    component:MyReportsComponent
  }

]
@NgModule({
  imports: [
    CommonModule, BrowserModule,
    HttpClientModule,RouterModule.forRoot(routes)
  ],
  declarations: []
 
})
export class AppRoutingModule { }
