import {
    QueryInterface,
    SequelizeStatic
} from 'sequelize';

export = {
    up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => Promise.all([
        queryInterface.renameColumn('Posts', 'masta', 'pasta')
    ]),

    down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => Promise.all([
        queryInterface.renameColumn('Posts', 'pasta', 'masta')
    ])
};
