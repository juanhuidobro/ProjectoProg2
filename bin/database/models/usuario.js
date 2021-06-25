module.exports = (sequelize, dataTypes) => {
    let alias= "Usuarios";
    let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
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
            type: dataTypes.DATE, //Chekear no se si esta bien
        },
        edad:{
            allowNull: false,
            type: dataTypes.INTEGER, //Chekear no se si esta bien
        },
        email:{
            allowNull: false,
            type: dataTypes.STRING,//Chekear no se si esta bien
        },
        password:{
            allowNull: false,
            type: dataTypes.STRING, //Chekear no se si esta bien
        }
};
let config={
    tableName:"usuarios",
    timeStamps: false,
    createdAt: false,
    updatedAt: false,
};
const Usuario = sequelize.define(alias,cols,config);
return Usuario;
}