import { Component, OnInit } from '@angular/core';
import { ResultsDTO } from './result-page-dto.model';
import { ResultsPageService } from './results-page.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  matchList: ResultsDTO[] = [];
  constructor(private resultsService: ResultsPageService) { }

  ngOnInit(): void {
    this.resultsService.getResults().subscribe(
      (matches: ResultsDTO[]) => {
        this.matchList = matches;
        });
      }

}
