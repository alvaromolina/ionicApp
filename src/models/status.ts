import { Contact } from "./contact";

export class Status {

  text: String;
  image: String;
  date: Date;
  contact: Contact;
  
  constructor(text: String, image: String, date: Date, contact: Contact) {
      this.text = text;
      this.image = image;
      this.date = date;
      this.contact = contact;
      
  }
  
}