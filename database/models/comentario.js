module.exports = (sequelize, dataTypes) => {
        let alias= "Comentarios";
        let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        texto:{
            allowNull: false,
            type: dataTypes.STRING,
        },
        fecha:{
            allowNull:false,
            type: dataTypes.DATE, //Chekear no se si esta bien
        },
    };
    let config={
        tableName:"comentarios",
        timeStamps: false,
    };
    const Comentario = sequelize.define(alias,cols,config);
    return Comentario;
}