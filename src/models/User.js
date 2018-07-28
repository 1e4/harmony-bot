const { Model } = require('objection');

class User extends Model {

    static get tableName() {
        return 'users';
    }

    static findByUserId(user_id) {
        return this.query()
            .where("user_id", "=", user_id)
            .first();
    }

    static async give(user_id, gift) {
        await User.query().patch(gift)
            .where('id', '=', user_id);
    }

}

module.exports = User;