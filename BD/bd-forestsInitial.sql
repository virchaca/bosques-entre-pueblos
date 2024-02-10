Create database forests;

USE forests; 


CREATE TABLE plants (
    idPlants INT AUTO_INCREMENT PRIMARY KEY NOT NULL UNIQUE,
    forest_type VARCHAR(100) NOT NULL,
    common_name VARCHAR(100) NOT NULL,
    latin_name VARCHAR(100),
    fam VARCHAR(100),
    descrip VARCHAR(2024),
    image VARCHAR(1000)
);

INSERT INTO plants (forest_type, common_name, latin_name, fam) 
VALUES 
('Castaño', 'Tilo', 'Tilia Platyphyllos', 'Malvaceae'), 
('Castaño', 'Pino Silvestre', 'Pinus Sylvestris', 'Pinaceae'), 
('Castaño', 'Abedul', 'betula Celtiberica', 'Betulaceae'), 
('Castaño', 'Alamo Temblon', 'Populus Tremula', 'Salicaceae'), 
('Castaño', 'Serbal De Los Cazadores', 'sorbus Aucuparia', 'Rosaceae'),
('Castaño', 'Avellano', 'coryllus Avellana', 'Betulaceae'),
('Castaño', 'Arándano', 'Vaccinium Mirtyllus', 'Ericaceae'),
('Castaño', 'Majuelo O Espino Albar', 'Crateagus Monogyna', 'Rosaceae');

INSERT INTO plants (forest_type, common_name, latin_name, fam) 
VALUES 
('Frondosas', 'Roble Melojo O Rebollo', 'Quercus Pirenayca', 'Fagaceae'), 
('Frondosas', 'Sauce Cenizo', 'Salix Atrocinerea', 'Salicaceae'), 
('Frondosas', 'Haya', 'Fagus Sylvatica', 'Fagaceae'), 
('Frondosas', 'Fresno', 'fraxinus Excelsior', 'Fraxinaceae'), 
('Frondosas', 'Retama Negra', 'Cytisus scoparius ', 'Fabaceae'), 
('Frondosas', 'Zarzamora', 'Rubus ulmifolius', 'Rosaceae'), 
('Frondosas', 'Rosa Silvestre', 'Rosa canina', 'Rosaceae'), 
('Frondosas', 'Correhuela', 'Convolvulus Arvensi', 'Convolvulaceae'), 
('Frondosas', 'Hiedra', 'Hereda Helix ', 'Araliaceae');

INSERT INTO plants (forest_type, common_name, latin_name, fam) 
VALUES 
('Rivera', 'Alisos', 'Alnus Glutinosa', 'Betulaceae'), 
('Rivera', 'Álamo Blanco', 'Populus Alba', 'Salicaceae'), 
('Rivera', 'Chopo', 'Populus Nigra', 'Salicaceae'), 
('Rivera', 'Olmos', 'Ulmus Minor', 'Ulmaceae'), 
('Rivera', 'Sauce Llorón ', 'Salix Babylonica', 'Salicaceae'), 
('Rivera', 'Arraclanes', 'Frangula Alnus', 'Rhamnaceae'), 
('Rivera', 'Brezo', 'Erica Arborea', 'Ericaceae'), 
('Rivera', 'Endrino', 'Prunus Spinosa', 'Rosaceae'), 
('Rivera', 'Saúcos', 'Sambucus Nigra', 'Adoxaceae');

INSERT INTO plants (forest_type, common_name, latin_name, fam) 
VALUES 
('Piorno', 'Retamas', 'Genista Florida', 'Fabaceae'), 
('Piorno', 'Enebro Rastrero', 'Juniperus Communis', 'Cupressaceae'), 
('Piorno', 'Escoba Blanca', 'Cytisus multiflorus', 'Fabaceae'), 
('Piorno', 'Viborera Salmantina ', 'Echium Salmanticum', 'Boragináceas'), 
('Piorno', 'La Ortegia', 'Ortegia Hispanica', 'Caryophyllaceae'), 
('Piorno', 'Cantueso', 'Lavandula Angustifolia', 'Lamiaceae'), 
('Piorno', 'Tomillo Perruno', 'Santolina Rosmarinifolia', 'Asteraceae'), 
('Piorno', 'Caléndula', 'Calendula Arvensis', 'Asteraceae'), 
('Piorno', 'Dedalera De Flores Rosadas', 'Digitalis Thapsi Plantagináceas', 'Plantaginaceae');

INSERT INTO plants (forest_type, common_name, latin_name, fam) 
VALUES 
('Dehesa', 'Encina', 'Quercus Ilex', 'Fagaceae'), 
('Dehesa', 'Quejigo', 'Quercus Faginea', 'Fagaceae'), 
('Dehesa', 'Alcornoque', 'Quercus Suber', 'Fagaceae'), 
('Dehesa', 'Plantago Menor', 'Plantago lanceolata', 'Plantaginaceae'), 
('Dehesa', 'Torvisco', 'Daphne Gnidium', 'Thymelaeaceae'), 
('Dehesa', 'Jara Pringosa ', 'Cistus Ladanifer ', 'Cistaceae'), 
('Dehesa', 'Malva', 'Malva Sylvestris', 'Malvaceae'), 
('Dehesa', 'Amapola', 'Papaver Rhoeas ', 'Papaveraceae'), 
('Dehesa', 'Achicoria Silvestre', 'Cichorium Intybus', 'Asteraceae');

 

SELECT * FROM plants