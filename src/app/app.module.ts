import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';
import { AutofocusFixModule } from "ngx-autofocus-fix";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AutofocusFixModule.forRoot(),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
