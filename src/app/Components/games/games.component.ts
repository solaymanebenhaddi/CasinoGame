import { Component, OnInit ,Input, OnChanges, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { catValue } from 'src/app/Globals';
import { Games } from 'src/app/Models/Games';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{

  @Input() selectedCatigorie : string='';
  games : Games[]=[];
  ResultGames : Games[]=[];
  
  categories: string ='';
 
  constructor(private gamesservice: GamesService,private route : ActivatedRoute,private change : ChangeDetectorRef) { }
  
  ngOnInit(): void {

    this.categories=this.gamesservice.selectedCatigorie;
    
   
      this.GetvalueByCategory("new")
    
    
    console.log("games "+this.categories);
      
  }

  

UpdateCatigories(category: string){
  this.categories=category;
  this.ngOnInit();
}
GetvalueByCategory(category: string){
  console.log("function  "+category);
  this.gamesservice.findByCategories(category)
  .subscribe(games=>{
    this.ResultGames=this.games=games;
  });
  
}
}
