import { Component,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { ProjectService } from './project.service';
import {InvoiceRow} from './invoice/invoice-row';
import {invoiceData} from './invoice/invoice-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  constructor(private sidenavService: ProjectService) {
  }
  ngOnInit(){
}
// public data: InvoiceRow[] = invoiceData;
}
