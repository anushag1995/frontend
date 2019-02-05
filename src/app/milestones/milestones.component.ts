import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.css']
})
export class MilestonesComponent implements OnInit {
product:any;
milestonestartdate:any;
msdate:any;
closeResult: string;
invoiceDetails:any;
invoicedate:any;
invoicestartdate:any;
sow_value:any;
bill_rate:any;
project_id:any;
hours:any;
invoice_id:any;
milestonesd1:any;
clientcontactname:any;
clientcontactEmail:any;
clientcontactaddress:any;
generated:boolean;


public downloadPDF()  
{  
  
 
 
  var data = document.getElementById('contentToConvert');  
  html2canvas(data).then(canvas => {  
    // Few necessary setting options  
    var imgWidth = 200;   
    var pageHeight = 250;    
    var imgHeight = canvas.height * imgWidth / canvas.width;  
    var heightLeft = imgHeight;  

    const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
    var position = 0;  
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    pdf.save('MYPdf.pdf'); // Generated PDF   
  });  
} 
  constructor(private modalService: NgbModal,public _milestone:ProjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._milestone.getMilestone(this.route.snapshot.params['id']).subscribe(data=>{
      console.log(data);
      this.product=data;
  
      
    })
   
}
getInvoice1(id:string,id1:string,id2:string){
  console.log(id2);
  this._milestone.getInvoiceDetails(id,id1).subscribe(data=>{
    console.log(this.route.snapshot.params['id']); 
    console.log(this.route.snapshot.params['id1']); 
    this.invoiceDetails=data;
    console.log(this.invoiceDetails);
    this.sow_value=data['sow_value'];
    this.project_id=data['project_id'];
    console.log(this.bill_rate=data['Bill_rate']);
    console.log(this.clientcontactname=data['ClientContactName']);
    console.log(this.clientcontactEmail=data['ClientContactEmail']);
    this.clientcontactaddress=data['clientcontact_address1']
    console.log(this.sow_value);
    console.log(this.bill_rate);
    
  })
  // to get the invoice id
    this._milestone.getInvoicedate(id1).subscribe(data1=>{
      console.log(this.route.snapshot.params['id1']);
      this.invoicedate=data1;
      console.log(this.invoicedate);
      this.invoice_id=data1[0][0]['invoice_id']
      if(data1[0][0]['generated']===1){
        this.generated=true;
      }
      else{
        this.generated=false;
      }
      console.log(this.generated);
    })
    // to get the start date
    let endDate=new Date(id2).toISOString().split('T')[0];
 this._milestone.getInvoicestartdate(endDate,id).subscribe(data=>{
  console.log(endDate+'hello'+id);
  console.log(data[0][0]['date1']);
   console.log("-----------");
   
  //  to get the number of hours
  let startdate=new Date(data[0][0]['date1']).toISOString().split('T')[0];
 this._milestone.gethours(id,startdate,endDate).subscribe(data1=>{
console.log(data[0][0]['date1']);
console.log(startdate);
console.log(endDate);
  console.log(data1);
  this.hours=data1[0][0]['d14'];
  console.log(this.hours);
 })  
})
 
}
  
  // to insert the amount and set the generated value
  insertinvoicedetails(){
    this._milestone.insertInvoiceDetails(this.invoice_id,this.sow_value,this.project_id).subscribe(data=>{
      console.log(data);
      this._milestone.getMilestone(this.route.snapshot.params['id']).subscribe(data1=>{
        console.log(data1);
      })
      
    })
   
  }
  mailsend(){
    this._milestone.mailsend().subscribe(data=>{
      console.log(data);
    })
  }

  
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }


 
  // getInvoice(id:number,id1:number,id2:number,){
  //   console.log(id);
  //   console.log(id1);
  
  //  this.router.navigate(['/invoice',id,id1,id2]);
  // }


}

