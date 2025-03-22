import { Component, effect, Injector, OnDestroy, runInInjectionContext, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent implements OnDestroy {

  count = signal(0)
  private loggingEffect = effect(() => {
    console.log("Count effect", this.count())
  }, { manualCleanup: true })

  constructor(private injector: Injector) {

  }


  initialisedLoggingEffect() {
    //runInInjectionContext(this.injector, () => {
    //  effect(() => {
    //    console.log("Count effect", this.count())
    //  })
    //})

    //effect(() => {
    //  console.log("Count effect", this.count())
    //}, { injector: this.injector })
  }

  updateCount() {
    this.count.update(count => count + 1)
  }

  ngOnDestroy(): void {
    this.loggingEffect.destroy()
  }

}
