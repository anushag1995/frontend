import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.component.html',
  styleUrls: ['./my-reports.component.css']
})
export class MyReportsComponent implements OnInit {

  constructor(private report:ProjectService) { }
  projects:any;
  selectProject1:string;
  httpdata1:any;
  pieChartOptions3:any;pieChartData3: any;
  //color codes
  colorCode1: number = 0;
  colorCode2: number = 0;
  colorCode3: number = 0;
  ColorCodeString: string;
  colorCode: any = [];
  pieChartLabels3=[];
  //chart color
  pieChartColor3: any;
  valuedata3: any = [];
  chart1:boolean=false;
  ngOnInit() {
    this.selectProject1='TRZ123';
        this.report.getProjectDetails().subscribe(data=>{
      console.log(data);
      this.projects=data;
      
    })
    this.chart1=false;
   
  }
  selectProject(){
    this.chart1=false;
    this.pieChartData3 = []; this.pieChartColor3 = []; this.pieChartLabels3 = []; this.valuedata3 = []; this.colorCode = [];
    this.report.getReports(this.selectProject1).subscribe(data=>{
      console.log(data);
      this.httpdata1 = data;
      for (let i = 0; i < this.httpdata1.length; i++) {
        console.log("HEllo");
        this.pieChartLabels3.push(this.httpdata1[i].milestone_id);
        this.valuedata3.push(this.httpdata1[i].amount);

    console.log( this.pieChartLabels3);

    console.log( this.valuedata3);
        if (this.colorCode1 > 240) this.colorCode1 = 40;
        if (this.colorCode2 > 240) this.colorCode2 = 30;
        if (this.colorCode3 > 240) this.colorCode3 = 60;
        if (i % 2 == 0) {
          this.colorCode1 = i * this.colorCode1 + 160;
          this.colorCode2 = i * this.colorCode2 + 255;
          this.colorCode3 = i * this.colorCode3 + 180;
        }
        else {
          this.colorCode1 = i * this.colorCode1 + 97;
          this.colorCode2 = i * this.colorCode2 - 95;
          this.colorCode3 = i * this.colorCode3;
        }

        this.ColorCodeString = 'rgba(' + this.colorCode1 + ',' + this.colorCode2 + ',' + this.colorCode3 + ',0.9)';
        this.colorCode.push(this.ColorCodeString);

    console.log( this.ColorCodeString);
      }
    
    })
  
  
    this.pieChartData3 = [
      {
        data: this.valuedata3
        
      }

    ];
    console.log( this.pieChartData3);
    this.pieChartColor3 = [
      {
        backgroundColor: this.colorCode
      }
    ]
    console.log( this.pieChartColor3);
    
    this.pieChartOptions3 = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
    console.log(this.pieChartOptions3)

    setTimeout(()=> {this.chart1=true;
    }, 600);
    
  }
}
