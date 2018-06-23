/**
 * Basic config
 *
 * @type {{commandDir: string, prefix: string}}
 */
const config = {
    prefix: '/',
    staffGeneralLogChannel: process.env.DISCORD_GENERAL_LOG_CHANNEL,
    staffBanLogChannel: process.env.DISCORD_BAN_LOG_CHANNEL,
    staffMuteLogChannel: process.env.DISCORD_MUTE_LOG_CHANNEL,
    staffKickLogChannel: process.env.DISCORD_KICK_LOG_CHANNEL,
    database: {
        client: 'mysql',
        connection: {
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DATABASE,
        }
    }
};

module.exports = config;