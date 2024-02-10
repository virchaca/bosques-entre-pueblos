-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: forests
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `plants`
--

DROP TABLE IF EXISTS `plants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plants` (
  `idPlants` int NOT NULL AUTO_INCREMENT,
  `forest_type` varchar(100) NOT NULL,
  `common_name` varchar(100) NOT NULL,
  `latin_name` varchar(100) DEFAULT NULL,
  `fam` varchar(100) DEFAULT NULL,
  `descrip` varchar(2024) DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`idPlants`),
  UNIQUE KEY `idPlants` (`idPlants`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plants`
--

LOCK TABLES `plants` WRITE;
/*!40000 ALTER TABLE `plants` DISABLE KEYS */;
INSERT INTO `plants` VALUES (1,'Castaño','Castaño','Castannea Sativa','Fagaceae',NULL,NULL),(2,'Castaño','Tilo','Tilia Platyphyllos','Malvaceae',NULL,NULL),(3,'Castaño','Pino Silvestre','Pinus Sylvestris','Pinaceae',NULL,NULL),(4,'Castaño','Abedul','betula Celtiberica','Betulaceae',NULL,NULL),(5,'Castaño','Alamo Temblon','Populus Tremula','Salicaceae',NULL,NULL),(6,'Castaño','Serbal De Los Cazadores','sorbus Aucuparia','Rosaceae',NULL,NULL),(7,'Castaño','Avellano','coryllus Avellana','Betulaceae',NULL,NULL),(8,'Castaño','Arándano','Vaccinium Mirtyllus','Ericaceae',NULL,NULL),(9,'Castaño','Majuelo O Espino Albar','Crateagus Monogyna','Rosaceae',NULL,NULL),(10,'Frondosas','Roble Melojo O Rebollo','Quercus Pirenayca','Fagaceae',NULL,NULL),(11,'Frondosas','Sauce Cenizo','Salix Atrocinerea','Salicaceae',NULL,NULL),(12,'Frondosas','Haya','Fagus Sylvatica','Fagaceae',NULL,NULL),(13,'Frondosas','Fresno','fraxinus Excelsior','Fraxinaceae',NULL,NULL),(14,'Frondosas','Retama Negra','Cytisus scoparius ','Fabaceae',NULL,NULL),(15,'Frondosas','Zarzamora','Rubus ulmifolius','Rosaceae',NULL,NULL),(16,'Frondosas','Rosa Silvestre','Rosa canina','Rosaceae',NULL,NULL),(17,'Frondosas','Correhuela','Convolvulus Arvensi','Convolvulaceae',NULL,NULL),(18,'Frondosas','Hiedra','Hereda Helix ','Araliaceae',NULL,NULL),(19,'Rivera','Alisos','Alnus Glutinosa','Betulaceae',NULL,NULL),(20,'Rivera','Álamo Blanco','Populus Alba','Salicaceae',NULL,NULL),(21,'Rivera','Chopo','Populus Nigra','Salicaceae',NULL,NULL),(22,'Rivera','Olmos','Ulmus Minor','Ulmaceae',NULL,NULL),(23,'Rivera','Sauce Llorón ','Salix Babylonica','Salicaceae',NULL,NULL),(24,'Rivera','Arraclanes','Frangula Alnus','Rhamnaceae',NULL,NULL),(25,'Rivera','Brezo','Erica Arborea','Ericaceae',NULL,NULL),(26,'Rivera','Endrino','Prunus Spinosa','Rosaceae',NULL,NULL),(27,'Rivera','Saúcos','Sambucus Nigra','Adoxaceae',NULL,NULL),(28,'Piorno','Retamas','Genista Florida','Fabaceae',NULL,NULL),(29,'Piorno','Enebro Rastrero','Juniperus Communis','Cupressaceae',NULL,NULL),(30,'Piorno','Escoba Blanca','Cytisus multiflorus','Fabaceae',NULL,NULL),(31,'Piorno','Viborera Salmantina ','Echium Salmanticum','Boragináceas',NULL,NULL),(32,'Piorno','La Ortegia','Ortegia Hispanica','Caryophyllaceae',NULL,NULL),(33,'Piorno','Cantueso','Lavandula Angustifolia','Lamiaceae',NULL,NULL),(34,'Piorno','Tomillo Perruno','Santolina Rosmarinifolia','Asteraceae',NULL,NULL),(35,'Piorno','Caléndula','Calendula Arvensis','Asteraceae',NULL,NULL),(36,'Piorno','Dedalera De Flores Rosadas','Digitalis Thapsi Plantagináceas','Plantaginaceae',NULL,NULL),(37,'Dehesa','Encina','Quercus Ilex','Fagaceae',NULL,NULL),(38,'Dehesa','Quejigo','Quercus Faginea','Fagaceae',NULL,NULL),(39,'Dehesa','Alcornoque','Quercus Suber','Fagaceae',NULL,NULL),(40,'Dehesa','Plantago Menor','Plantago lanceolata','Plantaginaceae',NULL,NULL),(41,'Dehesa','Torvisco','Daphne Gnidium','Thymelaeaceae',NULL,NULL),(42,'Dehesa','Jara Pringosa ','Cistus Ladanifer ','Cistaceae',NULL,NULL),(43,'Dehesa','Malva','Malva Sylvestris','Malvaceae',NULL,NULL),(44,'Dehesa','Amapola','Papaver Rhoeas ','Papaveraceae',NULL,NULL),(45,'Dehesa','Achicoria Silvestre','Cichorium Intybus','Asteraceae',NULL,NULL);
/*!40000 ALTER TABLE `plants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-07 19:28:22
