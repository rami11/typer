-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: typer
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `languages` (
  `code` varchar(2) NOT NULL,
  `name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES ('en','English'),('fr','French');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `texts`
--

DROP TABLE IF EXISTS `texts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `texts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote` varchar(255) DEFAULT NULL,
  `source` varchar(25) DEFAULT NULL,
  `language_code` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `language_code` (`language_code`),
  CONSTRAINT `texts_ibfk_1` FOREIGN KEY (`language_code`) REFERENCES `languages` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `texts`
--

LOCK TABLES `texts` WRITE;
/*!40000 ALTER TABLE `texts` DISABLE KEYS */;
INSERT INTO `texts` VALUES (1,'The unexamined life is not worth living','Socrates','en'),(3,'Whereof one cannot speak, thereof one must be silent','Ludwig Wittgenstein','en'),(4,'Entities should not be multiplied unnecessarily','William of Ockham','en'),(5,'He who thinks great thoughts, often makes great errors','Martin Heidegger','en'),(6,'We live in the best of all possible worlds','Gottfried Wilhelm Leibniz','en'),(7,'What is rational is actual and what is actual is rational','G. W. F. Hegel','en'),(8,'God is dead! He remains dead! And we have killed him.','Friedrich Nietzsche','en'),(9,'There is but one truly serious philosophical problem, and that is suicide','Albert Camus','en'),(10,'Dans la vie on ne fait pas ce que l\'on veut mais on est responsable de ce que l\'on est.','Jean-Paul Sartre','fr'),(11,'On passe une moitié de sa vie à attendre ceux qu\'on aimera et l\'autre moitié à quitter ceux qu\'on aime.','Victor Hugo','fr'),(12,'Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.','Coluche','fr'),(13,'Un seul être vous manque et tout est dépeuplé.','Lamartine','fr'),(14,'Aimer, ce n\'est pas se regarder l\'un l\'autre, c\'est regarder ensemble dans la même direction.','Antoine De Saint-Exupéry','fr'),(15,'Il ne faut avoir aucun regret pour le passé, aucun remords pour le présent, et une confiance inébranlable pour l\'avenir.','Jean Jaurès','fr');
/*!40000 ALTER TABLE `texts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-26 20:35:24
