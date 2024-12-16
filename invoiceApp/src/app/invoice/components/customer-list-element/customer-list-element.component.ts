import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from 'app/invoice/models/customer';

@Component({
  selector: 'app-customer-list-element',
  standalone: false,
  templateUrl: './customer-list-element.component.html',
  styleUrl: './customer-list-element.component.scss'
})
export class CustomerListElementComponent {

  @Input()
  customer: Customer=new Customer();

  @Output()
  deleteCustomerEvent=new EventEmitter<Customer>();

  deleteCustomer(customer: Customer){
    console.log('kasuje klienta o NIPie',this.customer.nip)
    this.deleteCustomerEvent.emit(customer);
  }

}
