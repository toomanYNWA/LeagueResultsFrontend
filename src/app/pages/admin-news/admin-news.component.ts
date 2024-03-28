import { Component, OnInit } from '@angular/core';
import { AdminNewsService } from './admin-news.service';
import { DatePipe } from '@angular/common';
import { NewsDTO } from './news-dto.model';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {
  headline: string = '';
  text: string = '';
  currentDate: string;
  newsList: NewsDTO[] = [];
  constructor(private adminNewsService: AdminNewsService, private datePipe: DatePipe) {
    // Get current local date in 'yyyy-MM-dd' format
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
  uploadData() {
    const data = {
      headline: this.headline,
      text: this.text,
      date: this.currentDate
    };

    console.log(data);

    this.adminNewsService.uploadNews(data).subscribe(
      response => {
        // Handle successful response
        console.log('Upload successful:', response);

      },
      error => {
        // Handle error
        console.error('Error uploading data:', error);
        setTimeout(() => {
          this.headline = '';
          this.text = '';
        }, 0);
      }

    );
  }
  refreshPage() {
    window.location.reload();
}
}
