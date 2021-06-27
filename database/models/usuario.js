module.exports = (sequelize, dataTypes) => {
    let alias= "Usuarios";
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
    timeStamps: false,
    createdAt: false,
    updatedAt: false,
};
const Usuario = sequelize.define(alias,cols,config);

Usuario.associate = function (models) {
    Usuario.hasMany(models.Productos, {
        as: "productos",
        foreignKey: "usuario_id"

    });
    Usuario.hasMany(models.Comentarios, {
        as: "comentarios",
        foreignKey: "usuario_id"

    });
    

}; return Usuario; }