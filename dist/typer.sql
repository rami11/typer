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
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `language` (
  `code` varchar(2) NOT NULL,
  `name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
INSERT INTO `language` VALUES ('en','English'),('fr','French');
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `text`
--

DROP TABLE IF EXISTS `text`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `text` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote` varchar(255) DEFAULT NULL,
  `source` varchar(25) DEFAULT NULL,
  `language_code` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `language_code` (`language_code`),
  CONSTRAINT `text_ibfk_1` FOREIGN KEY (`language_code`) REFERENCES `language` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `text`
--

LOCK TABLES `text` WRITE;
/*!40000 ALTER TABLE `text` DISABLE KEYS */;
INSERT INTO `text` VALUES (1,'The unexamined life is not worth living','Socrates','en'),(3,'Whereof one cannot speak, thereof one must be silent','Ludwig Wittgenstein','en'),(4,'Entities should not be multiplied unnecessarily','William of Ockham','en'),(5,'He who thinks great thoughts, often makes great errors','Martin Heidegger','en'),(6,'We live in the best of all possible worlds','Gottfried Wilhelm Leibniz','en'),(7,'What is rational is actual and what is actual is rational','G. W. F. Hegel','en'),(8,'God is dead! He remains dead! And we have killed him.','Friedrich Nietzsche','en'),(9,'There is but one truly serious philosophical problem, and that is suicide','Albert Camus','en'),(10,'Dans la vie on ne fait pas ce que l\'on veut mais on est responsable de ce que l\'on est.','Jean-Paul Sartre','fr'),(11,'On passe une moitié de sa vie à attendre ceux qu\'on aimera et l\'autre moitié à quitter ceux qu\'on aime.','Victor Hugo','fr'),(12,'Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.','Coluche','fr'),(13,'Un seul être vous manque et tout est dépeuplé.','Lamartine','fr'),(14,'Aimer, ce n\'est pas se regarder l\'un l\'autre, c\'est regarder ensemble dans la même direction.','Antoine De Saint-Exupéry','fr'),(15,'Il ne faut avoir aucun regret pour le passé, aucun remords pour le présent, et une confiance inébranlable pour l\'avenir.','Jean Jaurès','fr'),(16,'The happiness of your life depends on the quality of your thoughts.','Marcus Aurelius','en'),(17,'To live a good life: We have the potential for it. If we learn to be indifferent to what makes no difference.','Marcus Aurelius','en'),(19,'Death smiles at us all, but all a man can do is smile back.','Marcus Aurelius','en'),(20,'The best revenge is not to be like your enemy.','Marcus Aurelius','en'),(21,'The impediment to action advances action. What stands in the way becomes the way.','Marcus Aurelius','en'),(22,'You have power over your mind - not outside events. Realize this, and you will find strength.','Marcus Aurelius','en'),(23,'It is not death that a man should fear, but he should fear never beginning to live.','Marcus Aurelius','en'),(24,'Very little is needed to make a happy life; it is all within yourself in your way of thinking.','Marcus Aurelius','en'),(25,'Loss in nothing else but change, and change is nature\'s delight.','Marcus Aurelius','en'),(26,'A man\'s true delight is to do the things he was made for.','Marcus Aurelius','en');
/*!40000 ALTER TABLE `text` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-11 18:48:00
