import { Component, OnInit } from '@angular/core';
import { ClubsPageService } from './clubs-page.service';
import { ClubDTO } from './club-dto.model';
import { PlayerDTO } from './player-dto.component';

@Component({
  selector: 'app-clubs-page',
  templateUrl: './clubs-page.component.html',
  styleUrls: ['./clubs-page.component.css'],
})
export class ClubsPageComponent implements OnInit {
  clubList: ClubDTO[] = [];
  selectedClub: ClubDTO | null = null;
  showPlayerTable: boolean = false;
  playersList: PlayerDTO [] = [];
  constructor(private clubService: ClubsPageService) { }

  ngOnInit(): void {
    this.clubService.getAllClubsInLeague().subscribe(
      (clubs: ClubDTO[]) =>{
        this.clubList = clubs.map(club =>({
          ...club,
          icon: `assets/${this.getIconFilenameForClub(club.id)}`
        }));

      },
      error => {
        console.error('Error fetching clubs:', error);
      }
    );

  }
  onSelectClub(event: any): void {
    const selectedClubId: number = parseInt(event.target.value, 10); // Parse string to number
    this.selectedClub = this.clubList.find(club => club.id === selectedClubId) || null; // Use nullish coalescing operator to handle undefined case
    this.showPlayerTable = false;
  }
  showPlayers(clubId: number): void {
    this.clubService.getPlayersByClubId(clubId).subscribe(
      (players: PlayerDTO[]) => {
        this.playersList = players;
        this.showPlayerTable = true;
      },
      error => {
        console.error('Error fetching players:', error);
      }
    );
  }
  private getIconFilenameForClub(clubId: number): string {
    // Implement logic to map club IDs to icon filenames
    // For example, you can use a switch statement or if-else conditions
    switch (clubId) {
      case 1:
        return 'liverpool.png';
       case 7:
         return 'arsenal.png';
      case 13:
        return 'manutd.png';
      case 16:
        return 'chel.png';
      default:
        return 'default-icon.png'; // Default icon if club ID doesn't match
    }
  }
  generatePDF(clubId:number):void{
    this.clubService.generatePDF(clubId).subscribe(
      response=>{
        alert("PDF generated!")
      }
    );
  }
}
