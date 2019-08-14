import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserEnum } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-services';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe((users) => {
        console.log(users);
      });

    this.userService.getById(0)
      .subscribe(user => {
        console.log('getByID', user);
      });

    this.userService.getByUsername('tarzan')
      .subscribe(users => {
        console.log(users);
      });

    this.userService.saveUser({
      age: 18,
      company: 'ilegra',
      nationality: 'Brazil',
      username: 'mica',
      role: UserEnum.USER
    }).subscribe();
  }
}
