import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { todoService } from './todo.service';
import { SessionComponent } from './session/session.component';
import { SessionService } from './session.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SessionComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],

  
  providers: [todoService,SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
