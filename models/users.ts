import { DataTypes } from 'sequelize';

import { db } from '../database/config.db';

const User = db.define('Users',{
    User_Id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    User_RolID:{
        type: DataTypes.INTEGER,
    },
    User_Name:{
        type: DataTypes.STRING,
    },
    User_NumEmpleado:{
        type: DataTypes.STRING,
    },
    User_Email:{
        type: DataTypes.STRING,
    },
    User_Password:{
        type: DataTypes.STRING,
    },
    User_Status:{
        type: DataTypes.BOOLEAN,
    },
}, {
    tableName: 'Users',
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
});

export default User;