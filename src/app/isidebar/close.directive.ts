import { Directive } from '@angular/core';

import { ISidebar } from './isidebar.component';

@Directive({
  selector: '[closeSidebar]',
  host: {
    '(click)': '_onClick()'
  }
})
export class CloseSidebar {
  constructor(private _sidebar: ISidebar) {}

  /** @internal */
  _onClick(): void {
    if (this._sidebar) {
      this._sidebar.close();
    }
  }
}
