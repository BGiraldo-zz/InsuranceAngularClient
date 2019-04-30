import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ClientService } from './../shared/services/client.service';
import { Client } from './../shared/models/Client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  client: Client = new Client();

  clients: Client[] = [];

  profileForm: FormGroup;

  constructor(public clientService: ClientService, private formBuilder: FormBuilder) {
   this.initProfileForm();
  }

  initProfileForm() {
    this.profileForm = this.formBuilder.group({
      identification: [ '', Validators.required],
      completeName: [ '', Validators.required],
      address: [ null , Validators.required],
      phone: [ '' , Validators.required],
      email: [ '', Validators.required]
    });
  }

  list() {
    this.clientService.list().subscribe(data => {
      console.log(data);
      if (data.length !== 0) {
        this.clients = data;
      }
    });
  }

  add() {
    if (!this.profileForm.invalid) {

      this.client.Identification = this.profileForm.get('identification').value;
      this.client.CompleteName = this.profileForm.get('completeName').value;
      this.client.Address = this.profileForm.get('address').value;
      this.client.Phone = this.profileForm.get('phone').value;
      this.client.Email = this.profileForm.get('email').value;
      this.clientService.add(this.client).subscribe(data => {
        console.log(data);
        this.client = new Client();
        alert("Register Successful !!");
      });
    }
  }

}
