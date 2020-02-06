import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message';
import { filter } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MessageBusService {
    private messages = new BehaviorSubject<Message>({ messageType: null, messagePayload: null });


    sendMessage(message: Message) {
        this.messages.next(message);
    }

    listen(messageType: any) {
        return this.messages.pipe(
            filter(m => m.messageType === messageType)
        )
    }

}