module.exports = (sequelize, dataTypes) => {
    let alias= "Productos";
    let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        marca:{
            allowNull: false,
            type: dataTypes.STRING,
        },
        modelo:{
            allowNull: false,
            type: dataTypes.STRING,
        },
        imagen:{
            allowNull: false,
            type: dataTypes.STRING,
        },
        descripcion:{
            allowNull: false,
            type: dataTypes.STRING,
        },
        precio:{
            allowNull: false,
            type: dataTypes.STRING,
        },
        email:{
            allowNull: false,
            type: dataTypes.STRING,//Chekear no se si esta bien
        },
        usuario_id:{
            allowNull: false,
            type: dataTypes.INTEGER,//Chekear no se si esta bien
        },
        
};
let config={
    tableName:"productos",
    timeStamps: false,
    createdAt: false,
    updatedAt: false,
};
const Producto = sequelize.define(alias,cols,config);
return Producto;
}