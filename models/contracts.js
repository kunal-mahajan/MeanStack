export default (sequelize, DataTypes) => {
    const Contract = sequelize.define('contracts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: DataTypes.INTEGER,
        team_id: DataTypes.INTEGER,
    }, {
            timestamps: false,
            freezeTableName: true,
        });

    return Contract;
};
