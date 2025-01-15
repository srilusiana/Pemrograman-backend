-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2025 at 10:16 AM
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
-- Database: `patients`
--

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `status` enum('Positive','Recovered','Dead') NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `age`, `gender`, `address`, `phone`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Bryan', 25, 'Male', 'Surabaya', '088990088765', 'Recovered', '2025-01-15 07:05:39', '2025-01-15 07:05:39'),
(2, 'Jessica', 20, 'Female', 'Solo', '088965438769', 'Positive', '2025-01-15 07:05:39', '2025-01-15 07:05:39'),
(3, 'Indah', 19, 'Female', 'Bandung', '081256789087', 'Recovered', '2025-01-15 07:05:39', '2025-01-15 07:05:39'),
(4, 'Kevin', 24, 'Male', 'Bogor', '085690845637', 'Recovered', '2025-01-15 07:05:39', '2025-01-15 07:05:39'),
(5, 'Lucao', 22, 'Male', 'Jakarta', '088909809080', 'Recovered', '2025-01-15 07:05:39', '2025-01-15 07:05:39'),
(6, 'Clara', 31, 'Female', 'Jakarta', '085778909876', 'Dead', '2025-01-15 07:05:39', '2025-01-15 07:05:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
