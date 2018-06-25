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

}

module.exports = User;