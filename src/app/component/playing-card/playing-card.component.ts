import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css']
})
export class PlayingCardComponent {

  @Input({ required: true }) monster!: <Monster>

}
