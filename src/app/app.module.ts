import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { MessagesComponent } from './components/inbox/messages/messages.component';
import { StarredComponent } from './components/inbox/starred/starred.component';
import { SentComponent } from './components/inbox/sent/sent.component';
import { DraftComponent } from './components/inbox/draft/draft.component';
import { SpamComponent } from './components/inbox/spam/spam.component';
import { CalcRatingPipe } from './shared/services/pipes/calc-rating.pipe';
import { SearchPipe } from './shared/services/pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    EditProductComponent,
    InboxComponent,
    OrdersComponent,
    ContactsComponent,
    FooterComponent,
    NotFoundComponent,
    MainComponent,
    MessagesComponent,
    StarredComponent,
    SentComponent,
    DraftComponent,
    SpamComponent,
    CalcRatingPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
