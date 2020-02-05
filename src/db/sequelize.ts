import { UserFactory } from './models/User';
import {Sequelize} from 'sequelize-cockroachdb';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({path: __dirname + '/../../.env'});

const { database, dialect, host, port, logging, username, password } = require('../../config/db.json')[process.env.NODE_ENV];

let sequelize;

if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {

    sequelize = new Sequelize(database, username, password, {
        dialect: dialect,
        host: process.env.DB_HOST || host,
        logging: logging,
        operatorsAliases: false,
        typeValidation: true,
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        },
        storage: ':memory:'
    });

} else {

}

export const db = {
    sequelize,
    Sequelize,
    User: UserFactory(sequelize, Sequelize) 
}

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
  