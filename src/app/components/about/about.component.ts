import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { About } from '../../services/data/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  constructor(private httpService: HttpService) { }

  abouts: About[];

  ngOnInit() {

    this.httpService.getAbout()
      .subscribe
      (data => {
        this.abouts = data;
      });
  }
}
