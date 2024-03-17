import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './app/configurations/config_options';
import { CacheModule } from '@nestjs/cache-manager';
import { cacheOptions } from './app/configurations/cache_options';
import { InternalModule } from './modules/internal/internal.module';
import { WebModule } from './modules/http/web/web.module';
import { ApiModule } from './modules/http/api/api.module';
import { WebSocketModule } from './modules/ws/web-socket.module';

@Module({
    imports: [
        ConfigModule.forRoot(configOptions),
        CacheModule.registerAsync(cacheOptions),
        InternalModule,
        WebModule,
        ApiModule,
        WebSocketModule,
    ],
})
export class AppModule {}
