import { Controller } from '@nestjs/common';
import {Get, Post, Param, Body, Delete, Patch} from '@nestjs/common/decorators'
import { ChatService } from './chat.service';
import { chats } from './chat.model';

@Controller('chat')
export class ChatController {
    constructor(private chatservice:ChatService){}


    // @Post()
    // sendMsg(@Body('userMsg') userMsg:string){
    //     return this.chatservice.sendMsg(userMsg);
    // }
    @Post('/')
    serverRes(@Body('userMsg') userMsg:string){
        return this.chatservice.serverRes(userMsg);
    }

    @Get()
    getAllMsg():chats[]{
        return this.chatservice.getAllMsg();
    }

    @Delete('/:id')
    deleteMsg(@Param('id') id:any){
        this.chatservice.deleteMsg(id);
        return `the ${id} message is deleted`
    }

}
