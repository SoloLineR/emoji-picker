import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-group',
  imports: [],
  template: `<p>group works!</p>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent {}
