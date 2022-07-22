import { Component, EventEmitter, Input, OnInit, Output }from '@angular/core';
import { catValue } from 'src/app/Globals';
import { GamesService } from 'src/app/Services/games.service';
import { GamesComponent } from '../games/games.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() Categorievalue : string='';
  constructor(private gamesServ : GamesService,private game : GamesComponent) { }

  ngOnInit(): void {
  
    
  }
  ChangeCategorie(cat:string){
    this.gamesServ.updateCategorie(cat);
    console.log("test "+cat);
    this.game.ngOnInit();
  }

  
}
