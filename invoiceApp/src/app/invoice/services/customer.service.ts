import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class CustomerService {

  constructor(
    private httpClient:HttpClient
  ) {}


  private customersList:Customer[]=[];
  private baseUrl:string='http://localhost:3000/customers';

  addCustomer(customer:Customer): Observable<any>{
    this.customersList.push(customer);

    return this.httpClient.post<any>(this.baseUrl,customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient
      .get<Customer[]>(this.baseUrl)
      .pipe(
        map((customers: Customer[]) =>
          customers.map((customer) => new Customer().deserialize(customer))
        )
      );
  }
}
