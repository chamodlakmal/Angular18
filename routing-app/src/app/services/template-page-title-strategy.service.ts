import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TemplatePageTitleStrategyService extends TitleStrategy {

  constructor(private title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot)
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}
