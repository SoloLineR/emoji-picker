import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Emoji } from '../types/types';
@Injectable({
  providedIn: 'root',
})
export class EmojiService {
  private http = inject(HttpClient);

  randomEmoji$ = this.http.get<Emoji>(`${environment.apiUrl}/random`);

  getEmojiByCategory(category: string) {
    return this.http.get<Emoji[]>(
      `${environment.apiUrl}/all/category/${category}`
    );
  }

  getEmojiByGroup(group: string) {
    return this.http.get<Emoji[]>(`${environment.apiUrl}/all/group/${group}`);
  }
}
