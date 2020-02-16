import {
    QueryInterface,
    SequelizeStatic
} from 'sequelize';

export = {
    up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.createTable('Users', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1, 
                primaryKey: true
            },

            name: { 
                type: Sequelize.STRING 
            },

            email: {
                 type: Sequelize.STRING
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'created_at'
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'updated_at'
            },

            deletedAt: {
                type: Sequelize.DATE,
                field: 'deleted_at'
            }
        },{
            timestamps: true,
            paranoid: true
        });
    },

    down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.dropTable('Users');
    }
};
