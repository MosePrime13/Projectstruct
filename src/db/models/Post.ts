export interface PostAttributes {
    title ? : string;
    description ? : string;

}

export interface PostInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    title: string;
    description: string;

}

export const PostFactory = (sequelize, DataTypes) => {
    var Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        pasta: DataTypes.STRING,
    });

    Post.associate = function(models) {
        // associations can be defined here
    };

    return Post;
};
