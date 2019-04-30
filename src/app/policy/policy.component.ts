import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PolicyService } from './../shared/services/policy.service';
import { Policy } from './../shared/models/Policy';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {

  policy: Policy = new Policy();

  policies: Policy[] = [];

  profileForm: FormGroup;

  constructor(public policyService: PolicyService, private formBuilder: FormBuilder) {
   this.initProfileForm();
  }

  initProfileForm() {
    this.profileForm = this.formBuilder.group({
      name: [ '', Validators.required],
      description: [ '', Validators.required],
      coveringType: [ null , Validators.required],
      coverage: [ '' , Validators.required],
      termBeginning: [ '', Validators.required],
      coverageOnMonths: [ '', Validators.required],
      price: [ '', Validators.required],
      riskType: [ '', Validators.required]
    });
  }

  
  list() {
    this.policyService.list().subscribe(data => {
      console.log(data);
      if (data.length !== 0) {
        this.policies = data;
      }
    });
  }

  add() {

    var riskType = this.profileForm.get('riskType').value;
    var coverage = this.profileForm.get('coverage').value;

    if(riskType === 'Alto' && coverage >= 50){
      alert("This case the risk is high therefore the coverage must be less than 50%.");
      return;
    }

    if (!this.profileForm.invalid) {

      this.policy.Name = this.profileForm.get('name').value;
      this.policy.Description = this.profileForm.get('description').value;
      this.policy.CoveringType = this.profileForm.get('coveringType').value;
      this.policy.Coverage = this.profileForm.get('coverage').value;
      this.policy.TermBeginning = this.profileForm.get('termBeginning').value;
      this.policy.CoverageOnMonths = this.profileForm.get('coverageOnMonths').value;
      this.policy.Price = this.profileForm.get('price').value;
      this.policy.RiskType = this.profileForm.get('riskType').value;
      this.policyService.add(this.policy).subscribe(data => {
        console.log(data);
        this.policy = new Policy();
        alert("Register Successful !!");
      });
    }
  }

}
