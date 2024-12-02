import { Routes } from '@angular/router';
import { ProductFormComponentComponent } from './product-module/product-form-component/product-form-component.component';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';

export const routes: Routes = [
    {path: 'product-form', component: ProductFormComponentComponent},
    {path:'invoice',loadChildren:()=>import('./invoice/invoice.module').then(m=>m.InvoiceModule)}
        

];
