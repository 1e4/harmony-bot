class LinkFilter {
    constructor(message) {
        this.m = message;
        this.message = message.content;
        this.channel = message.channel;
    }

    filter() {

        // Skip bots
        if(this.m.author.bot)
            return;

        let mutedRole = this.m.member.roles.find(role => role.name === "admin");

        if(mutedRole)
            return;

        if (this.message.includes('https://') || this.message.includes('http://') || this.message.includes('www.')) {
            this.m.delete();
            console.log('Link found deleting');
        }
    }
}

module.exports = LinkFilter;