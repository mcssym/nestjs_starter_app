import {
    CacheModuleAsyncOptions,
    CacheStore,
    LiteralObject,
} from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigArguments } from './config_options';
import { CacheStoreType } from '../variables/environment';
import { MemoryConfig, memoryStore } from 'cache-manager';

const getStore = (
    storeType: CacheStoreType,
    options: LiteralObject,
): CacheStore => {
    switch (storeType) {
        default:
            return memoryStore(options as MemoryConfig);
    }
};

export const cacheOptions: CacheModuleAsyncOptions = {
    isGlobal: true,
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService<ConfigArguments>) => {
        const cacheConfig =
            configService.get<ConfigArguments['cache']>('cache');
        return {
            isGlobal: true,
            max: cacheConfig.maxItems,
            ttl: cacheConfig.ttl,
            store: (args: LiteralObject) => {
                return getStore(cacheConfig.store, args);
            },
        };
    },
};
