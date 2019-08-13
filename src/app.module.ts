import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './components/info/info.module';
import env from './utils/env';

@Module({
  imports: [
    MongooseModule.forRoot(env.MONGODB_URI, {
      useNewUrlParser: true
    }),
    InfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
