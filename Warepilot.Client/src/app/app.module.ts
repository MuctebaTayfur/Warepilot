import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CustomerComponent } from './customer/customer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductGuard } from './product/product.guard';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
const routes:Routes=[
  {path:'',component:HomeComponent,children:[
     {path: 'products', component: ProductListComponent},
     {path: 'products/:id', component: ProductComponent, canActivate:[ProductGuard]},
     { path: 'customers', loadChildren: () => import('./customer/customer-routing.module').then(m => m.CustomerRoutingModule)},
  
     {path: '', component: WelcomeComponent}

  ]},
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    WelcomeComponent,
    CustomerFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule,
    SharedModule,
    ReactiveFormsModule,
    SocialLoginModule

  ],
  providers: [ {
    provide: "SocialAuthServiceConfig",
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1008685979353-7d138fagha1kbeff8jcs0pjv6bu4hh0u.apps.googleusercontent.com")
        }
      ],
      onError: err => console.log(err)
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
