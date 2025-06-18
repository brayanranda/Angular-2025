import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character.model';
import { NgFor } from '@angular/common';
import { CharactersService } from '../../services/characters.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor],
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
      type: [''],
    })
  }

  ngOnInit() {
    this.characterService.getCharacters().subscribe((data: Character[]) => this.characters = data)
  }

  onSubmit() {
    
  }

}
