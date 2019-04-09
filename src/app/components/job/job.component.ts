import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Job } from '../../services/data/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {


  constructor(private httpService: HttpService) { }

  jobs: Job[];

  ngOnInit() {

    this.httpService.getJobs()
      .subscribe
      (data => {
        this.jobs = data;
      });
  }
}
