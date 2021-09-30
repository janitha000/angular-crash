
import 'zone.js';
import 'zone.js/testing';
import { HomeComponent } from './home.component';
import { async, TestBed } from '@angular/core/testing';

describe('HomeComponent', () => {
  let fixture: HomeComponent;
	let component: any;

	beforeEach(async(() => {
		fixture = new HomeComponent();
	}));
  
  describe("Setup component", () => {
    it("should initialise", () => {
      expect(component).toBeTruthy();
    }),
    it('should have correct header', () => {
      fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
      const h1 = compiled.querySelector('h1');
      expect(h1.textContent).toContain('home works!');
    })
  })
});
