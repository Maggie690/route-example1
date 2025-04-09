import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  // standalone:false,
  imports: [RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];

  constructor(private contactService: ContactService) {
    console.log('ctor')

  }

  ngOnInit(): void {
    console.log('HERE')
    this.contactService.getContacts().subscribe((data: any[]) => {
      console.log(data);
      this.contacts = data;
    });
  }
}
