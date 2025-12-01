import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {


// Replace with your phone number in international format (no + or spaces), e.g. 919876543210
whatsappNumber = '919015335095';


onSubmit(form: NgForm) {
if (!form.valid) {
alert('Please fill required fields');
return;
}


const data = form.value;
const message = `New booking request:%0AName: ${encodeURIComponent(data.name)}%0APhone: ${encodeURIComponent(data.phone)}%0AService: ${encodeURIComponent(data.service)}%0ADate: ${encodeURIComponent(data.date || '-') }%0AAddress: ${encodeURIComponent(data.address)}%0ANotes: ${encodeURIComponent(data.notes || '-')}`;


const url = `https://wa.me/${this.whatsappNumber}?text=${message}`;
window.open(url, '_blank');
}


// optional helper: save form locally to browser storage
saveLocal(form: NgForm) {
localStorage.setItem('lastBooking', JSON.stringify(form.value));
alert('Saved locally');
}
}


