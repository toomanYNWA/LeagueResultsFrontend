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
  constructor(private tableService: TablePageService) { }

  ngOnInit(): void {
    this.tableService.getClubRanks().subscribe(
      (clubRanks: ClubRankDTO[]) => {
        clubRanks.forEach(obj =>{
          this.clubRankList.push(obj);
        });
      },
      error => {
        console.error('Error fetching club ranks:', error);
      }

    );
  }

  sortBy(column: string) {
    this.clubRankList.sort((a, b) => Number(b[column]) - Number(a[column])); // Ensure values are cast to numbers
  }
}
