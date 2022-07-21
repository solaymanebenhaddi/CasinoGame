import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/Models/Games';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {


  games : Games[]=[];
  ResultGames : Games[]=[];

  categories: string[] = [];
 
  constructor(private gamesservice: GamesService) { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames(){
    this.gamesservice.findAll()
  .subscribe(games=>{
    this.ResultGames=this.games=games;
  });  
}
UpdateCatigories(category: string){
  this.categories[0]=category;
}

}
