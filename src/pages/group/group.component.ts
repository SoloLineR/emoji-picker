import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Emoji } from '../../types/types';
import { EmojiService } from '../../services/emoji.service';
import { AsyncPipe } from '@angular/common';
import { EmojiListComponent } from '../../components/emoji-list/emoji-list.component';

@Component({
  selector: 'app-group',
  imports: [AsyncPipe, EmojiListComponent],
  template: `<p class="text-center text-9xl pb-5">{{ group }}</p>
    @if (emoji$ | async; as emoji) {

    <app-emoji-list [emojis]="emoji"></app-emoji-list>
    } @else {
    <p>Loading...</p>
    } `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent implements OnInit {
  private emojiService = inject(EmojiService);
  @Input() group!: string;
  emoji$!: Observable<Emoji[]>;

  ngOnInit(): void {
    this.emoji$ = this.emojiService.getEmojiByGroup(this.group);
  }
}
