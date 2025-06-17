import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex flex-col min-h-dvh container mx-auto px-5">
      <header class="flex gap-5 justify-center text-2xl pt-5 pb-20">
        <a
          routerLinkActive="text-accent"
          [routerLinkActiveOptions]="{ exact: true }"
          class="hover:text-accent"
          routerLink="/"
          >Home</a
        >
        <a
          routerLinkActive="text-accent"
          [routerLinkActiveOptions]="{ exact: true }"
          routerLink="/category-group"
          class="hover:text-accent"
          >Category & Group</a
        >
      </header>
      <main class="flex-1 ">
        <router-outlet />
      </main>
      <footer>footer</footer>
    </div>
  `,
})
export class App {
  protected title = 'emoji-picker';
}
