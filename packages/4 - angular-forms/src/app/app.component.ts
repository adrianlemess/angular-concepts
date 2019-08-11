import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-forms';

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    // this.formService.getStates()
    //   .subscribe(states => {
    //     console.log(states);
    //   });

    // this.formService.getCitiesByStateCode('AC')
    //   .subscribe(cities => {
    //     console.log(cities);
    //   });
  }
}
