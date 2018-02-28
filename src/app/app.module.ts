import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';

// Modules
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'application-library',
        pathMatch: 'full'
      }
      , {
        path: 'dashboard',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
      , {
        path: 'application-library',
        redirectTo: 'application-library',
        pathMatch: 'full'
      }
    ]),
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
