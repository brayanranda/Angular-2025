import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character.model';
import { NgFor } from '@angular/common';
import { CharactersService } from '../../services/characters.service';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { CardCharacterComponent } from '../../components/card-character/card-character.component';
@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, CardCharacterComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  characters: Character[] = []
  form: FormGroup;

  constructor(private characterService: CharactersService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      status: [''],
      species: [''],
      gender: [''],
    })
  }

  page: number = 1;

  handleNextPage() {
    this.page++;
    this.loadedCharacters();
  }

  handlePreviousPage() {
    if(this.page <= 1) return;
    this.page--;
    this.loadedCharacters();
  }

  ngOnInit() {
    this.loadedCharacters();
  }

  loadedCharacters(name: string = '') {
    this.characterService.getCharacters(this.page, this.form.value.name ?? name).subscribe((data: Character[]) => this.characters = data)
  }

  handleSearch() {
    this.loadedCharacters(this.form.value.name)
  }

}
