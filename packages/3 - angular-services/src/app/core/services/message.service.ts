import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from './message.model';

@Injectable({ providedIn: 'root' })
export class MessageServiceSubject {
    private subject = new Subject<Message>();

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<Message> {
        return this.subject.asObservable();
    }
}