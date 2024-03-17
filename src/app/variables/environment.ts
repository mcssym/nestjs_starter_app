export enum EnvironmentVariable {
    PORT = 'PORT',
    NODE_ENV = 'NODE_ENV',
    CACHE_STORE = 'CACHE_STORE',
    CACHE_TTL = 'CACHE_TTL',
    CACHE_MAX_ITEMS = 'CACHE_MAX_ITEMS',
}

export enum NodeEnv {
    production = 'production',
    development = 'development',
    local = 'local',
}

export enum CacheStoreType {
    memory = 'memory',
    redis = 'redis',
    file = 'file',
}
