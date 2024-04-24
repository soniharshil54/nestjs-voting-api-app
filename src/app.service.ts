import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World man yeah!';
  }

  getMoon(): string {
    return 'Hello Moon woman!';
  }
}
