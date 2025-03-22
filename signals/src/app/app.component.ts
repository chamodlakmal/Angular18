import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { EffectsComponent } from "./effects/effects.component";
import { EqualityComponent } from "./equality/equality.component";
import { UntrackedComponent } from "./untracked/untracked.component";
import { CleanupComponent } from "./cleanup/cleanup.component";
import { RxjsInteropComponent } from "./rxjs-interop/rxjs-interop.component";
import { ToObservableComponent } from "./to-observable/to-observable.component";
import { SignalInputsComponent } from "./signal-inputs/signal-inputs.component";
import { ModelInputsComponent } from "./model-inputs/model-inputs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, EffectsComponent, EqualityComponent, UntrackedComponent, CleanupComponent, RxjsInteropComponent, ToObservableComponent, SignalInputsComponent, ModelInputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //  showCleanUpComponent = signal(false);
  //
  //  toggleCleanUpComponent() {
  //    this.showCleanUpComponent.set(!this.showCleanUpComponent());
  //  }

  parentChecked = true

  //handleCheckedChange(value: boolean) {
  //  console.log("parent handle checked Change : ", value)
  //  this.parentChecked = value
  //}

}
