import { Component, OnInit } from '@angular/core';
import { ResultsPageService } from '../results-page/results-page.service';
import { ResultsDTO } from '../results-page/result-page-dto.model';
import { FixturesPageService } from './fixtures-page.service';

@Component({
  selector: 'app-fixtures-page',
  templateUrl: './fixtures-page.component.html',
  styleUrls: ['./fixtures-page.component.css']
})
export class FixturesPageComponent implements OnInit {
  matchList: ResultsDTO[] = [];
  constructor(private resultsService: FixturesPageService) { }

  ngOnInit(): void {
    this.resultsService.getResults().subscribe(
      (matches: ResultsDTO[]) => {
        this.matchList = matches;
        });
      }
}


