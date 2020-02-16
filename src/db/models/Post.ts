export interface PostAttributes {

}

export interface PostInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

export const PostFactory = (sequelize, DataTypes) => {
    var Post = sequelize.define('Post', {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, primaryKey: true },
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT },
        createdAt: {type: DataTypes.DATE, field: 'created_at'},
        updatedAt: {type: DataTypes.DATE, field: 'updated_at'},
        deletedAt: {type: DataTypes.DATE, field: 'deleted_at'},
    },{
        timestamps: true,
        paranoid: true
    });

    Post.associate = function(models) {
        Post.belongsTo(models.User, { foreignKey: 'user_id'});
    };

    return Post;
};
