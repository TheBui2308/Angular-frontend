import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import necessary forms modules

import { AppComponent } from './app.component';// Adjust the path accordingly
import { CategoryComponent } from './admin/category/category.component';

@NgModule({
  declarations: [

    // Add other components if needed
  ],
  imports: [
    AppComponent,
    CategoryComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    // Add other modules if needed
  ],
})
export class AppModule { }
