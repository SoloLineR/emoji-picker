import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="flex flex-col min-h-dvh container mx-auto px-5">
      <header>header</header>
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
