import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutaKontrolaComponent } from './auta-kontrola.component';

describe('AutaKontrolaComponent', () => {
  let component: AutaKontrolaComponent;
  let fixture: ComponentFixture<AutaKontrolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutaKontrolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutaKontrolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
