import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const app = await NestFactory.create(AppModule);
app.enableCors();
await app.listen(3000);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
