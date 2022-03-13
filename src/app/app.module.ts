import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AllApisComponent } from './COMPONENTS/all-apis/all-apis.component';
import { SortPipe } from './PIPES/sort.pipe';
import { CategoryComponent } from './COMPONENTS/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    AllApisComponent,
    CategoryComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
