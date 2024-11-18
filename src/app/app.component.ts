import { Component } from '@angular/core';
import { PlayingCardComponent } from './component/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:true,
  styleUrls: ['./app.component.css'],
  imports:[PlayingCardComponent],
})
export class AppComponent {
  title = 'playing-cards';
  monster1!:Monster;

  constructor()
  {
    this.monster1= new Monster()
    this.monster1.name="Pik"
    this.monster1.attackDescription="KK"
    this.monster1.attackStrengh=10
    this.monster1.figureCaption=10
    this.monster1.hp=7
  }
}
