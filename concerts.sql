-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Már 08. 10:31
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `concerts`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `concert`
--

CREATE TABLE `concert` (
  `id` int(11) NOT NULL,
  `performer` varchar(255) NOT NULL,
  `startTime` datetime NOT NULL,
  `duration` int(11) NOT NULL,
  `isCancelled` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `concert`
--

INSERT INTO `concert` (`id`, `performer`, `startTime`, `duration`, `isCancelled`) VALUES
(1, 'Band A', '2025-03-08 23:32:56', 90, 0),
(2, 'Artist B', '2025-03-09 23:32:56', 60, 0),
(3, 'Group C', '2025-03-10 23:32:56', 120, 0),
(4, 'Band D', '2025-03-11 23:32:56', 75, 0),
(5, 'Solo E', '2025-03-12 23:32:56', 45, 0),
(6, 'teszt', '2025-03-23 13:14:00', 120, 1),
(7, 'teszt2', '2025-03-07 16:17:00', 120, 1),
(8, 'teszt5', '2025-03-15 12:40:00', 5, 1),
(9, 'teszt6', '2025-03-22 13:49:00', 10, 0),
(10, 'teszt7', '2025-03-21 13:52:00', 120, 0),
(11, 'teszt8', '2025-03-22 13:01:00', 120, 0),
(12, 'teszt9', '2025-04-03 14:03:00', 100, 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `concert`
--
ALTER TABLE `concert`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `concert`
--
ALTER TABLE `concert`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
