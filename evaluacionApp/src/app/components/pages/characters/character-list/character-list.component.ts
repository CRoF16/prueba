import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import {take} from 'rxjs/operators';
type RequestInfo = {
  next: string;
};
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit{
  characters:Character[]=[];
  info: RequestInfo = {
    next : '',
  };
  private pageNum : number= 1;
  private query:string = "";
  public gender: string = "";
  public name: string = "";
  public status: string = "";
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(private characterSvc: CharacterService){ }

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService(): void{
    this.characterSvc.searchCharacters(this.query, this.pageNum).subscribe(response =>{
      this.characters = response.results
    })
    
  }

  public filtrar(): void {
    console.log("test")
    this.characterSvc.searchCharactersByFilters(this.name, this.status, this.gender).subscribe(response =>{
      this.characters = response.results
    })
  }

}
