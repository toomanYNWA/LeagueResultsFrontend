import { Component, OnInit } from '@angular/core';
import { PlayersService } from './players.service';
import { PlayerDTO } from '../clubs-page/player-dto.component';
import { ContractDTO } from './contract-dto.component';
import { Page } from './players-page.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: ContractDTO[] = [];
  pageNumber = 0;
  pageSize = 18;
  totalPageNumbers = 36;
  pageNumbers: number[] = Array.from({length: 36}, (_, i) => i );
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.fetchPlayers();
  }

  fetchPlayers(): void {
    this.playersService.getAllPlayers(this.pageNumber)
      .subscribe((page: Page<ContractDTO>) => {
        this.players = page.content;
      });
    console.log(this.players);
  }

  onPageChange(pageNumber: number): void {
    this.pageNumber = pageNumber;
    this.fetchPlayers();
  }

}
