import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.customerService.getHello());
    console.log('env', environment.env);
  }

}
