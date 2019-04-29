import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPolicyComponent } from './client-policy.component';

describe('ClientPolicyComponent', () => {
  let component: ClientPolicyComponent;
  let fixture: ComponentFixture<ClientPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
