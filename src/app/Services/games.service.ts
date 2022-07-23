import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Games } from '../Models/Games';



@Injectable({
  providedIn: 'root'
})
export class GamesService {

  selectedCatigorie: any='new';
  APIUrl = "http://localhost:3000/games";

  constructor(private http:HttpClient) { }

  findAll(){
   return this.http.get<Games[]>(this.APIUrl);
  }
  findByCategories(){
    
    return this.http.get<Games[]>(this.APIUrl);
  }
  updateCategorie(categorie : any){
    this.selectedCatigorie=categorie;
  }
}
