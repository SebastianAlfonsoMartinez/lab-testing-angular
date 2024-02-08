import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsComponent } from './greetings.component';
import { By } from '@angular/platform-browser';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verificar mensaje por defecto'), () => {
    const text = element.querySelector('.mensaje');
    expect(text?.textContent).toContain(component.mensaje)
  }
  it('Valor de mensaje correcto', () => {
    const mensajeEl = fixture.debugElement.query(By.css('.mensaje')).nativeElement;
    expect(mensajeEl.textContent).toContain('Valor por defecto');
  });

});
