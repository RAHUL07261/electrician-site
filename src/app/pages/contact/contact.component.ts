import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  openWhatsApp() {
    window.open("https://wa.me/9015335095", "_blank");
  }

  submitForm(form: any) {
    if (!form.valid) {
      alert("Please fill all fields.");
      return;
    }

    const message = `New Contact Message:
Name: ${form.value.name}
Phone: ${form.value.phone}
Message: ${form.value.message}`;

    const url = `https://wa.me/9015335095?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
}
