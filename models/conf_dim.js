export default (sequelize, DataTypes) => {
    const Dimension = sequelize.define('conf_dim', {
        dim_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        code: DataTypes.STRING,
        dim_group: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dim_parent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });


    Dimension.associate = (models) => {
        Dimension.belongsTo(models.scores_of_team);
    };

    return Dimension;
};
