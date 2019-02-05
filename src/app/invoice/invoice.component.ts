import { Component, OnInit,Input } from '@angular/core';

import { InvoiceRow } from './invoice-row';
import { invoiceData } from './invoice-data';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // @Input()
  // public data: InvoiceRow[] = [];

  // private aggregates: any[] = [{
  //   field: 'qty', aggregate: 'sum'
  // }, {
  //   field: 'total', aggregate: 'sum'
  // }];

  // public get totals(): any {
  //   return aggregateBy(this.data, this.aggregates) || {};
  // }
}
