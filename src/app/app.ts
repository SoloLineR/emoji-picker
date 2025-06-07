import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="flex flex-col min-h-dvh container mx-auto px-5">
      <header class="flex gap-5 justify-center text-2xl">
        <a routerLink="/">Home</a> <a routerLink="/search">Search</a>
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
