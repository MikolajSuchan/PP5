import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from 'app/invoice/models/customer';

@Component({
  selector: 'app-customer-list',
  standalone:false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit,OnDestroy {

  customerList: Customer[];

  constructor(
    private customerService:CustomerService,
    private router:Router
  ){
    console.log(this.customerService.getCustomer())
    this.customerList=this.customerService.getCustomer();
  }

  redirectToForm(){
    this.router.navigate(['invoice/customer-form'])
  }

  ngOnInit(){
    this.customerList
  }

  ngOnDestroy(){
    console.log('Zamykam komponent')
  }

  deleteCustomer(customer:Customer){
    console.log('Rodzic otrzymał',customer)
  }

}