DROP SCHEMA Proyecto_Parcial;
CREATE SCHEMA Proyecto_Parcial;

USE Proyecto_Parcial;

CREATE TABLE usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    nombre VARCHAR(50) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
    fechaDeNacimiento VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL
);
CREATE TABLE productos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
	imagen VARCHAR(300) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    precio VARCHAR(250) NOT NULL,
	email VARCHAR(100) NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE comentarios (
	id INT KEY AUTO_INCREMENT,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    texto varchar (100) not null,
	fecha varchar (50) not null,
    usuario_id INT NOT NULL,
    producto_id INT NOT NULL,
	FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
	FOREIGN KEY (producto_id) REFERENCES productos (id)
);



INSERT INTO usuarios VALUES (default, null, null, 'Nicolas', 'Bellomo', 14/03/2000, 20,'Nicolasbellomo@gmail.com', 'Contraseña');
INSERT INTO usuarios VALUES (default, null, null, 'Juan', 'Perez', 23/06/1999,35 , 'Juanperez@gmail.com', 'Contraseña');
INSERT INTO usuarios VALUES (default, null, null, 'Juana', 'Martinez', 17/09/1998, 40,'Juanamartinez@gmail.com', 'Contraseña');
INSERT INTO usuarios VALUES (default, null, null,'Andrea', 'Bocelli', 30/10/2001, 19,'Andreabocelli@gmail.com', 'Contraseña');
INSERT INTO usuarios VALUES (default, null, null, 'Fran', 'Gomez', 01/02/1999, 34,'Frangomez@gmail.com', 'Contraseña');

INSERT INTO productos VALUES (default, null, null,'Koenigsegg','Agera','images/products/autos1.jpeg','El Koenigsegg Agera es un superdeportivo biplaza sueco capaz de alcanzar en su versión más potente 1.155 caballos. Entre sus hitos más representativos podemos citar su capacidad para alcanzar los 300 km/h desde parado y volverse a detener por completo en sólo 21.19 segundos.', '$3.000.000', 'Nicolasbellomo@gmail.com', '1');
INSERT INTO productos VALUES (default, null, null,'Ferrari',' 488 Pista','images/products/autos2.jpeg','El Ferrari 488 Pista es la versión más radical del Ferrari 488 GTB. Es el sucesor del 458 Speciale, considerado por algunos como el Ferrari más divertido jamás construido. Su motor, el V8 twin-turbo, entrega 720 CV de potencia a 8.000 rpm y un par máximo de 770 Nm a 3.000 rpm.', '$2.000.000', 'Juanperez@gmail.com', '2');
INSERT INTO productos VALUES (default, null, null, 'Ferrari', 'Roma', 'images/products/autos3.jpeg', 'El Ferrari Roma es un deportivo de motor V8 Biturbo delantero, fabricado por Ferrari y que rinde 620 CV. Se trata de un modelo desarrollado como coupé, que no contará con carrocería descapotable ya que su alternativa para tal fin será el Ferrari Portofino.', '$4.000.000', 'Juanamartinez@gmail.com', '3');
INSERT INTO productos VALUES (default, null, null, 'Ferrari', 'California','images/products/autos4.jpeg', 'Tiene un peso en vacío de 1630 kg (3594 lb)​ y es capaz de acelerar de 0 a 100 km/h (62 mph) en menos de 4 segundos, mientras que su velocidad máxima es de 310 km/h (193 mph). ​ Representaría una nueva cuarta gama de modelos para la empresa.','$1.000.000', 'Andreabocelli@gmail.com', '4');
INSERT INTO productos VALUES (default, null, null, 'Bugatti', 'Chiron','images/products/autos5.jpeg', 'Es un hiperdeportivo de Bugatti, que reemplazó al Bugatti Veyron en 2016. El Bugatti Chiron se caracteriza por ser el vehículo más rápido del mundo, siendo capaz de sobrepasar los 490 kilómetros por hora.','$3.000.000', 'Frangomez@gmail.com', '5');
INSERT INTO productos VALUES (default, null, null,'Bugatti','Modelo','images/products/autos6.jpeg' ,'Bugatti la Voiture NoireEste Flamante. Modelo top de la firma francesa muestra líneas inspiradas en las del Bugatti Type 57 SC Atlantic, una nave del que sólo se crearon cuatro unidades entre 1936 y 1938, todas con un alto grado de personalización a solicitud del comprador.','$3.000.000', 'Frangomez@gmail.com', '5');
INSERT INTO productos VALUES (default, null, null,'Masseratti', 'La berlina','images/products/autos7.jpeg', 'Es la berlina de lujo italiana por excelencia y cuenta con seis generaciones a sus espaldas, con la última lanzada al mercado en 2013. Con 5,26 metros de largo, 1,95 de ancho y 1,48 de alto el Quattroporte es de mayor tamaño que modelos como el Audi A8 (5,17 metros) o el BMW Serie 7 (5,12 metros).','$2.000.000', 'Frangomez@gmail.com', '5');
INSERT INTO productos VALUES (default, null, null,'Masseratti', 'Ghibli','images/products/autos8.jpeg', 'El Ghibli es un modelo de Maserati, con carrocería berlina y cuatro puertas que mide 4,97 metros de longitud, 1,95 de anchura y 1,46 de altura y su batalla es de 2,99 metros. El Ghibli tiene el honor de ser el primer Maserati en montar un motor diésel','$4.500.000', 'Frangomez@gmail.com', '5');
INSERT INTO productos VALUES (default, null, null,'El Maserati', 'MC20','images/products/autos9.jpeg', 'ofrece conectividad a través del programa Maserati Connect. Incluye navegación conectada, Alexa integrada y punto de conexión wifi. El motor que incorpora el Maserati MC20 es un V6 biturbo de 3.0 litros capaz de desarrollar una potencia de 630 caballos y un par máximo de 730 Newton metro','$2.400.000', 'Frangomez@gmail.com', '5');
INSERT INTO productos VALUES (default, null, null,'Bugatti', 'Veyron','images/products/autos10.jpeg', 'Las prestaciones del Bugatti Veyron hablan por sí solas con una aceleración de 0 a 100 Km/h en 2,5 segundos y una velocidad máxima de 408 Km/h en los Veyron con motor de 1.001 CV y 431.072 km/h en la versión Super Sport de 1.200 CV que fue empleada para batir el récord de velocidad máxima.','$10.000.000', 'Frangomez@gmail.com', '5');

INSERT INTO comentarios VALUES (default, null, null,'El auto es de alta gama y el color es hermoso, super recomensable', 14/03/2021,1,1);
INSERT INTO comentarios VALUES (default, null, null,'¿Tendran otro color?', 15/03/2020,2,2);
INSERT INTO comentarios VALUES (default, null, null,'Me llego muy rapido, gracias', 10/03/2019,3,3);
INSERT INTO comentarios VALUES (default, null, null,'Muy conforme con mi compra, recomendable!', 03/03/2010,4,4);