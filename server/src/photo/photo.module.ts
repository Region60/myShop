import { photoProvider } from './photo.provider';
import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { RolesGuard } from 'src/roles/role.guard';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],
  providers: [...photoProvider, PhotoService, RolesGuard ],
  exports: [PhotoService],
})
export class PhotoModule {}