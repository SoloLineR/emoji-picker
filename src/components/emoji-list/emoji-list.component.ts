import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiCardComponent } from '../emoji-card/emoji-card.component';
import { Emoji } from '../../types/types';

@Component({
  selector: 'app-emoji-list',
  standalone: true,
  imports: [CommonModule, EmojiCardComponent],
  template: `
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <app-emoji-card
        *ngFor="let emoji of emojiPaginated"
        [emoji]="emoji"
        class="hover:shadow-xl transition-shadow duration-300"
      ></app-emoji-card>
      <div id="virtual-observer-block" #observerTarget>
        Intersection observer block
      </div>
    </div>

    <div *ngIf="!emojis?.length" class="text-center py-12 text-gray-500">
      No emojis found
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmojiListComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() emojis: Emoji[] = [];
  @Input() title: string = 'Emoji List';

  emojiPaginated: Emoji[] = [];
  private observer: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {
    this.observer = new IntersectionObserver(this.handleObserver.bind(this), {
      rootMargin: '100px',
      threshold: 0.5,
      root: null,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['emojis'] && this.emojis?.length) {
      // Сбрасываем пагинацию при изменении входных данных
      this.emojiPaginated = this.emojis.slice(0, 20);
      this.cdRef.markForCheck(); // Помечаем для проверки изменений
    }
  }

  ngAfterViewInit(): void {
    const target = this.elementRef.nativeElement.querySelector(
      '#virtual-observer-block'
    );
    if (target) {
      this.observer.observe(target);
    }
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  private handleObserver(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        this.emojis?.length &&
        this.emojiPaginated.length < this.emojis.length
      ) {
        this.paginateEmoji();
      }
    });
  }

  private paginateEmoji() {
    const nextChunk = this.emojis.slice(
      this.emojiPaginated.length,
      this.emojiPaginated.length + 20
    );
    this.emojiPaginated = [...this.emojiPaginated, ...nextChunk];
    this.cdRef.markForCheck();
  }
}
