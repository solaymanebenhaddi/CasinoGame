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

  @Input() selectedCatigorie ='';
  games : Games[]=[];
  ResultGames : Games[]=[];
  
  categories: string ='';
 
  constructor(private gamesservice: GamesService,private route : ActivatedRoute,private change : ChangeDetectorRef) { }
  
  ngOnInit(): void {

    
    
   
     (this.gamesservice.selectedCatigorie?this.GetvalueByCategory(this.gamesservice.selectedCatigorie):null) 
    
     this.change.detectChanges();
    console.log("value of categorie : "+this.gamesservice.selectedCatigorie);
      
  }

  

UpdateCatigories(category: string){
  this.categories=category;
  this.ngOnInit();
}

customTB(item :any, index:any) {
  return `${item.id}-${index}`;
}
GetvalueByCategory(cat :string){
 

  this.gamesservice.findByCategories()
  .subscribe(games=>{
    this.ResultGames.slice(0);
    this.ResultGames=this.games=games.filter((game)=>(game.categories.includes(cat)));
    this.games.slice(0);
    this.change.detectChanges();
  });
  console.log("categorie in function : "+cat);
  console.log("games "+JSON.stringify(this.ResultGames));
}
}
