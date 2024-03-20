import { Component, OnInit } from '@angular/core';
import { AdminNewsService } from '../admin-news/admin-news.service';
import { DatePipe } from '@angular/common';
import { NewsDTO } from '../admin-news/news-dto.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  headline: string = '';
  text: string = '';
  currentDate: string;
  newsList: NewsDTO[] = [];
  constructor(private adminNewsService: AdminNewsService, private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }

  ngOnInit(): void {
    this.adminNewsService.getAllNews().subscribe(
      (news: NewsDTO[]) => {
        news.forEach(obj => {
        this.newsList.push(obj);
        console.log("aaaaaaaaasdf");
        });
        console.log(news);
        console.log("ASJFNASDBFJHSDBFHJSBDH");
      },
      error => {
        console.error('Error fetching news:', error);
      }
    );
    console.log(this.newsList);
  }

}
