const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const TasksLists = sequelize.define("TasksLists", {
        taskText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return TasksLists;
}