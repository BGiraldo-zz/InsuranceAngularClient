// App
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
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
    FormsModule
  ],
  providers: [ClientService, PolicyService, ClientPolicyService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
