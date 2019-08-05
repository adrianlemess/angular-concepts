import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-services';
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.save({ 
      name: 'Vinicius', 
      company: 'Ilegra',
      age: 20,
      nationality: 'Brasileiro' 
    })
    .subscribe(result => {
      console.log(result);
    });
  }
}
