import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [CustomerDetailComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  providers: [
    CustomerService
  ]
})
export class CustomersModule { }
