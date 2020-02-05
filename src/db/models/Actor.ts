export interface ActorAttributes {

}

export interface ActorInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

}

export const ActorFactory = (sequelize, DataTypes) => {
    var Actor = sequelize.define('Actor', {

    });

    Actor.associate = function(models) {
        // associations can be defined here
    };

    return Actor;
};
