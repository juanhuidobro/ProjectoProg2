module.exports = (sequelize, dataTypes) => {
    let alias= "Productos";
    let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
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
            type: dataTypes.STRING,
            unique: true, 
        },
        usuario_id:{
            allowNull: false,
            type: dataTypes.INTEGER,
        },
        
};
let config={
    tableName:"productos",
    timeStamps: true,
 
};
const Producto = sequelize.define(alias,cols,config);
 Producto.associate = (models)=> {
    //relacion
    Producto.belongsTo (models.Usuarios, {
        as: 'usuario',
        foreignKey: 'usuario_id'
    })
    }
    
return Producto;
}