import { SpamComponent } from './components/inbox/spam/spam.component';
import { DraftComponent } from './components/inbox/draft/draft.component';
import { SentComponent } from './components/inbox/sent/sent.component';
import { StarredComponent } from './components/inbox/starred/starred.component';
import { MessagesComponent } from './components/inbox/messages/messages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      {
        path: 'inbox',
        component: InboxComponent,
        children: [
          { path: '', redirectTo: 'messages', pathMatch: 'full' },
          { path: 'messages', component: MessagesComponent },
          { path: 'starred', component: StarredComponent },
          { path: 'sent', component: SentComponent },
          { path: 'draft', component: DraftComponent },
          { path: 'spam', component: SpamComponent },
        ],
      },
      { path: 'orders', component: OrdersComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
