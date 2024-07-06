import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss'
})
export class PlayersListComponent {
  protected playerName: string = '';
  protected players: string[] = [];

  addPlayer() {
    if (this.playerName.trim()) {
      this.players.push(this.playerName);
      this.playerName = '';
    }
  }

}
