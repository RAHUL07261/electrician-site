import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

    openIndex: number | null = null;

  toggleFAQ(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
