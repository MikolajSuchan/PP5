import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CustomerFormComponent,CustomerListComponent,CustomerListElementComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    HttpClientModule,
    ],
  exports:[CustomerFormComponent,CustomerListComponent],
  providers:[CustomerService]
})
export class InvoiceModule { }
