import { ConfigModuleOptions } from '@nestjs/config';
import { validationSchema } from './schema';
import { CacheStoreType, NodeEnv } from '../variables/environment';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const configLoader = () => {
    const environment = process.env.NODE_ENV || NodeEnv.development;
    return {
        env: environment,
        isProduction: environment === NodeEnv.production,
        port: parseInt(process.env.PORT, 10) || 3000,
        cache: {
            store: process.env.CACHE_STORE as CacheStoreType,
            ttl: parseInt(process.env.CACHE_TTL, 10) || 3600,
            maxItems: parseInt(process.env.CACHE_MAX_ITEMS, 10) || 100,
        },
        security: {
            secret: process.env.SECRET,
            bcrypt_rounds: parseInt(process.env.BCRYPT_ROUNDS, 10) || 10,
        },
        database: {
            type: 'mysql',
            legacySpatialSupport: false,
            autoLoadEntities: true,
            logging: ['migration', 'error', 'warn'],
            host: process.env.DATABASE_HOST,
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
            migrationsTableName: 'migrations',
            synchronize: false,
        } satisfies TypeOrmModuleOptions,
    };
};

export type ConfigArguments = ReturnType<typeof configLoader>;

export const configOptions: ConfigModuleOptions = {
    envFilePath: ['.env.local', '.env'],
    isGlobal: true,
    cache: true,
    expandVariables: true,
    load: [configLoader],
    validationSchema: validationSchema,
    validationOptions: {
        allowUnknown: true,
        abortEarly: true,
    },
};
