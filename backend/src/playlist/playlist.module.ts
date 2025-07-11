import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { PlaylistSyncService } from './playlist-sync.service';
import { PlaylistSyncController } from './playlist-sync.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';
import { SpotifyModule } from '../auth/spotify/spotify.module';

@Module({
  imports: [PrismaModule, HttpModule, SpotifyModule],
  controllers: [PlaylistController, PlaylistSyncController],
  providers: [PlaylistService, PlaylistSyncService],
  exports: [PlaylistService, PlaylistSyncService],
})
export class PlaylistModule {}
