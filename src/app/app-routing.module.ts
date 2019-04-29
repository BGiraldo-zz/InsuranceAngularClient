import { ClientComponent } from './client/client.component';
import { PolicyComponent } from './policy/policy.component';
import { ClientPolicyComponent } from './client-policy/client-policy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'client', component: ClientComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'client-policy', component: ClientPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
