import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerFormComponent } from "./customer-form/customer-form.component";
import { CustomerComponent } from "./customer.component";

const routes:Routes=[
    {path:"", component:CustomerComponent,children:[
        {path:"",pathMatch:"full", redirectTo:"customers"},
        {path:"add",pathMatch:"full",component:CustomerFormComponent}
    ]}
    
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CustomerRoutingModule{

}