export default (sequelize, DataTypes) => {
    const Team = sequelize.define('teams', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    },
        {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
        });

    Team.associate = (models) => {
        Team.hasMany(models.scores_of_team, {as: 'TeamScore'});
    };

    return Team;
};
