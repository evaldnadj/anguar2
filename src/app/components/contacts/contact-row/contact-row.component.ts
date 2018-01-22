import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';

@Component ({
    selector: '[contactRow]',
    templateUrl:'contact-row.component.html'
}) 

export class ContactRowComponent {

    private contact: Contact;

    @Input() 
    set contactRow (contact:Contact) {   
        this.contact = contact;
    }

    @Output() onEdit = new EventEmitter<Contact>();
    @Output() onRemove = new EventEmitter<Contact>();


    edit(contact) {
        this.onEdit.emit(contact);
    }
    remove(contact) {
        this.onRemove.emit(contact);
    }

}