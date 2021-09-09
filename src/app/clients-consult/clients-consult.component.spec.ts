import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsConsultComponent } from './clients-consult.component';

describe('ClientsConsultComponent', () => {
  let component: ClientsConsultComponent;
  let fixture: ComponentFixture<ClientsConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
