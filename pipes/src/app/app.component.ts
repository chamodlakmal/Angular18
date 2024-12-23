import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FormsModule } from '@angular/forms'
import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe, JsonPipe, SlicePipe, ShortenPipe, FormsModule, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';

  today = new Date();

  user: User = {
    name: 'Chamod',
    age: 23
  }

  names: string[] = ["Nimal", "Sunil", "Kamal", "Siril"]

  searchValue: string = ""

  addUser() {
    this.names.push("Nimal")
  }
}

interface User {
  name: string,
  age: number
}
