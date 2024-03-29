import connection from "../config/orm.js";
import Sequelize from "sequelize";
import Team from "./team.js";

const Player = connection.define('player', {
    idplayer: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    age : {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: true
    },
    idteam: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unsigned: true,
        references: {
            model: 'team',
            key: 'idteam'
        }
    }
},
{
    freezeTableName: true,
    timestamps: false
});

Player.belongsTo(Team,{
    foreignKey: 'idteam',
});
Team.hasMany(Player, {
    foreignKey: 'idteam',
});

export default Player;