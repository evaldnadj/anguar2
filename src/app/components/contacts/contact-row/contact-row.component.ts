import { Component, Input } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';

@Component ({
    selector: '[contactRow]',
    templateUrl:'contact-row.component.html'
}) 

export class ContactRowComponent {
    @Input() contactRow: Contact;

}