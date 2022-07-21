import { Component, OnInit } from '@angular/core';
import { catValue } from 'src/app/Globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Catvalue = catValue ;

  constructor() { }

  ngOnInit(): void {
  }
  changeCat(category: string){
    this.Catvalue = category;
  }
}
