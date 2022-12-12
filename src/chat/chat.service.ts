import { Body, Injectable } from '@nestjs/common';
import { chats } from './chat.model';
import { v4 as uuidv4 } from 'uuid';
import { retry } from 'rxjs';

@Injectable()
export class ChatService {
 
    private msgDetails:chats[]=[];


    sendMsg(userMsg:string){
        const id = uuidv4();
        const msgData:chats ={
            id,
            userMsg
        } 
        this.msgDetails.push(msgData)
        return msgData;
        
    }
    serverRes(userMsg:string){
        console.log(userMsg);
        const message= autoResponse.find(response=>response.userMsg===userMsg.toLowerCase()).serverReply;
        return{message};
    }

    getAllMsg():chats[]{
        return this.msgDetails;
    }
   deleteMsg(id:any){
        this.msgDetails = this.msgDetails.filter(msgData=> msgData.id!==id);
   }   
}

const students = [
    {
        id: 1,
        name: "student 1",
    },
    {
        id: 2,
        name: "student 3",
    },
    {
        id: 3,
        name: "student 2",
    }
]
 
const subjects = [
    {
        subject: 'awp',
        id: '1'
    },{
        subject: 'Java',
        id: '2'
    },{
        subject:'iot',
        id:'3'
    },{
        subject:'lsa',
        id:'4'
    },{
        subject:'spm',
        id:'5'
    }
]

const attendance = [{
    date: '',
    startTime: '',
    endTime: '',
    studentId: 1,
    lectureId: '1',
    status: 'present'
   },
   {
    date: '',
    startTime: '',
    endTime: '',
    studentId: 2,
    lectureId: '1',
    status: 'absent'
    },
    {
    date: '',
    startTime: '',
    endTime: '',
    studentId: 3,
    lectureId: '1',
    status: 'present'
}]
    
    
const autoResponse=[
    {
        userMsg:'hi',
        serverReply:'hello' 
    },{
        userMsg:'todays schedule',
        serverReply:subjects
    },{
        userMsg:"stats",
        serverReply: attendance
    },{
        userMsg:""
    }
]
/* 
    C -present
    S - for which subject
    c - AWP
    S - day?
    C- Today
    s- Class
    C - Fy
    S
*/