import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

export enum Color {
  primary = '#0d6efd',
  secondary = '#6c757d',
  success = '#198754',
  danger = '#dc3545',
  warning = '#ffc107',
  info = '#0dcaf0',
  light = '#f8f9fa',
  dark = '#212529',
  body = '#212529',
  white = '#fff'
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        // { provide: Color, useValue: Color }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'enum-unittest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('enum-unittest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('enum-unittest app is running!');
  });
});
