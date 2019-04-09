import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { JobDetails } from '../../services/data/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  job: JobDetails;

  constructor(
    private httpService: HttpService) {

  }

  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void {
    this.httpService.getJob('id')
      .subscribe(job => this.job = job);
  }

}
