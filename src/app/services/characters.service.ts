import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Character } from '../models/Character.model';
import { HttpClient } from '@angular/common/http';

interface CharactersResponse {
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  private apiUrl: string = `https://rickandmortyapi.com/api/character`;

  constructor(private http: HttpClient) { }

  getCharacters(page: number, name?: string): Observable<Character[]> {
    const nameQuery = name ? `&name=${name}` : '';
    const fullUrl = `${this.apiUrl}?page=${page}${nameQuery}`;

    return this.http.get<CharactersResponse>(fullUrl).pipe(
      map(response => response.results)
    );
  }

  updateCharacter (character: Character): Observable<Character> {
    return this.http.put<Character>(`${this.apiUrl}/${character.id}`, character);
  }

  deleteCharacter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
