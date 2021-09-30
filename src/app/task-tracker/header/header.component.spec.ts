import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

fdescribe('HeaderComponent', () => {
  let fixture : HeaderComponent;
  let uiServiceMock: any;
  

  beforeEach(async () => {
     fixture = new HeaderComponent(
      uiServiceMock
     )
  });

  describe("Setup component", () => {
    it('should initialise the component', () => {
      
    })
  })
});
