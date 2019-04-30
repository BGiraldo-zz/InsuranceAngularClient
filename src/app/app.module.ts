// App
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule
  , MatToolbarModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { PolicyComponent } from './policy/policy.component';
import { ClientComponent } from './client/client.component';
import { ClientPolicyComponent } from './client-policy/client-policy.component';
// Services
import { ClientService } from './shared/services/client.service';
import { PolicyService } from './shared/services/policy.service';
import { ClientPolicyService } from './shared/services/client-policy.service';

@NgModule({
  declarations: [
    AppComponent,
    PolicyComponent,
    ClientComponent,
    ClientPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [ClientService, PolicyService, ClientPolicyService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
