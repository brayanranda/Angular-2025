import { Component, Input } from '@angular/core';
import { Character } from '../../models/Character.model';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent {
  @Input() character!: Character;
}
