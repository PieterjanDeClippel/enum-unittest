import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

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
    fixture.detectChanges();
    
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'enum-unittest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const app = fixture.componentInstance;
    expect(app.title).toEqual('enum-unittest');
  });

  it(`should have as background #dc3545`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    fixture.whenStable().then(() => {
      console.log('el', fixture.nativeElement);
      expect(fixture.nativeElement.querySelector('div').style.background).toEqual('rgb(25, 135, 84)');
    });
  });
});

export enum Color {
  primary = '#0d6efd',
  secondary = '#6c757d',
  success = '#dc3545',
  danger = '#198754',
  warning = '#ffc107',
  info = '#0dcaf0',
  light = '#f8f9fa',
  dark = '#212529',
  body = '#212529',
  white = '#fff'
}
