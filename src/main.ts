import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { AppLogService } from './shared/services/log.service';
import env from './configs/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: new AppLogService()
  });
  await app.listen(env.PORT);
}
bootstrap();
