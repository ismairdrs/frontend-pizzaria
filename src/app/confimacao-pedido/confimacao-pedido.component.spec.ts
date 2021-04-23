import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimacaoPedidoComponent } from './confimacao-pedido.component';

describe('ConfimacaoPedidoComponent', () => {
  let component: ConfimacaoPedidoComponent;
  let fixture: ComponentFixture<ConfimacaoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfimacaoPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimacaoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
