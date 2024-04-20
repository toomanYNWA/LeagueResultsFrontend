import { Component, OnInit } from '@angular/core';
import { ResultsDTO } from './result-page-dto.model';
import { ResultsPageService } from './results-page.service';
import { TeamDTO } from './team-dto.component';
import { StatsDTO } from './stats-dto.component';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  matchList: ResultsDTO[] = [];
  teamList:TeamDTO[] = [];
  selectedTeam: string = 'all';
  stat: StatsDTO;
  showStatPopup: boolean = false;
  isRowHighlighted: boolean = false;
  constructor(private resultsService: ResultsPageService) {
    this.stat = {
      id: -1,
      shotsHost: 0,
      onTargetHost: 0,
      shotsGuest: 0,
      onTargetGuest: 0,
      possessionHost: 0,
      possessionGuest: 0,
      hostMinutes: [0],
      guestMinutes: [0],
      matchId: 0
    };
  }

  ngOnInit(): void {
    this.resultsService.getResults().subscribe(
      (matches: ResultsDTO[]) => {
        this.matchList = matches;
        });
    this.resultsService.getClubs().subscribe(
      (clubs: TeamDTO[])=>{
        this.teamList = clubs;
      }
    )
    }
    filterMatches(): void {
        this.resultsService.getMatches(this.selectedTeam).subscribe(
          (matches: ResultsDTO[]) => {
            this.matchList = matches;
          }
        );
      }
      showPopup(matchId: number): void {
        this.resultsService.getStats(matchId).subscribe(
          (stat: StatsDTO) => {
            this.stat = stat;
            this.showStatPopup = true; // Show the tooltip/popover
          }
        );
      }

      hidePopup(): void {
        this.showStatPopup = false; // Hide the tooltip/popover
      }
      highlightRow(isHighlighted: boolean): void {
        this.isRowHighlighted = isHighlighted;
      }
}


