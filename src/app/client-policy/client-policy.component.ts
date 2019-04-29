import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ClientPolicyService } from './../shared/services/client-policy.service';
import { ClientPolicy } from './../shared/models/ClientPolicy';

@Component({
  selector: 'app-client-policy',
  templateUrl: './client-policy.component.html',
  styleUrls: ['./client-policy.component.css']
})
export class ClientPolicyComponent {

  detail: ClientPolicy = new ClientPolicy();

  details: ClientPolicy[] = [];

  profileForm: FormGroup;

  constructor(public detailService: ClientPolicyService, private formBuilder: FormBuilder) {
   this.initProfileForm();
  }

  initProfileForm() {
    this.profileForm = this.formBuilder.group({
      policyId: [ '', Validators.required],
      clientId: [ '', Validators.required],
      status: [ null , Validators.required]
    });
  }



}
