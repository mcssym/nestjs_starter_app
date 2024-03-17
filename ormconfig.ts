import { ConfigModule } from '@nestjs/config';
import { configLoader } from './src/app/configurations/config_options';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot({
    isGlobal: true,
    load: [configLoader],
});

export default new DataSource({
    ...configLoader().database,
    entities: ['src/db/**/*.entity.ts'],
    migrations: ['database/migrations/*{.ts,.js}'],
} as DataSourceOptions);
