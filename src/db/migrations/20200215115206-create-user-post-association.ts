import {
    QueryInterface,
    SequelizeStatic
} from 'sequelize';

export = {
    up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.addColumn(
            'Posts',
            'user_id',
            {
                type: Sequelize.UUID,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }

        )
    },

    down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
      return queryInterface.removeColumn(
        'Post',
        'user_id',
      );
    }
};
