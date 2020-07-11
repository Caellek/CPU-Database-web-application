import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpuListComponent } from './components/cpu-list/cpu-list.component';

import { HttpClientModule } from '@angular/common/http';
import { CpuService } from './service/cpu.service';
import { CpuDetailsComponent } from './components/cpu-details/cpu-details.component';
import { CpuEditComponent } from './components/cpu-edit/cpu-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CpuListComponent,
    CpuDetailsComponent,
    CpuEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CpuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
