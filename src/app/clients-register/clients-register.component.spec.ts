import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsRegisterComponent } from './clients-register.component';

describe('ClientsRegisterComponent', () => {
  let component: ClientsRegisterComponent;
  let fixture: ComponentFixture<ClientsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
