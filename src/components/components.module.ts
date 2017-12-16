import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list';
import { StatusListComponent } from './status-list/status-list';
import { MessageListComponent } from './message-list/message-list';
@NgModule({
	declarations: [ContactListComponent,
    StatusListComponent,
    MessageListComponent],
	imports: [],
	exports: [ContactListComponent,
    StatusListComponent,
    MessageListComponent]
})
export class ComponentsModule {}
