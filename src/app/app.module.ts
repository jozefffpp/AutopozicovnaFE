import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './menu/menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AutaZoznamComponent } from './auta-zoznam/auta-zoznam.component';
import { AutoStrankaComponent } from './auto-stranka/auto-stranka.component';
import { AutoFormularComponent } from './auto-formular/auto-formular.component';
import { AutaKontrolaComponent } from './auta-kontrola/auta-kontrola.component';
import { CustomersZoznamComponent } from './customers-zoznam/customers-zoznam.component';
import { CustomersStrankaComponent } from './customers-stranka/customers-stranka.component';
import { CustomersFormularComponent } from './customers-formular/customers-formular.component';
import { BorrowingFormularComponent } from './borrowing-formular/borrowing-formular.component';
import { BorrowingStrankaComponent } from './borrowing-stranka/borrowing-stranka.component';
import { BorrowingZoznamComponent } from './borrowing-zoznam/borrowing-zoznam.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    AutoFormularComponent,
    AutoStrankaComponent,
    AutaZoznamComponent,
    AutaKontrolaComponent,

    CustomersFormularComponent,
    CustomersZoznamComponent,
    CustomersStrankaComponent,

    BorrowingFormularComponent,
    BorrowingStrankaComponent,
    BorrowingZoznamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
