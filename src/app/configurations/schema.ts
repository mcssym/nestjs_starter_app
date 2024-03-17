import * as Joi from 'joi';
import {
    CacheStoreType,
    EnvironmentVariable,
    NodeEnv,
} from '../variables/environment';

export const validationSchema = Joi.object({
    [EnvironmentVariable.PORT]: Joi.number().required(),
    [EnvironmentVariable.NODE_ENV]: Joi.string()
        .valid(NodeEnv.development, NodeEnv.production, NodeEnv.local)
        .required(),
    [EnvironmentVariable.CACHE_MAX_ITEMS]: Joi.number().required(),
    [EnvironmentVariable.CACHE_TTL]: Joi.number().required(),
    [EnvironmentVariable.CACHE_STORE]: Joi.string()
        .valid(CacheStoreType.file, CacheStoreType.memory, CacheStoreType.redis)
        .required(),
});
