import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  today: string = new Date().toISOString().split('T')[0];

  sendWhatsApp(form: any) {
    if (!form.valid) {
      alert("Please fill all details.");
      return;
    }

    const data = {
      workDate: form.value.workDate,
      service: form.value.service,
      name: form.value.name,
      phone: form.value.phone,
      address: form.value.address,
      problem: form.value.problem || "No extra details"
    };

    // ⭐ 1) Save to Google Sheet
    fetch("YOUR_GOOGLE_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // ⭐ 2) WhatsApp Auto-message
    const message = `New Booking Request:
Work Date: ${data.workDate}
Service: ${data.service}
Name: ${data.name}
Phone: ${data.phone}
Address: ${data.address}
Problem: ${data.problem}`;

    const url = `https://wa.me/9015335095?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}

