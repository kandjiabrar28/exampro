import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddcandidatComponent } from './components/candidat/addcandidat/addcandidat.component';
import { EditcandidatComponent } from './components/candidat/editcandidat/editcandidat.component';
import { SearchcandidatComponent } from './components/candidat/searchcandidat/searchcandidat.component';
import { SearchcentreComponent } from './components/centre/searchcentre/searchcentre.component';
import { AddcentreComponent } from './components/centre/addcentre/addcentre.component';
import { EditcentreComponent } from './components/centre/editcentre/editcentre.component';
import { ExamproComponent } from './components/exampro/exampro.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CandidatService } from './services/candidat.service';
import { MenuComponent } from './components/menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddcandidatComponent,
    EditcandidatComponent,
    SearchcandidatComponent,
    SearchcentreComponent,
    AddcentreComponent,
    EditcentreComponent,
    ExamproComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
