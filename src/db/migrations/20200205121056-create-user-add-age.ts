import {
    QueryInterface,
    SequelizeStatic
} from 'sequelize';

export = {
    up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => 
    queryInterface.addColumn('Users', 'age', {
        type: Sequelize.INTEGER 
    }),

    down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
      
    }
};
