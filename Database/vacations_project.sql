-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2024 at 03:53 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacations_project`
--
CREATE DATABASE IF NOT EXISTS `vacations_project` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `vacations_project`;

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `userId` int(11) NOT NULL,
  `vacationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`userId`, `vacationId`) VALUES
(26, 227),
(26, 243),
(27, 237),
(27, 243),
(28, 228),
(28, 238),
(28, 240),
(28, 243),
(29, 227),
(29, 233),
(29, 234),
(29, 241),
(30, 227),
(30, 229),
(30, 230),
(30, 235),
(30, 240),
(30, 243),
(31, 231),
(31, 234),
(31, 239),
(33, 232),
(33, 234),
(33, 242),
(34, 231),
(34, 235),
(35, 227),
(35, 240),
(35, 241),
(35, 243);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `roleId` int(11) NOT NULL,
  `roleName` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roleId`, `roleName`) VALUES
(1, 'User'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `roleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `email`, `password`, `roleId`) VALUES
(26, 'Lisa', 'Simpson', 'lisa@simpson.com', 'd350329a29ddddf58d160b4742c6efccf527da1d250e85f602f50726e094a4c431f69427cd92802031dd52d6159557401b784058a34ff6806e37c4d233158359', 2),
(27, 'Homer', 'Simpson', 'homer@simpson.com', 'd350329a29ddddf58d160b4742c6efccf527da1d250e85f602f50726e094a4c431f69427cd92802031dd52d6159557401b784058a34ff6806e37c4d233158359', 1),
(28, 'Maggie', 'Simpson', 'maggie@simpson.com', 'd350329a29ddddf58d160b4742c6efccf527da1d250e85f602f50726e094a4c431f69427cd92802031dd52d6159557401b784058a34ff6806e37c4d233158359', 1),
(29, 'Bart', 'Simpson', 'bart@simpson.com', 'd350329a29ddddf58d160b4742c6efccf527da1d250e85f602f50726e094a4c431f69427cd92802031dd52d6159557401b784058a34ff6806e37c4d233158359', 1),
(30, 'Abe', 'Simpson', 'abe@simpson.com', 'd350329a29ddddf58d160b4742c6efccf527da1d250e85f602f50726e094a4c431f69427cd92802031dd52d6159557401b784058a34ff6806e37c4d233158359', 1),
(31, 'Mona', 'Simpson', 'mona@simpson.com', 'd350329a29ddddf58d160b4742c6efccf527da1d250e85f602f50726e094a4c431f69427cd92802031dd52d6159557401b784058a34ff6806e37c4d233158359', 1),
(32, 'Marge', 'Simpson', 'marge@simpson.com', 'd350329a29ddddf58d160b4742c6efccf527da1d250e85f602f50726e094a4c431f69427cd92802031dd52d6159557401b784058a34ff6806e37c4d233158359', 1),
(33, 'Hugo', 'Simpson', 'hugo@simpson.com', 'd350329a29ddddf58d160b4742c6efccf527da1d250e85f602f50726e094a4c431f69427cd92802031dd52d6159557401b784058a34ff6806e37c4d233158359', 1),
(34, 'Eliza', 'Simpson', 'eliza@simpson.com', 'd350329a29ddddf58d160b4742c6efccf527da1d250e85f602f50726e094a4c431f69427cd92802031dd52d6159557401b784058a34ff6806e37c4d233158359', 1),
(35, 'Amber', 'Simpson', 'amber@simpson.com', 'd350329a29ddddf58d160b4742c6efccf527da1d250e85f602f50726e094a4c431f69427cd92802031dd52d6159557401b784058a34ff6806e37c4d233158359', 1);

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `vacationId` int(11) NOT NULL,
  `destination` varchar(30) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `checkIn` date NOT NULL,
  `checkOut` date NOT NULL,
  `price` int(11) NOT NULL,
  `imageName` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`vacationId`, `destination`, `description`, `checkIn`, `checkOut`, `price`, `imageName`) VALUES
(227, 'Spain - Barcelona', 'Barcelona, a Mediterranean gem, entices tourists with its dazzling architecture, including Gaudí\'s Sagrada Família and Park Güell. The historic Gothic Quarter and lively La Rambla offer cultural delights, while sun-soaked beaches add a touch of relaxation. With a rich blend of history, art, and a vibrant atmosphere, Barcelona is a must-visit destination for any traveler.', '2024-01-19', '2024-01-31', 1693, '9fbd7cb3-e4e9-4c50-a24e-848a026becea.jpg'),
(228, 'Portugal - Lisbon', 'Lisbon, Portugal\'s coastal capital, beckons travelers with its picturesque charm and rich history. The city\'s cobbled streets wind through historic neighborhoods like Alfama, offering Fado music and stunning viewpoints. Lisbon\'s iconic yellow trams, vibrant street art, and the historic Belém Tower are highlights that captivate visitors. With a blend of old-world charm and a lively contemporary scene, Lisbon is a dynamic destination where culture, cuisine, and captivating landscapes converge.', '2024-01-23', '2024-01-30', 808, '539e2e18-85f4-4594-b5ca-5ca97e1a148f.jpg'),
(229, 'Brazil - Rio de Janeiro', 'Rio de Janeiro, a Brazilian jewel nestled between lush mountains and golden beaches, is a city of infectious energy. Famous for its iconic Christ the Redeemer statue atop Corcovado Mountain, and the vibrant Carnival celebrations, Rio offers a unique blend of natural beauty and cultural richness. Copacabana and Ipanema beaches, with their lively atmosphere, showcase the city\'s love for life. From samba-filled streets to breathtaking panoramic views, Rio de Janeiro is a captivating destination that encapsulates the essence of Brazil.', '2024-01-08', '2024-01-26', 2017, '382a3e17-a24a-413a-ba3f-a4fc2249a7f7.jpg'),
(230, 'France - Paris', 'Paris, the \"City of Lights,\" is an eternal magnet for tourists. Renowned for its timeless landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral, Paris effortlessly combines history, art, and romance. Charming boulevards, sidewalk cafés, and the Seine River create a picturesque backdrop for strolls. With world-class cuisine, iconic fashion, and a cultural allure, Paris remains an irresistible destination that captures the hearts of visitors from around the globe.', '2024-02-11', '2024-02-18', 807, '37411204-8ed6-49e7-b701-6516d7465658.jpg'),
(231, 'Italy - Rome', 'Rome, the Eternal City, stands as a living testament to millennia of history and culture. Home to iconic landmarks such as the Colosseum, Roman Forum, and the Vatican City, it is a city where the ancient and modern coexist seamlessly. The charming cobbled streets, vibrant piazzas, and delectable Italian cuisine create an enchanting atmosphere. Rome\'s timeless allure, encompassing art, history, and the spirit of la dolce vita, ensures that every visitor experiences the magic of this historic capital.', '2024-02-08', '2024-02-15', 1744, '7e496927-86f0-4620-bd68-05a75cf8e527.jpg'),
(232, 'Japan - Tokyo', 'Tokyo, a dynamic metropolis where tradition and modernity harmoniously coalesce, is a captivating destination. Skyscrapers and neon-lit streets showcase the city\'s cutting-edge technology, while historic temples like Senso-ji in Asakusa provide glimpses of Japan\'s rich cultural heritage. The trendy districts of Shibuya and Harajuku pulsate with youthful energy and avant-garde fashion. Tokyo\'s diverse culinary scene, from street food to Michelin-starred restaurants, caters to every palate. With its efficient public transportation, cherry blossoms in spring, and a blend of old and new, Tokyo offers an exhilarating experience for every traveler.', '2024-02-22', '2024-02-29', 1724, 'c3de28fa-a4af-49bf-9c86-c384b17ae6d7.jpg'),
(233, 'Germany - Berlin', 'Berlin, the vibrant capital of Germany, is a city that seamlessly blends a rich history with modern innovation. From the iconic Brandenburg Gate to the remnants of the Berlin Wall, reminders of the city\'s past are interspersed with trendy neighborhoods like Kreuzberg and Prenzlauer Berg. World-class museums on Museum Island and contemporary art scenes contribute to Berlin\'s cultural richness. The city\'s dynamic atmosphere, diverse cuisine, and a thriving nightlife make it a compelling destination for those seeking a unique mix of history and contemporary flair.', '2024-02-25', '2024-03-02', 822, '5657529b-97d1-48e3-a0a8-4f0dc87ee6b6.webp'),
(234, 'Switzerland - Zurich', 'Zurich, Switzerland\'s financial hub, is a city that effortlessly combines cosmopolitan flair with scenic beauty. Nestled on the shores of Lake Zurich and surrounded by the Alps, the city offers a picturesque backdrop for exploration. With its well-preserved medieval old town, Bahnhofstrasse shopping avenue, and world-class museums, Zurich caters to diverse interests. The city\'s commitment to quality of life is reflected in its pristine parks and the serene waters of Lake Zurich. Whether indulging in Swiss chocolate or exploring cultural treasures, Zurich welcomes visitors to experience a perfect blend of urban sophistication and natural charm.', '2024-03-01', '2024-03-08', 1000, 'aeac2f5a-1bba-41ac-8086-c12f28109eb8.jpg'),
(235, 'Australia - Sydney', 'Sydney, Australia\'s iconic harbor city, is a vibrant tapestry of natural beauty and urban sophistication. The Sydney Opera House and the Sydney Harbour Bridge define the city\'s skyline, while Bondi Beach offers a sun-soaked haven for surf enthusiasts. With a thriving arts scene, diverse neighborhoods like Darling Harbour, and the lush Royal Botanic Garden, Sydney provides a diverse range of experiences. The city\'s culinary delights, multicultural influences, and the friendly Aussie spirit make it a must-visit destination for those seeking a blend of cosmopolitan charm and coastal allure.', '2024-04-08', '2024-04-15', 2741, '0e0c0960-51f3-44ac-9923-4d9f4a7ff2e5.webp'),
(236, 'Thailand - Bangkok', 'Bangkok, the dynamic capital of Thailand, is a city of contrasts where ancient traditions meet modern energy. Ornate temples like Wat Arun and the Grand Palace coexist with bustling markets and vibrant street life. The city\'s skyline is adorned with sleek skyscrapers, while the Chao Phraya River weaves through its heart. Bangkok is a food lover\'s paradise, offering a spectrum of flavors from street vendors to Michelin-starred restaurants. With its lively nightlife, cultural gems, and warm hospitality, Bangkok invites visitors to immerse themselves in a city that seamlessly blends tradition and innovation.', '2024-02-23', '2024-03-01', 5045, '1e61c27b-742e-4557-97b9-1c8b1c7698f3.webp'),
(237, 'Netherlands - Amsterdam', 'Amsterdam, the picturesque capital of the Netherlands, is a city of historic charm and progressive spirit. Famous for its iconic canals, historic houses, and vibrant tulip markets, Amsterdam offers a unique blend of old-world elegance and contemporary flair. The Rijksmuseum and Van Gogh Museum house renowned art collections, while the Anne Frank House provides a poignant historical perspective. Bicycles weaving through cobbled streets, cozy cafes, and the lively atmosphere of Dam Square contribute to the city\'s undeniable allure. With its open-minded culture, rich history, and scenic waterways, Amsterdam captivates visitors from around the globe.', '2024-01-30', '2024-02-08', 733, '9e18bf86-d683-4205-9f77-0a250603fafb.webp'),
(238, 'India -  Agra', 'The Taj Mahal, an architectural marvel in Agra, India, stands as a timeless symbol of love. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the ivory-white marble mausoleum is a UNESCO World Heritage Site and one of the New Seven Wonders of the World. Its intricate detailing, symmetrical gardens, and serene reflection pools create a breathtaking experience. The Taj Mahal attracts millions of visitors annually, drawing them into the enchanting narrative of eternal love and showcasing the sublime beauty of Mughal architecture.', '2024-04-04', '2024-04-11', 1005, 'dff19ceb-d798-428d-a11f-d42e630121ae.jpg'),
(239, 'China - Beijing', 'Beijing, the capital of China, is a city where ancient history meets modern dynamism. The iconic Forbidden City, with its imperial grandeur, stands alongside contemporary marvels like the Bird\'s Nest Stadium and futuristic skyscrapers. The Great Wall of China, a short journey from the city, offers a glimpse into the country\'s rich heritage. Beijing\'s vibrant street life, traditional hutongs (narrow alleys), and the Temple of Heaven contribute to its cultural richness. With a rich culinary scene, bustling markets, and a mix of ancient and contemporary attractions, Beijing beckons travelers to explore its diverse and dynamic character.', '2024-05-06', '2024-05-13', 1836, 'a8ac678e-1fc6-4482-b6c3-5d44a9f93a9a.jpg'),
(240, 'Greece - Santorini', 'Santorini, a Greek island gem in the Aegean Sea, is renowned for its breathtaking beauty and unique architecture. White-washed buildings with blue-domed roofs cling to the cliffs overlooking the azure waters, creating a postcard-perfect scene. The island\'s volcanic beaches, such as Red Beach and Perissa, offer striking landscapes. Fira and Oia, with their narrow streets and sunset views, are charming villages that captivate visitors. From archaeological sites like Akrotiri to wineries producing Assyrtiko wine, Santorini offers a delightful blend of history, natural wonders, and romantic ambiance, making it a coveted destination for travelers seeking a slice of Greek paradise.', '2024-01-29', '2024-02-05', 1145, '014c6449-c10d-40a1-a7be-502fa66a824c.jpg'),
(241, 'South Africa - Cape Town', 'Cape Town, nestled between the iconic Table Mountain and the Atlantic Ocean, is a captivating destination offering a harmonious blend of natural beauty and cultural richness. The city\'s vibrant waterfront, historic landmarks like Robben Island, and the colorful Bo-Kaap neighborhood provide diverse experiences. With its renowned beaches like Clifton and Camps Bay, Cape Town is a haven for sun-seekers. The surrounding winelands, along with the Garden Route and Cape Peninsula, offer additional exploration opportunities. Cape Town\'s dynamic arts scene, diverse cuisine, and welcoming atmosphere make it a must-visit destination on the southern tip of Africa.', '2024-02-04', '2024-02-11', 1263, '0995b52e-f1c2-404e-8925-f843c2c584f7.jpg'),
(242, 'Canada - Toronto', 'Toronto, Canada\'s dynamic metropolis, is a diverse and cosmopolitan city situated on the shores of Lake Ontario. The iconic CN Tower dominates the skyline, offering panoramic views of the city and beyond. Toronto is a cultural hub with world-class museums like the Royal Ontario Museum and the Art Gallery of Ontario. The Distillery District\'s cobblestone streets, the vibrant neighborhoods of Kensington Market and Queen Street West, and the picturesque Toronto Islands provide varied experiences. With its multicultural cuisine, lively entertainment scene, and welcoming atmosphere, Toronto is a captivating destination that seamlessly blends modernity with Canadian warmth.', '2024-03-07', '2024-03-14', 1702, '62d6e12d-4f55-4844-8577-1faa90fb60c6.webp'),
(243, 'Korea - Seoul', 'Toronto, Canada\'s dynamic metropolis, is a diverse and cosmopolitan city situated on the shores of Lake Ontario. The iconic CN Tower dominates the skyline, offering panoramic views of the city and beyond. Toronto is a cultural hub with world-class museums like the Royal Ontario Museum and the Art Gallery of Ontario. The Distillery District\'s cobblestone streets, the vibrant neighborhoods of Kensington Market and Queen Street West, and the picturesque Toronto Islands provide varied experiences. With its multicultural cuisine, lively entertainment scene, and welcoming atmosphere, Toronto is a captivating destination that seamlessly blends modernity with Canadian warmth.', '2024-01-15', '2024-01-22', 1307, '36ce4e32-d328-442d-aead-0da724e67742.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`userId`,`vacationId`),
  ADD KEY `vacationId` (`vacationId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roleId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD KEY `roleId` (`roleId`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`vacationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `roleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=244;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`vacationId`) REFERENCES `vacations` (`vacationId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`roleId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
