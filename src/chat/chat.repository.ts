import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat, ChatDocument } from 'src/schema/chats.schema';

@Injectable()
export class ChatRepository {
  constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>) {}

  public async cre() {
    const chat = new this.chatModel({
      idUser: '44',
      chats: [
        {
          idChat: 'e',
          members: ['dd'],
        },
      ],
    });

    chat.save();
  }
}
