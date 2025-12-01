import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  whatsapp = '91PHONE_NUMBER'; // replace with your number

  send(form: NgForm) {
    if (!form.valid) {
      alert('Please fill required fields');
      return;
    }

    const v = form.value;

    const msg = `New contact request:%0AName: ${v.name}%0APhone: ${v.phone}%0AEmail: ${v.email || '-'}%0AMessage: ${v.message || '-'}`;

    window.open(`https://wa.me/${this.whatsapp}?text=${msg}`, '_blank');
  }
}
