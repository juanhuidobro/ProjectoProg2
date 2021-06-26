module.exports = (sequelize, dataTypes) => {
        let alias= "Comentarios";
        let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        texto:{
            allowNull: false,
            type: dataTypes.STRING,
        },
        fecha:{
            allowNull:false,
            type: dataTypes.DATE, 
        },
    };
    let config={
        tableName:"comentarios",
        timeStamps: false,
    };
    const Comentario = sequelize.define(alias,cols,config);
    /*Comentario.associate = (models)=> {
        //relacion
        Comentario.belongsTo (models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })
        Comentario.belongsTo (models.Producto, {
            as: 'producto',
            foreignKey: 'producto_id'
        })
        }*/

    return Comentario;
}