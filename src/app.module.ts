import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatesModule } from './components/candidates/candidates.module';
import { FilesModule } from './components/files/files.module';

import env from './configs/env';

@Module({
  imports: [
    MongooseModule.forRoot(env.MONGODB_URI, {
      useNewUrlParser: true
    }),
    CandidatesModule,
    FilesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
