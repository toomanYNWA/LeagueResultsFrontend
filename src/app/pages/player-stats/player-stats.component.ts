import { Component, OnInit } from '@angular/core';
import { PlayerStatsService } from './player-stats.service';
import { PlayerDTO } from '../clubs-page/player-dto.component';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  goalsList: PlayerDTO[] = [];
  assistsList: PlayerDTO[] = [];
  constructor(private playerStatsService: PlayerStatsService) { }

  ngOnInit(): void {
    this.playerStatsService.getGoals().subscribe(
      (players : PlayerDTO[]) => {
        this.goalsList = players;
      },
      error => {
        console.error('Error fething players:', error);
      }
    );

    this.playerStatsService.getAssists().subscribe(
      (players : PlayerDTO[]) => {
        this.assistsList = players;
      },
      error => {
        console.error('Error fething players:', error);
      }
    );
  }

}
