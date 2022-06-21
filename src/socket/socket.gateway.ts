import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from 'src/chat/chat.service';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class socketGateway {
  constructor(private chatService: ChatService) {}
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('connection')
  public con(a) {
    // console.log(a, 'cone');
  }
  @SubscribeMessage('Prueba')
  public handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ): void {
    //  console.log(message, 'hola');
    this.server.emit('message', { message });
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log('sde', client.handshake.query, client);
    this.chatService.crea();
  }
  handleDisconnect() {
    console.log('me fui');
  }
}
