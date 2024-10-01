import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://lacayoanthonysteven:e63QIXk8eRfmV7e2@users.5qzg7.mongodb.net/users?retryWrites=true&w=majority&appName=users',
    ),
    ClientModule,
  ],
})
export class AppModule {}
