export default (sequelize, DataTypes) => {
    const UserScore = sequelize.define('scores_of_user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: DataTypes.INTEGER,
        dim_id: DataTypes.INTEGER,
        score: DataTypes.FLOAT
    }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
        });

        UserScore.associate = (models) => {
            UserScore.belongsTo(models.scores_of_team);
        };
    
    return UserScore;
};
