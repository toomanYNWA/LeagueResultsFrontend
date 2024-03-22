import { Component, OnInit } from '@angular/core';
import { TablePageService } from './table-page.service';
import { ClubRankDTO } from './club-rank-dto.model';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {

  clubRankList: ClubRankDTO[] = [];
  seasonId: number = 1;
  constructor(private tableService: TablePageService) { }

  ngOnInit(): void {
    this.getClubRanks();
  }
  getClubRanks() {
    this.tableService.getClubRanks(this.seasonId).subscribe(
      (clubRanks: ClubRankDTO[] | null) => {
        if (clubRanks) {
          this.clubRankList = clubRanks; // Set clubRankList to the entire array
        } else {
          console.error('Error fetching club ranks: clubRanks is null');
        }
      },
      error => {
        console.error('Error fetching club ranks:', error);
      }
    );
  }
  sortBy(column: string) {
    this.clubRankList.sort((a, b) => Number(b[column]) - Number(a[column])); // Ensure values are cast to numbers
  }
  selectSeason(event: Event) {
    const target = event.target as HTMLSelectElement; // Cast event.target to HTMLSelectElement
    const selectedSeasonId = target.value; // Access the 'value' property
    if (selectedSeasonId !== null && selectedSeasonId !== undefined) {
      this.seasonId = parseInt(selectedSeasonId);
      this.getClubRanks();
    }
  }
}
