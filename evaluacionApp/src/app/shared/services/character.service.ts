import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '@shared/interfaces/character.interface';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query :string, page :number):  Observable<Response>{
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}` ;
    return this.http.get<Response>(filter);
  }

  
  searchCharactersByFilters(name :string, status : string, gender: string):  Observable<Response>{
    const filter = `${environment.baseUrlAPI}/?name=${name}&status=${status}&gender=${gender}` ;
    return this.http.get<Response>(filter);
  }

  getDetails(id:number):  Observable<Response>{
    return this.http.get<Response>(`${environment.baseUrlAPI}/${id}`);
  }
 
}
