module.exports = (sequelize, dataTypes) => {
    let alias= "Usuarios";
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
        nombre:{
            allowNull: false,
            type: dataTypes.STRING,
        },
        apellido:{
            allowNull: false,
            type: dataTypes.STRING
        },
        fechaDeNacimiento:{
            allowNull:false,
            type: dataTypes.DATE, 
        },
        edad:{
            allowNull: false,
            type: dataTypes.INTEGER, 
        },
        email:{
            allowNull: false,
            type: dataTypes.STRING,
            unique: true,
        },
        password:{
            allowNull: false,
            type: dataTypes.STRING,
        },
        avatar:{
            type:dataTypes.STRING,
            allowNull: true
        }
};
let config={
    tableName:"usuarios",
    timeStamps: true,
 
};
const Usuario = sequelize.define(alias,cols,config);

Usuario.associate = function (models) {
    Usuario.hasMany(models.Productos, { // el mismo usuario puede tener varios productos
        as: "productos", 
        foreignKey: "usuario_id" 

    });
    Usuario.hasMany(models.Comentarios, { // el mismo usario puede tener varios comentarios
        as: "comentarios",
        foreignKey: "usuario_id" // esta es la foreignKey que relaciona la tabla de comentario con usuario

    });
    

}; return Usuario; }