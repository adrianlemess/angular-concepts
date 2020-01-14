import { Injectable } from '@angular/core';
import { CustomersModule } from '../customers.module';

@Injectable()
export class CustomerService {

  constructor() { }

  getHello() {
    return 'hello';
  }
}
