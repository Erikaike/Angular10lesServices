import { Component, OnInit } from '@angular/core';
import { RequestDurationService } from './request-duration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private reqDurationService!: RequestDurationService
  constructor(reqDurationService: RequestDurationService){}

  ngOnInit(): void {
    this.reqDurationService.fetchData().subscribe(
      data => console.log('Données reçues: ', data)
    );
  }
}
