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
  protected isEditing: boolean = false;
  protected editingIndex: number | null = null;

  addPlayer() {
    if (this.playerName.trim()) {
      this.players.push(this.playerName);
      this.playerName = '';
    }
  }

  editPlayer(index: number) {
    this.playerName = this.players[index];
    this.isEditing = true;
    this.editingIndex = index;
  }

  savePlayer() {
    if (this.isEditing && this.editingIndex !== null) {
      this.players[this.editingIndex] = this.playerName;
      this.isEditing = false;
      this.editingIndex = null;
    } else {
      this.addPlayer();
    }
    this.playerName = '';
  }

}
