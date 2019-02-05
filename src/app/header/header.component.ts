import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sidenav:ProjectService,private route: ActivatedRoute, private router: Router,private auth:AuthService) { }
  toggleRightSidenav(){
    this.sidenav.toggle();
  }
 
  ngOnInit() {

  }
  Project(){
    console.log("Hello");
    this.router.navigate(['/project']);
  }
  Dashboard(){
    console.log("Hello1");
    this.router.navigate(['/dashboard']);
  }

}
