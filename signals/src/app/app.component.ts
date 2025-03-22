import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { EffectsComponent } from "./effects/effects.component";
import { EqualityComponent } from "./equality/equality.component";
import { UntrackedComponent } from "./untracked/untracked.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, EffectsComponent, EqualityComponent, UntrackedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
