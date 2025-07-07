import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueadosComponent } from './bloqueados.component';

describe('BloqueadosComponent', () => {
  let component: BloqueadosComponent;
  let fixture: ComponentFixture<BloqueadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloqueadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
