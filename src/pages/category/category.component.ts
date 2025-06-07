import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  template: `<p>category works!</p>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {}
