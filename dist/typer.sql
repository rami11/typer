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
-- Table structure for table `texts_en`
--

DROP TABLE IF EXISTS `texts_en`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `texts_en` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(75) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `texts_en`
--

LOCK TABLES `texts_en` WRITE;
/*!40000 ALTER TABLE `texts_en` DISABLE KEYS */;
INSERT INTO `texts_en` VALUES (4,'It’s not about ideas. It’s about making ideas happen.'),(5,'Always deliver more than expected'),(6,'The most courageous act is still to think for yourself. Aloud'),(7,'What would you do if you were not afraid?'),(8,'Nothing will work unless you do.'),(9,'Surround yourself with only people who are going to lift you higher.'),(10,'Sweating the details is more important than anything else.'),(11,'Your time is limited, so don’t waste it living someone else’s life.');
/*!40000 ALTER TABLE `texts_en` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `texts_fr`
--

DROP TABLE IF EXISTS `texts_fr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `texts_fr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(75) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `texts_fr`
--

LOCK TABLES `texts_fr` WRITE;
/*!40000 ALTER TABLE `texts_fr` DISABLE KEYS */;
INSERT INTO `texts_fr` VALUES (2,'Dans une grande âme tout est grand.'),(3,'Chacun voit midi à sa porte.'),(4,'Je pense, donc je suis.'),(5,'On ne change pas une équipe qui gagne.'),(6,'Prouver que j’ai raison serait accorder que je puis avoir tort.'),(7,'On n’est point toujours une bête pour l’avoir été quelquefois.'),(8,'Il n’y a pas de verités moyennes.'),(9,'Chassez le naturel, il revient au galop.'),(10,'Il vaut mieux prévenir que guérir.'),(11,'Le temps est un grand maître, dit-on. Le malheur est qui’il tue ses élèves.'),(12,'Être adulte, c’est être seul.'),(13,'Un homme seul est toujours en mauvaise compagnie.'),(14,'A vaincre sans peril, on triomphe sans gloire.'),(15,'L’enfer, c’est les autres.'),(16,'Autres temps, autres mœurs.'),(17,'La vérité vaut bien qu’on passe quelques années sans la trouver.');
/*!40000 ALTER TABLE `texts_fr` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-04 19:48:27
