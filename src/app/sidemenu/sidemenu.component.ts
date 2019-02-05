import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private router:Router) { }
  showFiller = false;

  ngOnInit() {
  }
  Dashboard(){
    console.log("Hello1");
    this.router.navigate(['/dashboard']);
  }
  Project(){
    console.log("Hello");
    this.router.navigate(['/project']);
  }
}
