import {
    QueryInterface,
    SequelizeStatic
} from 'sequelize';

export = {
    up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => Promise.all([
        queryInterface.renameColumn('Users', 'phone', 'telephone')
    ]),

    down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => Promise.all([
        queryInterface.renameColumn('Users', 'telephone', 'phone')
    ])
};
