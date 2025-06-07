import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EmojiService } from '../../services/emoji.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  template: `<div class="flex justify-center items-center flex-col">
    <div class="flex-1 flex flex-col justify-center items-center gpa-5">
      <h1 class="text-6xl font-bold text-center text-on-primary pt-20">
        Emoji Picker
      </h1>
      <h2 class="text-3xl font-bold text-center text-on-primary">
        Pick your favorite emoji
      </h2>

      @if(emoji$ | async; as emoji ){
      <div>
        <div
          class="text-[200px] text-center"
          [innerHTML]="emoji.htmlCode[0]"
        ></div>
        <p class="text-3xl text-center">Name: {{ emoji.name }}</p>
        <p class="text-2xl text-center ">Category: {{ emoji.category }}</p>
        <p class="text-2xl text-center">Group: {{ emoji.group }}</p>
      </div>

      }
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private emojiService = inject(EmojiService);
  emoji$ = this.emojiService.randomEmoji$;
}
