-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2023 at 12:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travelmania`
--

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `id` int(10) NOT NULL,
  `package_guid` varchar(50) NOT NULL,
  `user_guid` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `place` varchar(50) NOT NULL,
  `hotel` varchar(50) NOT NULL,
  `price` int(10) NOT NULL,
  `capacity` int(10) NOT NULL,
  `is_deleted` int(2) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`id`, `package_guid`, `user_guid`, `title`, `description`, `place`, `hotel`, `price`, `capacity`, `is_deleted`, `date_created`) VALUES
(1, '22e6efd8-94ba-4cb1-abbe-339aee4f26da', '9e764e7c-c65b-4f54-bcd9-c72d3ca65cee', 'Package One', 'A very nice package', 'Swat', 'Taj', 2000, 2, 0, '2023-01-08 15:29:13'),
(2, 'a0d073c4-5231-46d5-b2f7-86094aae85a5', '9e764e7c-c65b-4f54-bcd9-c72d3ca65cee', 'Package HERO', 'Great for norther areas', 'Kashmir', 'Lockywood Hotel', 10000, 3, 0, '2023-01-08 15:38:29'),
(3, '859801dc-e079-4a5e-94c0-ebfa351ba052', 'bf04d2f4-4a5e-4a4c-ac9c-23e32e364b4c', 'Test 1', 'this is test', 'Swat', '', 12000, 1, 0, '2023-01-08 15:53:28');

-- --------------------------------------------------------

--
-- Table structure for table `tour_guide`
--

CREATE TABLE `tour_guide` (
  `id` int(10) NOT NULL,
  `tour_guide_guid` varchar(100) NOT NULL,
  `user_guid` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `age` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `cnic` varchar(100) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phone_no` varchar(30) NOT NULL,
  `city` text NOT NULL,
  `about` text NOT NULL,
  `is_deleted` int(2) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tour_guide`
--

INSERT INTO `tour_guide` (`id`, `tour_guide_guid`, `user_guid`, `name`, `age`, `gender`, `cnic`, `country`, `phone_no`, `city`, `about`, `is_deleted`, `date_created`) VALUES
(0, 'b7e7f46c-d11e-45a5-a540-76cdf5a4c753', '9e764e7c-c65b-4f54-bcd9-c72d3ca65cee', 'Muhammad Arhum', '20', 'Male', '33100025038898', 'Tour Guide', '03111234567', 'Faisalabad', 'hello I am arhum', 0, '2023-01-07 23:16:55'),
(0, '9694b5b8-0683-43ce-b8ca-e1cd49739109', 'c13a35e3-de6b-43b6-b46c-3a183646e559', 'Man 1', '30', 'Male', '3310098090878', 'Pakistan', '03004564567', 'Lahore', 'A tourguide', 0, '2023-01-08 13:44:13');

-- --------------------------------------------------------

--
-- Table structure for table `tour_organization`
--

CREATE TABLE `tour_organization` (
  `id` int(10) NOT NULL,
  `tour_org_guid` varchar(100) NOT NULL,
  `user_guid` varchar(100) NOT NULL,
  `org_name` varchar(100) NOT NULL,
  `country` varchar(50) NOT NULL,
  `primary_contact` varchar(50) NOT NULL,
  `phone_no` varchar(30) NOT NULL,
  `about` text NOT NULL,
  `is_deleted` int(2) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tour_organization`
--

INSERT INTO `tour_organization` (`id`, `tour_org_guid`, `user_guid`, `org_name`, `country`, `primary_contact`, `phone_no`, `about`, `is_deleted`, `date_created`) VALUES
(0, 'c4358327-ba13-4c4e-a699-8e540e22bd7f', 'bf04d2f4-4a5e-4a4c-ac9c-23e32e364b4c', 'The best', 'Pakistan', 'Ali', '03001234567', 'Hello We are unique', 0, '2023-01-08 11:30:54');

-- --------------------------------------------------------

--
-- Table structure for table `traveler`
--

CREATE TABLE `traveler` (
  `id` int(10) NOT NULL,
  `traveler_guid` varchar(100) NOT NULL,
  `user_guid` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `cnic` varchar(50) NOT NULL,
  `language` varchar(50) NOT NULL,
  `dob` datetime NOT NULL,
  `gender` varchar(20) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `about` text NOT NULL,
  `is_deleted` int(2) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `traveler`
--

INSERT INTO `traveler` (`id`, `traveler_guid`, `user_guid`, `name`, `phone`, `cnic`, `language`, `dob`, `gender`, `city`, `country`, `about`, `is_deleted`, `date_created`) VALUES
(1, 'a3b14fc7-25cf-49c4-b2f3-20fc6292fc17', '4f81f409-cb49-4260-a9f6-cbdf275fab5a', 'azeem ch', '23878272', '23902902940', 'English', '2023-01-23 09:00:00', 'Male', 'Faisalabad', 'Pakistan', 'I am azeem', 0, '2023-01-08 12:03:58');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `user_guid` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_type` varchar(50) NOT NULL,
  `secret_key` varchar(30) NOT NULL,
  `is_deleted` int(2) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_guid`, `email`, `password`, `user_type`, `secret_key`, `is_deleted`, `date_created`) VALUES
(1, '4f81f409-cb49-4260-a9f6-cbdf275fab5a', 'iam@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Traveler', 'K9hbR49o', 0, '2022-12-10 19:15:13'),
(2, '9e764e7c-c65b-4f54-bcd9-c72d3ca65cee', 'arhumsharif06@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Tour Guide', 'boaJopS7', 0, '2022-12-27 00:45:46'),
(3, 'bf04d2f4-4a5e-4a4c-ac9c-23e32e364b4c', 'user@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Organization', '25tbAUrc', 0, '2022-12-27 01:10:31'),
(4, 'c13a35e3-de6b-43b6-b46c-3a183646e559', 'tourguide@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Tour Guide', 'YhB0bwzQ', 0, '2023-01-08 13:43:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `traveler`
--
ALTER TABLE `traveler`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `traveler`
--
ALTER TABLE `traveler`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
