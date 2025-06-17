import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { EmojiService } from '../../services/emoji.service';
import { Observable } from 'rxjs';
import { Emoji } from '../../types/types';
import { EmojiListComponent } from '../../components/emoji-list/emoji-list.component';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-category',
  imports: [EmojiListComponent, AsyncPipe],
  template: `<p class="text-center text-9xl pb-5">{{ category }}</p>
    @if (emoji$ | async; as emoji) {
    <app-emoji-list [emojis]="emoji"></app-emoji-list>
    }@else {
    <p>Loading...</p>
    } `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
  private emojiService = inject(EmojiService);
  @Input() category!: string;
  emoji$!: Observable<Emoji[]>;
  ngOnInit(): void {
    this.emoji$ = this.emojiService.getEmojiByCategory(this.category);
  }
}
