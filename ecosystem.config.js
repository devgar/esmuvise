module.exports = {
    apps: [
        {
            name: 'esmuvise',
            exec_mode: 'cluster',
            instances: 'max',
            script: './frontend/.output/server/index.mjs',
            env: {
                "PORT": 3000,
            },
            env_production: {
                "PORT": 8080,
                "NODE_ENV": "production",
            },
        },
    ]
}