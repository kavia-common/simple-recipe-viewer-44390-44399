import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  template: `
    <header class="header">
      <h1 class="logo">Recipe Viewer</h1>
      <input
        class="search"
        type="search"
        placeholder="Search recipes..."
        [(ngModel)]="term"
        (input)="termChange()"
      />
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  term = '';
  @Output() search = new EventEmitter<string>();

  termChange() {
    this.search.emit(this.term);
  }
}
