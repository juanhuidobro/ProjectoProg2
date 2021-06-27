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
        usuario_id:{
            allowNull: false,
            type: dataTypes.INTEGER,
        },
        producto_id:{
            allowNull: false,
            type: dataTypes.INTEGER,
        } 
    };
    let config={
        tableName:"comentarios",
        timeStamps: false,
        createdAt: false,
        updatedAt: false,
    };
    const Comentario = sequelize.define(alias,cols,config);
    Comentario.associate = (models)=> {
        //relacion
        Comentario.belongsTo (models.Usuarios, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })
        Comentario.belongsTo (models.Productos, {
            as: 'producto',
            foreignKey: 'producto_id'
        })
        }
        
    return Comentario;
}