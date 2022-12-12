import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  baseData='http://127.0.0.1:5500/src/assets/data.json'
  getData(){
    this.baseData;
 }
}
