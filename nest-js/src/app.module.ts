import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LearningModule } from './learning/learning.module';

@Module({
  imports: [LearningModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
