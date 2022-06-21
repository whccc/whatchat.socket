import { Injectable } from '@nestjs/common';
import { ChatRepository } from './chat.repository';

@Injectable()
export class ChatService {
  constructor(private chatRepository: ChatRepository) {}

  public crea() {
    this.chatRepository.cre();
  }
}
