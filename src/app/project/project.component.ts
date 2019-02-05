import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects:any[];

  constructor(public _project:ProjectService,private route: ActivatedRoute, private router: Router,private auth:AuthService) { }

  ngOnInit() {
    this.getProjectDetails();
   
  }
  getProjectDetails(){
    this.projects=[];
    this._project.getProjectDetails().subscribe((data=>{
      console.log(data);
      this.projects=data;
      console.log(this.projects);
     
    }))

  }
  Milestone(id:number){
    console.log(id)
    this.router.navigate(['/milestone',id]);
  }
 
  }


