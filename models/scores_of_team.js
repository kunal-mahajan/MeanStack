export default (sequelize, DataTypes) => {
    const TeamScore = sequelize.define('scores_of_team', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        team_id: DataTypes.INTEGER,
        dim_id: DataTypes.INTEGER,
        score: DataTypes.FLOAT
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    });

    TeamScore.associate = (models) => {
        TeamScore.belongsTo(models.teams);
    };

    TeamScore.associate = (models) => {
        TeamScore.hasOne(models.conf_dim, {
            as: 'Dimensions',
            foreignKey: 'dim_id'
        });
    };

    return TeamScore;
};
