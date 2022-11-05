import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { DisplayDataArrComponent } from './display-data-arr/display-data-arr.component';
import { DisplayArrComboComponent } from './display-arr-combo/display-arr-combo.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    DisplayDataArrComponent,
    DisplayArrComboComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
