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
};

module.exports = config;