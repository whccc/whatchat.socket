import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  idUser: String;

  @Prop()
  chats: [
    {
      idChat: String;
      members: Array<String>;
    },
  ];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
