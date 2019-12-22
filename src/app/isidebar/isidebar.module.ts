import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ISidebarContainer } from './isidebar-container.component';
import { ISidebar } from './isidebar.component';
import { CloseSidebar } from './close.directive';

@NgModule({
  declarations: [ISidebarContainer, ISidebar, CloseSidebar],
  imports: [CommonModule],
  exports: [ISidebarContainer, ISidebar, CloseSidebar]
})
export class ISidebarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ISidebarModule
    };
  }
}
