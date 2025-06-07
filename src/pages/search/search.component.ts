import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmojiCategoriesTree } from '../../components/emoji-categories-tree/emoji-categories-tree.component';

@Component({
  selector: 'app-search',
  imports: [EmojiCategoriesTree],
  template: `<div>
    <emoji-categories-tree />
  </div>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {}
