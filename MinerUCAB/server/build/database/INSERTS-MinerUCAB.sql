---------------DATABASE INSERTS MINERUCAB-------------------------------
--------------ALTER SEQUENCE lugar_l_clave_seq RESTART WITH 1;-------------------------
-------------------Lugar-Estados-----------------------------------------------
INSERT INTO Lugar (l_nombre,l_tipo) VALUES 
('Distrito Capital','Estado'),
('Amazonas','Estado'),
('Anzoategui','Estado'),
('Apure','Estado'),
('Aragua','Estado'),
('Barinas','Estado'),
('Bolivar','Estado'),
('Carabobo','Estado'),
('Cojedes','Estado'),
('Delta Amacuro','Estado'),
('Falcon','Estado'),
('Guarico','Estado'),
('Lara','Estado'),
('Merida','Estado'),
('Miranda','Estado'),
('Monagas','Estado'),
('Nueva Esparta','Estado'),
('Portuguesa','Estado'),
('Sucre','Estado'),
('Tachira','Estado'),
('Trujillo','Estado'),
('Yaracuy','Estado'),
('Vargas','Estado'),
('Zulia','Estado');
-------------------Lugar-Municipios-----------------------------------------------
INSERT INTO Lugar (l_nombre,l_tipo,fk_l_clave) VALUES 
('Libertador','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Distrito Capital' AND l_tipo = 'Estado'
)),
('Altures','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Amazonas' AND l_tipo = 'Estado'
)),
('Alto Orinoco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Amazonas' AND l_tipo = 'Estado'
)),
('Atabapo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Amazonas' AND l_tipo = 'Estado'
)),
('Autana','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Amazonas' AND l_tipo = 'Estado'
)),
('Manapiare','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Amazonas' AND l_tipo = 'Estado'
)),
('Maroa','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Amazonas' AND l_tipo = 'Estado'
)),
('Rio Negro','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Amazonas' AND l_tipo = 'Estado'
)),
('Simon Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Anaco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Aragua','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Diego Bautista Urbaneja','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Fernando de Peñalver','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Francisco del Carmen Carvajal','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Francisco de Miranda','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Guanta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Independencia','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Jose Gregorio Monagas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Juan Antonio Sotillo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Juan Manuel Cajigal','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Libertad','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Manuel Ezequiel Bruzual','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Pedro Maria Freites','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Piritu','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('San Jose de Guanipa','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('San Juan de Capistrano','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Santa Ana','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Simon Rodriguez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('Sir Arthur Mc Gregor','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Anzoategui' AND l_tipo = 'Estado'
)),
('San Fernando','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Apure' AND l_tipo = 'Estado'
)),
('Achaguas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Apure' AND l_tipo = 'Estado'
)),
('Biruaca','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Apure' AND l_tipo = 'Estado'
)),
('Muñoz','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Apure' AND l_tipo = 'Estado'
)),
('Paez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Apure' AND l_tipo = 'Estado'
)),
('Pedro Camejo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Apure' AND l_tipo = 'Estado'
)),
('Romulo Gallegos','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Apure' AND l_tipo = 'Estado'
)),
('Girardot','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Camatagua','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Francisco Linares Alcantara','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Jose Angel Lamas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Jose Felix Ribas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Jose Rafael Revenga','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Libertador','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Mario Briceño Iragorry','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Ocumare','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('San Casimiro','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('San Sebastian','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Santiago Mariño','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Santos Michelena','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Tovar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Urdaneta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Zamora','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Aragua' AND l_tipo = 'Estado'
)),
('Barinas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Alberto Arvelo Torrealba','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Andres Eloy Blanco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Antonio Jose de Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Arismendi','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Cruz Paredes','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Ezequiel Zamora','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Obispos','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Pedraza','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Rojas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Sosa','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Barinas' AND l_tipo = 'Estado'
)),
('Heres','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('Angostura','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('Caroni','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('Cedeño','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('El Callao','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('Gran Sabana','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('Padre Pedro Chien','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('Piar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('Roscio','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('Sifontes','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Bolivar' AND l_tipo = 'Estado'
)),
('Valencia','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Bejuma','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Carlos Arvelo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Diego Ibarra','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Guacara','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Juan Jose Mora','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Libertador','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Los Guayos','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Miranda','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Montalban','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Naguanagua','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Puerto Cabello','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('San Diego','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('San Joaquin','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Carabobo' AND l_tipo = 'Estado'
)),
('Ezequiel Zamora','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Cojedes' AND l_tipo = 'Estado'
)),
('Anzoategui','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Cojedes' AND l_tipo = 'Estado'
)),
('Girardot','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Cojedes' AND l_tipo = 'Estado'
)),
('Lima Blanco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Cojedes' AND l_tipo = 'Estado'
)),
('Pao de San Juan Bautista','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Cojedes' AND l_tipo = 'Estado'
)),
('Ricaurte','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Cojedes' AND l_tipo = 'Estado'
)),
('Romulo Gallegos','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Cojedes' AND l_tipo = 'Estado'
)),
('Tinaco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Cojedes' AND l_tipo = 'Estado'
)),
('Tinaquillo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Cojedes' AND l_tipo = 'Estado'
)),
('Tucupita','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Delta Amacuro' AND l_tipo = 'Estado'
)),
('Antonio Diaz','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Delta Amacuro' AND l_tipo = 'Estado'
)),
('Casacoima','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Delta Amacuro' AND l_tipo = 'Estado'
)),
('Pedernales','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Delta Amacuro' AND l_tipo = 'Estado'
)),
('Miranda','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Acosta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Buchivacoa','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Cacique Manaure','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Carirubana','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Colina','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Dabajuro','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Democracia','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Falcon','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Federacion','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Jacura','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Los Taques','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Mauroa','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Monseñor Iturriza','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Palma Sola','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Petit','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Piritu','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('San Francisco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Silva','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Tocopero','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Union','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Urumaco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Zamora','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Falcon' AND l_tipo = 'Estado'
)),
('Juan German Roscio','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Camaguan','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Chaguaramas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('El Socorro','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Infante','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Las Mercedes','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Mellado','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Miranda','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Monagas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Ortiz','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Ribas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('San Geronimo de Guayabal','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('San Jose de Guaribe','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Santa Maria de Ipire','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Zaraza','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Guarico' AND l_tipo = 'Estado'
)),
('Iribarren','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Lara' AND l_tipo = 'Estado'
)),
('Andres Eloy Blanco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Lara' AND l_tipo = 'Estado'
)),
('Crespo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Lara' AND l_tipo = 'Estado'
)),
('Jimenez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Lara' AND l_tipo = 'Estado'
)),
('Moran','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Lara' AND l_tipo = 'Estado'
)),
('Palavecino','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Lara' AND l_tipo = 'Estado'
)),
('Simon Planas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Lara' AND l_tipo = 'Estado'
)),
('Torres','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Lara' AND l_tipo = 'Estado'
)),
('Urdaneta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Lara' AND l_tipo = 'Estado'
)),
('Libertador','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Alberto Adriani','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Andres Bello','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Antonio Pinto Salinas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Aricagua','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Arzobispo Chacon','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Campo Elias','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Caracciolo Parra Olmedo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Cardenal Quintero','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Guaraque','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Julio Cesar Salas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Justo Briceño','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Miranda','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Obispo Ramos de Lora','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Padre Noguera','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Pueblo Llano','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Rangel','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Rivas Davila','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Santos Marquina','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Tovar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Tulio Febres Cordero','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Zea','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Merida' AND l_tipo = 'Estado'
)),
('Guaicaipuro','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Acevedo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Andres Bello','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Baruta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Brion','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Buroz','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Carrizal','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Chacao','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Cristobal Rojas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('El Hatillo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Independencia','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Los Salias','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Paez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Paz Castillo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Pedro Gual','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Plaza','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Simon Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Tomas Lander','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Urdaneta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Zamora','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Miranda' AND l_tipo = 'Estado'
)),
('Maturin','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Acosta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Aguasay','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Caripe','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Cedeño','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Ezequiel Zamora','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Libertador','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Piar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Punceres','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Santa Barbara','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Sotillo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Uracoa','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Monagas' AND l_tipo = 'Estado'
)),
('Arismendi','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Antolin del Campo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Diaz','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Garcia','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Gomez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Maneiro','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Marcano','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Mariño','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Peninsula de Macanao','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Tubores','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Villalba','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Nueva Esparta' AND l_tipo = 'Estado'
)),
('Guanare','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Agua Blanca','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Araure','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Esteller','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Guanarito','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Monseñor Jose Vicente de Unda','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Ospino','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Paez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Papelon','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('San Genaro de Boconoito','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('San Rafael de Onoto','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Santa Rosalia','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Turen','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Portuguesa' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Andres Eloy Blanco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Andres Mata','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Arismendi','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Benitez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Bermudez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Cajigal','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Cruz Salmaron Acosta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Libertador','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Mariño','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Mejia','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Montes','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Ribero','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('Valdez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Sucre' AND l_tipo = 'Estado'
)),
('San Cristobal','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Andres Bello','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Antonio Romulo Costa','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Ayacucho','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Cardenas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Cordoba','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Fernandez Feo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Francisco de Miranda','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Garcia de Hevia','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Guasimos','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Independencia','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Jauregui','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Jose Maria Vargas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Junin','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Libertad','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Libertador','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Lobatera','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Michelena','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Panamericano','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Pedro Maria de Ureña','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Rafael Urdaneta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Samuel Dario Maldonado','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('San Judas Tadeo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Seboruco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Simon Rodriguez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Torbes','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Uribante','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Tachira' AND l_tipo = 'Estado'
)),
('Trujillo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Andres Bello','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Bocono','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Candelaria','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Carache','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Escuque','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('J. Felipe Marquez Cañizales','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Juan Vicente Campo Elias','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('La Ceiba','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Miranda','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Monte Carmelo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Motatan','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Pampan','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Pampanito','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Rafael Rangel','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('San Rafael de Carvajal','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Urdaneta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Valera','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Trujillo' AND l_tipo = 'Estado'
)),
('Vargas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Vargas' AND l_tipo = 'Estado'
)),
('San Felipe','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Aristides Bastidas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Bruzual','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Cocorote','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Independencia','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Jose Antonio Paez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('La Trinidad','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Manuel Monge','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Nirgua','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Peña','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Urachiche','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Veroes','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Yaracuy' AND l_tipo = 'Estado'
)),
('Maracaibo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Almirante Padilla','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Baralt','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Cabimas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Catatumbo','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Colon','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Francisco Javier Pulgar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Guajira','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Jesus Maria Semprun','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('La Cañada de Urdaneta','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Lagunillas','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Lossada','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Machiques de Perija','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Mara','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Miranda','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Rosario de Perija','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('San Francisco','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Santa Rita','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Simon Bolivar','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Sucre','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),
('Valmore Rodriguez','Municipio',(
	SELECT l_clave FROM Lugar
	WHERE l_nombre = 'Zulia' AND l_tipo = 'Estado'
)),