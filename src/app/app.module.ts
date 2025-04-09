import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './services/backend.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

@NgModule({
  imports: [
    InMemoryWebApiModule.forRoot(BackendService),
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
