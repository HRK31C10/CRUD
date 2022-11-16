import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/mysql';

export interface UsuarioInstance extends Model{
    id: number
    name: string
    email: string
}

export const Usuario = sequelize.define<UsuarioInstance>("Usuario,",{
    id:{
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    }
},{
    tableName:'usuarios',
    timestamps:false
})
