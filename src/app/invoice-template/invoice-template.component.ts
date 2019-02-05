// import { Component, OnInit,ElementRef ,ViewChild,Input } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import { ProjectService } from 'src/app/project.service';

// import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import * as jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// @Component({
//   selector: 'app-invoice-template',
//   templateUrl: './invoice-template.component.html' 
// })
// export class InvoiceTemplateComponent implements OnInit {
  
//   public downloadPDF()  
//   {  
    
   
   
//     var data = document.getElementById('contentToConvert');  
//     html2canvas(data).then(canvas => {  
//       // Few necessary setting options  
//       var imgWidth = 200;   
//       var pageHeight = 250;    
//       var imgHeight = canvas.height * imgWidth / canvas.width;  
//       var heightLeft = imgHeight;  
  
//       const contentDataURL = canvas.toDataURL('image/png')  
//       let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
//       var position = 0;  
//       pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
//       pdf.save('MYPdf.pdf'); // Generated PDF   
//     });  
//   } 
 
//   closeResult: string;
//   invoiceDetails:any;
//   invoicedate:any;
//   invoicestartdate:any;
//   sow_value:any;
//   bill_rate:any;
//   hours:any;
//   invoice_id:any;
//   milestonesd1:any;
//   clientcontactname:any;
//   clientcontactEmail:any;
//   clientcontactaddress:any;

//   constructor(private modalService: NgbModal,public invoice:ProjectService,private router:Router,private route: ActivatedRoute,private http:HttpClientModule) { }
  
//   openLg(content) {
//     this.modalService.open(content, { size: 'lg' });
//   }
  

//   ngOnInit() {
    
//   // To get the client details and the project
//   this.invoice.getInvoiceDetails(this.route.snapshot.params['id'],this.route.snapshot.params['id1']).subscribe(data=>{
//     console.log(this.route.snapshot.params['id']); 
//     console.log(this.route.snapshot.params['id1']); 
//     this.invoiceDetails=data;
//     console.log(this.invoiceDetails);
//     this.sow_value=data['sow_value'];
//     console.log(this.bill_rate=data['Bill_rate']);
//     console.log(this.clientcontactname=data['ClientContactName']);
//     console.log(this.clientcontactEmail=data['ClientContactEmail']);
//     this.clientcontactaddress=data['clientcontact_address1']
//     console.log(this.sow_value);
//     console.log(this.bill_rate);
//   })
//   // to get the invoice id
//     this.invoice.getInvoicedate(this.route.snapshot.params['id1']).subscribe(data1=>{
//       console.log(this.route.snapshot.params['id1']);
//       this.invoicedate=data1;
//       console.log(this.invoicedate);
//       this.invoice_id=data1[0][0]['invoice_id']
//     })
//     // to get the start date
//     let endDate=this.route.snapshot.params['id2'].split('T')[0];
//  this.invoice.getInvoicestartdate(endDate,this.route.snapshot.params['id']).subscribe(data=>{
//   console.log(endDate+'hello'+this.route.snapshot.params['id']);
//   console.log(data);
//    console.log("-----------");
   
//   //  to get the number of hours
//  this.invoice.gethours(this.route.snapshot.params['id'],data[0][0]['milestone_date'],this.route.snapshot.params['id2']).subscribe(data1=>{

//    console.log(this.route.snapshot.params['id2']);
//   this.hours=data1[0][0]['d14'];
//  })  
// })
 
// }

// // to insert the amount and set the generated value
// insertinvoicedetails(){
//   this.invoice.insertInvoiceDetails(this.invoice_id,this.sow_value).subscribe(data=>{
//     console.log(data);
//   })
 
// }
// mailsend(){
//   this.invoice.mailsend().subscribe(data=>{
//     console.log(data);
//   })
// }

// }


