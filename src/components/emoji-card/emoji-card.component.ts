import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Emoji } from '../../types/types';

@Component({
  selector: 'app-emoji-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex flex-col items-center bg-surface rounded-xl shadow-md overflow-hidden   m-4 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
      (click)="copyEmoji()"
    >
      <div class="text-8xl p-6" [innerHTML]="emoji.htmlCode[0]"></div>
      <div class="p-6 w-full">
        <div class="text-2xl text-center font-bold text-on-primary capitalize">
          {{ emoji.name }}
        </div>
        <div class="flex justify-between gap-1 mt-4 text-base text-gray-500">
          <span
            class="bg-accent text-on-accent  text-center px-[6px]  py-1 rounded-full"
          >
            {{ emoji.category }}
          </span>
          <span
            class="bg-primary text-accent  text-center px-[6px] py-1 rounded-full"
          >
            {{ emoji.group }}
          </span>
        </div>
        <div
          class="mt-4 p-3 bg-secondary rounded-lg flex items-center justify-around"
        >
          <div class="text-xs font-mono text-on-accent">
            <div class="font-semibold">HTML:</div>
            <div>{{ emoji.htmlCode.join(', ') }}</div>
          </div>
          <div class="text-xs font-mono text-on-accent ">
            <div class="font-semibold">Unicode:</div>
            <div>{{ emoji.unicode.join(', ') }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmojiCardComponent {
  @Input() emoji!: Emoji;

  async copyEmoji() {
    try {
      const emojiChar = String.fromCodePoint(
        parseInt(this.emoji.unicode[0].substring(2), 16)
      );

      await navigator.clipboard.writeText(emojiChar);
      console.log('Смайлик скопирован!', emojiChar);

      alert(`Скопировано: ${emojiChar}`);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  }
}
