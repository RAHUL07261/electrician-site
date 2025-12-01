import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqList = [
    {
      q: 'Do you provide home visits?',
      a: 'Yes, we provide same-day home visits for all electrical work.',
      open: false
    },
    {
      q: 'What are your service charges?',
      a: 'Basic inspection starts at ₹199. Final charges depend on the repair work.',
      open: false
    },
    {
      q: 'Do you install ceiling fans and lights?',
      a: 'Yes, we install and repair all types of fans, lights, and fittings.',
      open: false
    },
    {
      q: 'Is emergency repair available?',
      a: 'Yes, emergency repair is available with priority service.',
      open: false
    }
  ];

  toggle(i: number) {
    this.faqList[i].open = !this.faqList[i].open;
  }
}
