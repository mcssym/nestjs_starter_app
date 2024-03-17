import {
    ValidationPipe,
    VersioningType,
    VERSION_NEUTRAL,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as compression from 'compression';
import { NestExpressApplication } from '@nestjs/platform-express';
import register from '@react-ssr/nestjs-express/register';
import { EnvironmentVariable } from './app/variables/environment';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        cors: true,
    });

    app.use(
        helmet({
            contentSecurityPolicy: false,
        }),
    );

    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: VERSION_NEUTRAL,
        prefix: false,
    });

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );

    app.enableCors();

    app.use(compression());

    app.useStaticAssets('public', {
        index: false,
        redirect: true,
    });

    // register `.tsx` as a view template engine
    await register(app);

    const configService = app.get(ConfigService);
    const port = configService.get(EnvironmentVariable.PORT);
    await app.listen(port);
}
bootstrap();
