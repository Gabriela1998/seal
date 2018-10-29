-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 14, 2018 at 07:46 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `artifacty`
--

-- --------------------------------------------------------

--
-- Table structure for table `artifacts`
--

DROP TABLE IF EXISTS `artifacts`;
CREATE TABLE IF NOT EXISTS `artifacts` (
  `artifact_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `artifact_name` varchar(100) NOT NULL,
  `artifact_year` varchar(15) NOT NULL,
  `artifact_owner` varchar(256) NOT NULL,
  `artifact_description` text NOT NULL,
  `artifact_image` varchar(100) NOT NULL,
  `artifact_status` int(1) NOT NULL,
  `artifact_region` varchar(255) NOT NULL,
  PRIMARY KEY (`artifact_id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artifacts`
--

INSERT INTO `artifacts` (`artifact_id`, `user_id`, `artifact_name`, `artifact_year`, `artifact_owner`, `artifact_description`, `artifact_image`, `artifact_status`, `artifact_region`) VALUES
(1, 2, 'Tutankhamun\'s mask', '1925', 'The Egyptian Museum in Cairo', 'The mask is 54 cm (21 in) tall, 39.3 cm (15.5 in) wide and 49 cm (19 in) deep. It is fashioned from two layers of high-karat gold, varying from 1.5-3 mm (0.059-0.118 in) in thickness, and weighing 10.23 kg (22.6 lb). X-ray crystallography has revealed that the mask contains two alloys of gold: a lighter 18.4 karat shade for the face and neck, and 22.5 karat gold for the rest of the mask.\r\n\r\nThe face represents the pharaoh\'s standard image, and the same image was found by excavators elsewhere in the tomb, in particular in the guardian statues. He wears a nemes headcloth, topped by the royal insignia of a cobra (Wadjet) and vulture (Nekhbet), symbolising Tutankhamun\'s rule of both Lower Egypt and Upper Egypt respectively. The ears are pierced to hold earrings, a feature that appears to have been reserved for queens and children in almost all surviving ancient Egyptian works of art.\r\n\r\nIt contains inlays of coloured glass and gemstones, including lapis lazuli (the eye surrounds and eyebrows), quartz (the eyes), obsidian (the pupils), carnelian, feldspar, turquoise, amazonite, faience and other stones (as inlays of the broad collar)\r\nWhen it was discovered in 1925, the 2.5 kg (5.5 lb) narrow gold beard, inlaid with blue lapis lazuli,giving it a plaited effect, had become separated from the mask, but it was reattached to the chin using a wooden dowel in 1944.\r\n\r\nExternal video\r\n News report on the 2015 restoration work (in English)\r\nIn August 2014, the beard fell off when the mask was taken out of its display case for cleaning. The museum workers responsible used quick-drying epoxy in an attempt to fix it, leaving the beard off-center. The damage was noticed in January 2015, and has been repaired by a German-Egyptian team who reattached it using beeswax, a natural material used by the ancient Egyptians.\r\n\r\nIn January 2016, it was announced that eight employees of the Egyptian Museum were to stand trial for allegedly ignoring scientific and professional methods of restoration and causing permanent damage to the mask. A former director of the museum and a former director of restoration were among those facing prosecution. As of January 2016, the date of the trial remains unknown.', '\"assets/img/artefact1.jpg\"', 1, 'The tomb of the young pharaoh Tutankhamun in the Valley of the Kings'),
(2, 3, 'Thor\'s Hammer ', '900', 'Museum of Denmark', 'The discovery of a 10th century Viking artifact resembling the Hammer of Thor has solved a long-running mystery surrounding more than 1,000 ancient amulets found across Northern Europe. The relics, known as the Mjollnir amulets, appear to depict hammers, which historians have linked to the Norse god Thor. However, this could not be concluded with certainty as their shapes were not conclusive, and none of them contained inscriptions revealing their identity.  But earlier this year, another similar pendant was found in Kobelev, on the Danish island of Lolland, which contained the runic inscription \"this is a hammer\".  Cast in bronze, and likely plated with silver, tin and gold, the 1,100-year-old pendant shows that Thor\'s myth deeply influenced Viking jewellery.  \r\nAccording to Norse mythology, Thor is a hammer-wielding god associated with thunder, lightning, storms, oak trees, strength, the protection of mankind, and also hallowing, healing and fertility. Thor is a prominently mentioned god throughout the recorded history of the Germanic peoples, from the Roman occupation of regions of Germania, to the tribal expansions of the Migration Period, to his high popularity during the Viking Age, when, in the face of the process of the Christianization of Scandinavia, the Mjolnir amulets were worn in defiance and Norse pagan personal names containing the name of the god bear witness to his popularity.', '\"assets/img/thors-hammer.jpg\"', 1, 'Denmark'),
(3, 2, 'The Quipu of Caral ', '3000 BC', '-', 'The Sacred City of Caral is a 5,000-year-old metropolis which represents the oldest known civilization in the Americas, known as the Norte Chico. Among the many incredible artifacts recovered at the site, archaeologists found a segment of knotted strings known as a quipu.  Quipus, sometimes called \'talking knots, were recording devices that consisted of coloured, spun, and plied thread or strings from llama or alpaca hair, or made of cotton cords. It is known that by the time of the Inca, the system aided in collecting data and keeping records, ranging from monitoring tax obligations, properly collecting census records, calendrical information, and military organization. The cords contained numeric and other values encoded by knots in a base ten positional system. Together, the type of wool, the colours, the knots and the joins held both statistical and narrative information that was once readable by several South American societies. In some villages, quipus were important items for the local community, and took on ritual rather than recording use.  Until the discovery of the quipu in Caral, no other examples had been found that dated back earlier than 650 AD. So the significance of this finding was that it was now apparent that inhabitants of Andean South America were using this complex recording system thousands of years earlier than they initially thought.', '\"assets\\img\\The-Quipu-of-Caral.jpg\"', 0, 'Peru'),
(73, 0, 'The Nebra Sky Disc', '1600 BC', 'The State Museum of Prehistory in Halle', 'The Nebra Sky Disc was discovered in Ziegelroda Forest, Saxony-Anhalt, Germany.  It had been ritually buried in a prehistoric enclosure atop a hill (the Mittelberg), along with two precious swords, two axes, two spiral arm-rings and one bronze chisel. The disc measures approximately 30 cm in diameter, weighs 2.2 kg, and is decorated with a blue-green patina and inlaid with gold symbols. These are interpreted generally as a sun or full moon, a lunar crescent, and stars (including a cluster interpreted as the Pleiades). Two golden arcs along the sides were added later. The two arcs span an angle of 82, correctly indicating the angle between the positions of sunset at summer and winter solstice at the latitude of the Mittelberg (51).', '\"assets/img/nebra-sky-disc.jpg\"', 1, 'Germany'),
(74, 0, 'Gold-encrusted dagge\'r', '2000 BC', 'Director of the Wiltshire Museum', 'In 1808, William Cunnington, one of Britain\'s earliest professional archaeologists, discovered what has become known as the crown jewels of the King of Stonehenge. They were found within a large Bronze Age burial mound just mile from Stonehenge, known today as Bush Barrow. Within the year-old barrow, Cunnington found ornate jewellery, a gold lozenge that fastened his cloak, and an intricately decorated dagger. The dagger was originally adorned with up to 140,000 tiny gold studs just a third of a millimetre wide.', '\"assets/img/bush-barrow-dagger.jpg\"', 1, 'England'),
(75, 4, 'The Trundholm Sun Chariot', '1700 BC', 'University of Copenhagen', 'The Trundholm Sun Chariot is a bronze and gold artefact.', 'uploads/Trundholm-Sun-Chariot.jpg', 1, 'Denmark'),
(77, 4, 'The James Ossuary', '100 AD', 'Oded Golan', 'The James Ossuary is believed by some to be one of the most precious Biblical artifacts of all time, as the limestone box which is said to have held the bones of the purported brother of Jesus and if proven correct, would be the first physical link to Jesus. The first century AD burial box contains an Aramaic inscription that reads \"James, son of Joseph, brother of Jesus.\" The box was carved from a single piece of limestone, which was typical of burial boxes used by Jews of first-century Palestine. In those days, bodies were left in a cave for a year before the bones were collected and put in a box. The limestone box has been at the center of the most controversial forgery cases in decades.  The Israel Antiquities Authority (IAA) tried to prove in court that the items were forged by antiquities collector Oded Golan, but they failed in their ruling and subsequently tried, unsuccessfully, to gain ownership of the item. It is also alleged, that the item was vandalized by the Israeli government before being returned to its owner.', 'uploads/aramaic-jesus.jpg', 1, 'Israel'),
(78, 4, 'The Divje Babe flute', '5800 BC', 'National Museum of Slovenia', 'The oldest musical instrument ever discovered is believed to be the Divje Babe flute, discovered in a cave in Slovenia in 1995, though this has been disputed. The item is a fragment of the femur of a cave bear, which has been dated at 60,000-43,000 years old, which had been pierced with spaced holes.  Scientists who could not accept the possibility that Neanderthals were playing music rejected the claim and said that the perfectly spaced and neatly carved holes are in fact the result of the bone fragment having been chewed by an animal. However, a general consensus that the Divje Babe flute is actually a musical instrument has been growing as the view of the Neanderthals from subhuman brutes to more sophisticated humans is changing.', 'uploads/The-Divje-Babe-flute.jpg', 1, 'Slovenia'),
(79, 4, 'The Ubaid Lizard', '5000 BC', 'British Museum', 'In the early 20th century, archaeologists were excavating at the Tell Al\'Ubaid archaeological site in Iraq when they made an unusual discovery - numerous 7,000-year-old artifacts depicting humanoid figures with lizard-like characteristics, including long heads, almond shaped eyes, long tapered faces and a lizard-type nose. Some appear to be wearing a helmet and have some kind of padding on the shoulders. Other figurines were found to hold a staff or sceptre, possibly as a symbol of justice and ruling. Male and female figurines were found in different postures, but the strangest of all are the female figurines holding babies suckling milk, with the child also represented with lizard-like features. ', 'uploads/lizardmen.jpg', 1, 'Iraq');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_username` varchar(256) NOT NULL,
  `user_email` varchar(256) NOT NULL,
  `user_password` varchar(256) NOT NULL,
  `user_type` int(1) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_username`, `user_email`, `user_password`, `user_type`) VALUES
(2, 'Serban', 'serban@gmail.com', 'serban1', 0),
(3, 'Elena', 'elena@gmail.com', 'elena1', 0),
(4, 'Jane', 'jane@email.com', '$2y$10$cXSKi2BXW3KUb6AvWY99AO6ofQrG0Gz2eamQRLkY/aj6WFKKi.PlC', 0),
(5, 'Admin', 'admin@gmail.com', '$2y$10$h8T65jvB9W6Hlhc1nwCNqOEXJZO3B8cIx80J37tBcl5KBoJLBFiqi', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
