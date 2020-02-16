export interface UserAttributes {

}

export interface UserInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

}

export const UserFactory = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, primaryKey: true },
        name: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        createdAt: {type: DataTypes.DATE, field: 'created_at'},
        updatedAt: {type: DataTypes.DATE, field: 'updated_at'},
        deletedAt: {type: DataTypes.DATE, field: 'deleted_at'},
    },{
        timestamps: true,
        paranoid: true
    });

    User.associate = function(models) {
        User.hasMany(models.Post, { foreignKey: 'user_id'})
    };

    return User;
};
