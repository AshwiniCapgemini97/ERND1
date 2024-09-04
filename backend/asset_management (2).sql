-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2024 at 09:40 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `asset_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `id` int(11) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `customer_issues` varchar(255) NOT NULL,
  `benifits` varchar(255) NOT NULL,
  `solutions` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL DEFAULT '',
  `tags` varchar(255) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `links` varchar(255) NOT NULL,
  `platform_requirements` varchar(255) NOT NULL,
  `logistics_information` varchar(255) NOT NULL,
  `tools` varchar(255) NOT NULL,
  `last_events` varchar(255) NOT NULL,
  `industry_partnership` varchar(255) NOT NULL,
  `setup_documentation` varchar(255) NOT NULL,
  `asset_file_type` enum('CONFIDENTIAL','PUBLIC') NOT NULL DEFAULT 'CONFIDENTIAL',
  `name` varchar(100) NOT NULL,
  `source_code` varchar(255) NOT NULL DEFAULT '',
  `title` varchar(100) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`id`, `short_description`, `description`, `customer_issues`, `benifits`, `solutions`, `logo`, `tags`, `status`, `created_at`, `updated_at`, `links`, `platform_requirements`, `logistics_information`, `tools`, `last_events`, `industry_partnership`, `setup_documentation`, `asset_file_type`, `name`, `source_code`, `title`) VALUES
(6, 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsffssdfdsffssdfdsffssdfdsffssdfdsf', '1710242167780_profile_icon.png', 'good,testtadsff', 'ACTIVE', '2024-02-12 08:31:52.132457', '2024-03-19 07:19:29.999819', '', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(8, 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsffssdfdsffssdfdsffssdfdsffssdfdsf', '1710242167780_profile_icon.png', 'good,testtadsff', 'ACTIVE', '2024-02-12 08:49:51.508846', '2024-03-19 07:19:29.999819', 'links,links,links', 'fdsasf fsaf f', 'fdfasdfsd fd faf sd', 'fdfdsfdsds', 'fdsfsdfdsf', 'fdfsdfsdfds', 'fdsfdsfdsfdsf', 'CONFIDENTIAL', '', '', ''),
(10, 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsffssdfdsffssdfdsffssdfdsffssdfdsf', '1710242167780_profile_icon.png', 'good,testtadsff', 'ACTIVE', '2024-02-15 09:18:52.831835', '2024-03-19 07:19:29.999819', 'links,links,links', 'fdsasf fsaf f', 'fdfasdfsd fd faf sd', 'fdfdsfdsds', 'fdsfsdfdsf', 'fdfsdfsdfds', 'fdsfdsfdsfdsf', 'CONFIDENTIAL', '', '', ''),
(11, 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsffssdfdsffssdfdsffssdfdsffssdfdsf', '1710242167780_profile_icon.png', 'good,testtadsff', 'ACTIVE', '2024-02-15 09:19:27.803680', '2024-03-19 07:19:29.999819', 'links,links,links', 'fdsasf fsaf f', 'fdfasdfsd fd faf sd', 'fdfdsfdsds', 'fdsfsdfdsftraf adfd fasdfsf', 'fdfsdfsdfds', 'fdsfdsfdsfdsf', 'CONFIDENTIAL', '', '', ''),
(12, 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsffssdfdsffssdfdsffssdfdsffssdfdsf', '1710242167780_profile_icon.png', 'good,testtadsff', 'ACTIVE', '2024-02-15 09:20:12.017759', '2024-03-19 07:19:29.999819', 'links,links,links', 'fdsasf fsaf f', 'fdfasdfsd fd faf sd', 'fdfdsfdsds', 'test', 'fdfsdfsdfds', 'fdsfdsfdsfdsf', 'CONFIDENTIAL', '', '', ''),
(13, 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsffssdfdsffssdfdsffssdfdsffssdfdsf', '1710242167780_profile_icon.png', 'good,test', 'ACTIVE', '2024-02-15 09:20:43.886182', '2024-03-19 07:19:29.999819', 'links,links,links', 'fdsasf fsaf f', 'fdfasdfsd fd faf sd', 'fdfdsfdsds', 'test', 'fdfsdfsdfds', 'fdsfdsfdsfdsf', 'CONFIDENTIAL', '', '', ''),
(15, 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsffssdfdsffssdfdsffssdfdsffssdfdsf', '1710242167780_profile_icon.png', 'good,test', 'ACTIVE', '2024-02-22 08:33:02.843293', '2024-03-19 07:19:29.999819', 'links,links,links', 'fdsasf fsaf f', 'fdfasdfsd fd faf sd', 'fdfdsfdsds', 'test', 'fdfsdfsdfds', 'fdsfdsfdsfdsf', 'CONFIDENTIAL', '', '', ''),
(16, 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsffssdfdsffssdfdsffssdfdsffssdfdsf', '1710242167780_profile_icon.png', 'good,test', 'ACTIVE', '2024-02-22 08:33:19.262698', '2024-03-19 07:19:29.999819', 'links,links,links', 'fdsasf fsaf f', 'fdfasdfsd fd faf sd', 'fdfdsfdsds', 'test', 'fdfsdfsdfds', 'fdsfdsfdsfdsf', 'CONFIDENTIAL', '', '', ''),
(19, 'fdsasd fsdf', 'description', 'customer_issues', 'benifits', 'solutions', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-23 07:58:46.886068', '2024-03-19 07:19:29.999819', 'link1,link1,link1', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(20, 'fsdfdsfdsf afdsa fds', '<p>fsfdsfdsfds fsdffdsaf ffds</p>', '<p>fsfdsfsdffsd fds fd</p>', '<p>gfds dgdsfg fdgdfsg dsgdfgfd</p>', '<p>gfdsgfdg gfd</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-23 09:29:59.260801', '2024-03-19 07:19:29.999819', 'link1,link1,link1', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(25, 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsffssdfdsffssdfdsffssdfdsffssdfdsf', '1710242167780_profile_icon.png', 'good,test', 'ACTIVE', '2024-02-26 11:26:03.830368', '2024-03-19 07:19:29.999819', 'links,links,links', 'fdsasf fsaf f', 'fdfasdfsd fd faf sd', 'fdfdsfdsds', 'test', 'fdfsdfsdfds', 'fdsfdsfdsfdsf', 'CONFIDENTIAL', '', '', ''),
(28, 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsf', 'fssdfdsffssdfdsffssdfdsffssdfdsffssdfdsf', '1710242167780_profile_icon.png', 'good,test', 'ACTIVE', '2024-02-26 11:49:03.768736', '2024-03-19 07:19:29.999819', 'links,links,links', 'fdsasf fsaf f', 'fdfasdfsd fd faf sd', 'fdfdsfdsds', 'test', 'fdfsdfsdfds', 'fdsfdsfdsfdsf', 'CONFIDENTIAL', '', '', ''),
(32, 'gsfdgfdgfd', '<p>fasdf asdfsdfds</p>', '<p>gfdsgfdg</p>', '<p>gfsdgfdg</p>', '<p>gfsdgfdgdf</p>', '1710242167780_profile_icon.png', 'teast,test2', 'ACTIVE', '2024-02-26 12:03:55.823135', '2024-03-19 07:19:29.999819', 'test1,test2,test3', 'gfdgfd fsd', 'fsd fds', 'fds fds f', 'fa sfsdf f', 'fdsa fsd fds', 'fds fds sdaf f', 'CONFIDENTIAL', '', '', ''),
(33, 'gsfdgfdgfd', '<p>fasdf asdfsdfds</p>', '<p>gfdsgfdg</p>', '<p>gfsdgfdg</p>', '<p>gfsdgfdgdf</p>', '1710242167780_profile_icon.png', 'teast,test2', 'ACTIVE', '2024-02-26 12:06:31.204539', '2024-03-19 07:19:29.999819', 'test1,test2,test3', 'gfdgfd fsd', 'fsd fds', 'fds fds f', 'fa sfsdf f', 'fdsa fsd fds', 'fds fds sdaf f', 'CONFIDENTIAL', '', '', ''),
(34, 'gsfdgfdgfd', '<p>fasdf asdfsdfds</p>', '<p>gfdsgfdg</p>', '<p>gfsdgfdg</p>', '<p>gfsdgfdgdf</p>', '1710242167780_profile_icon.png', 'teast,test2', 'ACTIVE', '2024-02-26 12:09:28.960894', '2024-03-19 07:19:29.999819', 'safsdf,fsdafsd,fsdfsd', 'gfdgfd fsd', 'fsd fds', 'fds fds f', 'fa sfsdf f', 'fdsa fsd fds', 'fds fds sdaf f', 'PUBLIC', '', '', ''),
(35, 'fsdafsdf f', '<p>fads fsd f</p>', '<p>fsda fsd f</p>', '<p>fasd fdsa fd</p>', '<p>fasd fsdaf d</p>', '1710242167780_profile_icon.png', 'fsdafsd', 'ACTIVE', '2024-02-26 12:10:39.745502', '2024-03-19 07:19:29.999819', 'fdsafds,fasdfsd,', 'fdsfsdf', 'fsdafsdf', 'fsdafsdf', 'fdsfsfdsa', 'fsadfsadfsd', 'fdsafsdafsd', 'CONFIDENTIAL', '', '', ''),
(36, 'fsdasdf', '<p>fasfsd fsad f</p>', '<p>fsda fsd f</p>', '<p>fsa fsdf sd</p>', '<p>fsad fsdfsd</p>', '1710242167780_profile_icon.png', 'fdsafdsfs', 'ACTIVE', '2024-02-26 12:14:09.781614', '2024-03-19 07:19:29.999819', 'tesat,fdsafds,', 'fsdf sdfsf', 'a f fsdf', 'fsda fds', 'fa fsdf', 'fdsa fds f', 'fsa fsdfd', 'CONFIDENTIAL', '', '', ''),
(37, 'fdsafsd fds', '<p>fsad fsd</p>', '<p>fa fsadf sd</p>', '<p>fas fsdaf</p>', '<p>fa fsf</p>', '1710242167780_profile_icon.png', 'fsdafsdf', 'ACTIVE', '2024-02-26 12:19:47.979971', '2024-03-19 07:19:29.999819', 'fdsafds,fdsafds,fasfasdf', 'fsa fsdaf', 'fdsa sadf', 'fas fsdaf', 'fdsa fsdaf', 'fsda fsadf', 'fas fdsf', 'CONFIDENTIAL', '', '', ''),
(38, 'fdsa fa', '<p>fas fds</p>', '<p>fa fsadf</p>', '<p>fasd fs fds</p>', '<p>fsadf sfsdf</p>', '1710242167780_profile_icon.png', 'fdsafsd', 'ACTIVE', '2024-02-26 12:25:38.875268', '2024-03-19 07:19:29.999819', 'tesat,teassfd,fdsafsd', 'sda fsfsd', 'sa fsadfs dfs', 'fsa fsdf ds', 'fs fsdf ds', 'fds fsda fds', 'fsda fsdf sdf', 'CONFIDENTIAL', '', '', ''),
(39, 'fsda fasdf', '<p>sda fsdafsd</p>', '<p>fsa fsd</p>', '<p>f safsdf</p>', '<p>f fdsfsd</p>', '1710242167780_profile_icon.png', 'fdsafsd', 'ACTIVE', '2024-02-26 12:29:15.619705', '2024-03-19 07:19:29.999819', 'tesat,tesat,afsdfsd', 'fdas fsdaf', 'fsdf sfsdf', 'fdsa fdsf dfs', 'fsda fdsf ds', 'fds fdsfsd fs', 'fsdfsdf sf', 'CONFIDENTIAL', '', '', ''),
(40, 'fsda fasdf', '<p>sda fsdafsd</p>', '<p>fsa fsd</p>', '<p>f safsdf</p>', '<p>f fdsfsd</p>', '1710242167780_profile_icon.png', 'fdsafsd', 'ACTIVE', '2024-02-26 12:35:03.878640', '2024-03-19 07:19:29.999819', 'dsfdas,fdsaf,fdsfasf', 'fdas fsdaf', 'fsdf sfsdf', 'fdsa fdsf dfs', 'fsda fdsf ds', 'fds fdsfsd fs', 'fsdfsdf sf', 'CONFIDENTIAL', '', '', ''),
(42, 'fdsaf sdaf sdf', '<p>fdsa fsd f</p>', '<p>fdsa fds fd</p>', '<p>fsda fsdfds</p>', '<p>fdsa fds fdsf</p>', '1710242167780_profile_icon.png', 'fdsafds', 'ACTIVE', '2024-02-26 12:52:35.650044', '2024-03-19 07:19:29.999819', 'teat,teast,tesats', 'fdsa fds fd', 'fdsa fdsafsda', 'fdsa fds fds', 'fdsa fdsa fds', 'f sdafdsa f', 'fdsa fdsffdsf', 'CONFIDENTIAL', '', '', ''),
(43, 'fsda fsad f', '<p>fsda fsd</p>', '<p>fasd fds</p>', '<p>fasd f</p>', '<p>fads fsdafsd</p>', '1710242167780_profile_icon.png', 'fdsfsdf', 'ACTIVE', '2024-02-26 13:01:28.610275', '2024-03-19 07:19:29.999819', 'fsda fds,fdsaf,fdsafsd', 'fsda fd', 'fdas fd', 'fdsa fsd', 'fdsa fsd', 'fdsa fds', 'fa fasdfd', 'CONFIDENTIAL', '', '', ''),
(44, 'ffsa fsd', '<p>fsda fasdf</p>', '<p>fsda fsdaf</p>', '<p>fdsa fdsfds</p>', '<p> fsafsdfsdf</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-26 13:06:14.819432', '2024-03-19 07:19:29.999819', 'fsda,fsdafds,fsdafdsaf', 'fsdaf sdf', 'fdsafdsa fds', 'fsda fsdf', 'fsad fdsf', 'fsd fsdafsd', 'fsad fdsf', 'CONFIDENTIAL', '', '', ''),
(45, 'fdsa fsdf sd', '<p>fsda fsd fds</p>', '<p>fdsa fsdf</p>', '<p>fsda fds fd</p>', '<p>fsd afsdf</p>', '1710242167780_profile_icon.png', 'tesafsddsf', 'ACTIVE', '2024-02-26 13:10:16.579035', '2024-03-19 07:19:29.999819', 'teast1,tesat2,test3', 'fsda fsdf', '', 'fsd fsdf', 'fdsa sf', 'fasdf dsf', 'fsad fsdaf', 'CONFIDENTIAL', '', '', ''),
(46, 'fdsafdf', '<p>fdsafds</p>', '<p>fdsafds</p>', '<p>fdasfds</p>', '<p>fdasfds</p>', '1710242167780_profile_icon.png', 'test', 'ACTIVE', '2024-02-26 13:15:17.886645', '2024-03-19 07:19:29.999819', 'test,teat,test', 'fdsafdsaf', 'fsa fds', 'fdsa fdasfds', 'ffdas fdsf', 'fds fsdf sd', 'fdsa fsdfds', 'CONFIDENTIAL', '', '', ''),
(47, 'fdsaf afds', '<p>fsda fds</p>', '<p>fdsa fdsf</p>', '<p>fdsa fdsfasd</p>', '<p>fds afsdafds</p>', '1710242167780_profile_icon.png', 'fdsfsdf', 'ACTIVE', '2024-02-26 13:17:58.198392', '2024-03-19 07:19:29.999819', 'fdsaf,dfsaf,fdsafsd', 'fdsfsdfd', 'fdsfsdfsd', 'fdsfsdfds', 'safdsfsd', 'sdfafsdfsd', 'fdsafsdfds', 'CONFIDENTIAL', '', '', ''),
(48, 'afssf asfd', '<p>fdsa fsdf</p>', '<p>fsa fsda</p>', '<p>fsda sdf</p>', '<p>fdsaf sdf</p>', '1710242167780_profile_icon.png', 'tesafsd', 'ACTIVE', '2024-02-26 13:20:51.034257', '2024-03-19 07:19:29.999819', 'tesat,taesf,fsdafsd', 'fdsafsdf', 'fdsafsdf', 'fsadfsdf', 'fsdafsdafs', 'fsdafsd', 'fdsafsdaf', 'CONFIDENTIAL', '', '', ''),
(49, 'dsafdsf', '<p>fsdfsd</p>', '<p>fsdfsdf</p>', '<p>fsdfsd</p>', '<p>fsdfsdf</p>', '1710242167780_profile_icon.png', 'fsdfsd', 'ACTIVE', '2024-02-26 13:29:14.616246', '2024-03-19 07:19:29.999819', 'teasfsd,fsdafsd,', 'sdfsd sdf', 'fdsfsd', 'fsdfsd', 'fsdfsdfd', 'fsdfsd', 'fsdfsdf', 'CONFIDENTIAL', '', '', ''),
(50, 'fsdafsdf', '<p>fsdafsdf</p>', '<p>fsdafsdf</p>', '<p>fsdafsd</p>', '<p>fsdafsdaf</p>', '1710242167780_profile_icon.png', 'fdsafasdf', 'ACTIVE', '2024-02-26 13:31:52.536381', '2024-03-19 07:19:29.999819', 'fsdafds,fsadfsdf,fdsafsdf', 'fdsafdsf fsd', 'fsd fds fds', 'fsda fsd fsd', 'fsfsa fsdaf', 'fsda fsdfds ', 'fsda fsdafsda', 'CONFIDENTIAL', '', '', ''),
(52, 'fasd fdsfsdf', '<p>fdsfsd fd</p>', '<p>fdsa fdsa f</p>', '<p>fsd fdsfd</p>', '<p>fsad fsdfd</p>', '1710242167780_profile_icon.png', 'teat', 'ACTIVE', '2024-02-27 05:14:28.440872', '2024-03-19 07:19:29.999819', 'dasfdsf,sdfd,dsfdsf', 'fdsa fds fd', 'fdsa fds f', 'fsda fdsfds', 'fsad fdsfds', 'fsda fddfs', 'fasd fsdfd', 'CONFIDENTIAL', '', '', ''),
(53, 'fds fsdaf', '<p>fdsf sdf</p>', '<p>fsdaf sf</p>', '<p>fsda fsd</p>', '<p>f sadfdsfds</p>', '1710242167780_profile_icon.png', 'tesat', 'ACTIVE', '2024-02-27 05:17:28.784912', '2024-03-19 07:19:29.999819', 'tesat,tesats,afsdsa', 'fsdafsd', 'fdsadsfsd', 'fasdfsdfsd', 'fdsaf fsd fsd', 'fdsa fsd fd', 'faas fs fd', 'CONFIDENTIAL', '', '', ''),
(54, 'fdsafsdfsd', '<p>fdsfsdfds</p>', '<p>fsdaf fdsa</p>', '<p>fdsa fdsf ds</p>', '<p>fsd fsda fsd</p>', '1710242167780_profile_icon.png', 'tesafd', 'ACTIVE', '2024-02-27 05:19:08.913796', '2024-03-19 07:19:29.999819', 'teatteat,fsdafsd,fdsafsdf', 'fds fsd fd', 'fdsa fsd', 'fsda fdsa f', 'fsd fsdf', 'fsd fds fsd', 'fads fds fds', 'CONFIDENTIAL', '', '', ''),
(55, 'fsda fdsaf', '<p>fdsa fsd fds</p>', '<p>fsd fsda fds</p>', '<p>fsda fds f</p>', '<p>fsda fds fds</p>', '1710242167780_profile_icon.png', 'fsdafds', 'ACTIVE', '2024-02-27 05:27:18.569689', '2024-03-19 07:19:29.999819', 'fdsf,fsdfd,dsfafsd', 'fds fsd fd', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(56, 'fdsaf af', '<p>fsad fsf ds</p>', '<p>fs afds</p>', '<p>fs dffsdf</p>', '<p>fsa fsdf</p>', '1710242167780_profile_icon.png', 'fdsa fds', 'ACTIVE', '2024-02-27 05:29:22.491886', '2024-03-19 07:19:29.999819', 'fdsfdsf,,', 'fsd fdsf ', 'fds fdsfs', 'fsd fdsaf d', 'fds afds fd', 'fsda fsdf', 'fsd fsdafds', 'CONFIDENTIAL', '', '', ''),
(57, 'fds afsd ', '<p>fdsa fsd</p>', '<p>fsd fdsf </p>', '<p>fsd fsd fds</p>', '<p>fsd fdsf</p>', '1710242167780_profile_icon.png', 'teast', 'ACTIVE', '2024-02-27 05:55:22.526111', '2024-03-19 07:19:29.999819', 'test,teastds,adsfsdfds', 'fds fsd f', 'fsd fsd fds', 'fsda fsd', 'fasd fds f', 'fsad fdsf', 'fsda fds f', 'CONFIDENTIAL', '', '', ''),
(58, 'fdas fds', '<p>fdsa fds</p>', '<p>fdsa fd</p>', '<p>f safds</p>', '<p>fdas fds</p>', '1710242167780_profile_icon.png', 'tasfds', 'ACTIVE', '2024-02-27 05:57:04.370036', '2024-03-19 07:19:29.999819', 'tast,fsafd,fsdafdsaf', 'fdsa fds f', 'fsd fdsafd', 'fds fdsfd', 'fdsad fd', 'fds fds fd', 'fdsa fsdfs f', 'CONFIDENTIAL', '', '', ''),
(59, 'f afs f', '<p>fa fds</p>', '<p>fas fsd f</p>', '<p>fs dafds</p>', '<p>f afsfsd</p>', '1710242167780_profile_icon.png', 'fad fds f', 'ACTIVE', '2024-02-27 05:59:57.016898', '2024-03-19 07:19:29.999819', 'teat,teast,tesa', 'fa fsda f', 'f sdafsdfs', 'fa fds fd', 'fdsa fsdf', 'fsa fsfsd f', 'f sdaffd', 'CONFIDENTIAL', '', '', ''),
(60, 'fds fdsfds f', '<p>fsda fads</p>', '<p>fad fds</p>', '<p>fdsa f</p>', '<p>fds fsd</p>', '1710242167780_profile_icon.png', 'sdafds', 'ACTIVE', '2024-02-27 06:02:18.592356', '2024-03-19 07:19:29.999819', 'tea,fdsfds,fdsafds', 'fds fsd', 'fsd fsd', 'fds fsd', '', '', '', 'CONFIDENTIAL', '', '', ''),
(61, 'fsd fsd af', '<p>fsd fds f</p>', '<p>fds fsd f</p>', '<p>fsd fsdf </p>', '<p>f sdfsdf</p>', '1710242167780_profile_icon.png', 'f dsfds f', 'ACTIVE', '2024-02-27 06:03:47.918859', '2024-03-19 07:19:29.999819', 'teat,teatsdf,fdsa fds', 'fds fsd f', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(62, 'fads fds', '<p>fdsa fsd</p>', '<p>fdsa fds</p>', '<p>fds afds</p>', '<p>fdsa fds</p>', '1710242167780_profile_icon.png', 'fdsa fd', 'ACTIVE', '2024-02-27 06:15:05.761569', '2024-03-19 07:19:29.999819', 'tast,teasfd,fdsafds', 'fsd fds f', 'fsd fds fds', 'fdsa fds f', 'fdsa fds fd', 'fsda fdsa fds', 'fds afds f', 'CONFIDENTIAL', '', '', ''),
(63, 'das fds fd', '<p>fsd fds </p>', '<p>fasd fsd f</p>', '<p>fds fds f</p>', '<p>fds fds fd</p>', '1710242167780_profile_icon.png', 'fdsa fd', 'ACTIVE', '2024-02-27 06:16:30.421531', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(64, 'fsda fds afd', '<p>fds fds fd</p>', '<p>fds fds fds</p>', '<p>fsd fds fds</p>', '<p>f sfsfsd f</p>', '1710242167780_profile_icon.png', 'f sdf', 'ACTIVE', '2024-02-27 06:23:18.821529', '2024-03-19 07:19:29.999819', 'fdsa,fsdafds,fdsa', 'fds fds ', 'fdsf sdf', 'fds fsd', 'fsda fds', '', '', 'CONFIDENTIAL', '', '', ''),
(65, 'daf f fd', '<p>fds fds </p>', '<p>fds fd </p>', '<p>fds fds</p>', '<p>fsd fsd </p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 06:25:43.413116', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(66, 'fdsa fdsf', '<p>fsda fds f</p>', '<p>fdas fds fds </p>', '<p>fdsa fds fds f</p>', '<p>fs adfsd fdsff</p>', '1710242167780_profile_icon.png', 'fsda fds', 'ACTIVE', '2024-02-27 06:46:12.129001', '2024-03-19 07:19:29.999819', 'teasta,teast,teafsd', 'fds fds fds', 'fsda fds fds', 'fdsa fds fds', 'fsda fdsa fdsa ', 'fdsa fd fds fd', 'fdsa fds fdsf ds', 'CONFIDENTIAL', '', '', ''),
(67, 'fdsa f dsa ', '<p>fdsa fsda fds</p>', '<p>fdsa s fds</p>', '<p>fdsa fdsf sd</p>', '<p>fdsa fds fd</p>', '1710242167780_profile_icon.png', 'fdsa fds', 'ACTIVE', '2024-02-27 06:48:27.303472', '2024-03-19 07:19:29.999819', 'fdsaf ds,fdsa fd,fdsa fds', 'fsad fds ff', '', 'fdsa fds', 'fds afds f', 'fds fds f', 'fdsa fds fds', 'CONFIDENTIAL', '', '', ''),
(68, 'fdsa fds f', '<p>fdas fds f</p>', '<p>fsa fds </p>', '<p>f fds afds</p>', '<p>fdas fdafsdafsd</p>', '1710242167780_profile_icon.png', 'fdsa fd', 'ACTIVE', '2024-02-27 06:52:32.873045', '2024-03-19 07:19:29.999819', ',,', 'fdsa fdsf', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(69, 'fdsa fdsf ', '<p>fds fdsa</p>', '<p>f asfds fd</p>', '<p>f dsafds fdsf</p>', '<p>sda fdsfdsf</p>', '1710242167780_profile_icon.png', 'fdsa fd', 'ACTIVE', '2024-02-27 06:54:31.310914', '2024-03-19 07:19:29.999819', 'fsda fds,fdsa fds,', 'fds fds', 'fsd afdsf', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(70, 'fasdf sdf f', '<p>fsd afds f</p>', '<p>fsad fdsf</p>', '<p>fdsa fdsf</p>', '<p>fds fdsf</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 06:56:39.845920', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(71, 'fdsa fdsfa sd', '<p>fdsa fdsf</p>', '<p>fdsa fds </p>', '<p>fds afsd</p>', '<p>fds fdsafd</p>', '1710242167780_profile_icon.png', 'fdsafds', 'ACTIVE', '2024-02-27 06:58:43.555944', '2024-03-19 07:19:29.999819', 'teast,tesat,taste', 'fds fds fd', 'f sffds', 'fds fds f', 'fsd afds f', 'fdsa fds fd', 'fds afsdafd', 'CONFIDENTIAL', '', '', ''),
(72, 'fdas fds afd', '<p>fdsa fds fds</p>', '<p>fsda fds fds</p>', '<p>fdsa fdsa fds</p>', '<p>fdas fdsa fd</p>', '1710242167780_profile_icon.png', 'fdsaf dsf', 'ACTIVE', '2024-02-27 07:00:44.155853', '2024-03-19 07:19:29.999819', 'fdsafds,fdsaf asdff,fdsafds', 'fsda fds f', 'fdas fd fds', 'fdsa fds f', 'fdas fdsaf', '', '', 'CONFIDENTIAL', '', '', ''),
(73, 'fdsa dsfds f', '<p>fsad fsdfds</p>', '<p>fdas fdsa fd</p>', '<p>fsda fsda f</p>', '<p>fdas fdsff fds</p>', '1710242167780_profile_icon.png', 'dsasdfs', 'ACTIVE', '2024-02-27 07:04:13.803188', '2024-03-19 07:19:29.999819', 'tesat,tafdsf,fdsafdsa', 'fdsa fdsa f', 'fds fdsaf', 'fdsa fds ', 'fa fdsfds', 'fds fdsa f', 'fd safdsf', 'CONFIDENTIAL', '', '', ''),
(74, 'sda fsdaf', '<p>fsda fds f</p>', '<p>fsda fsdf</p>', '<p>fsda fdsf</p>', '<p>fsd fsdf</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 07:06:30.352441', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(75, 'fdas fdsa fds', '<p>fads fdsa fds</p>', '<p>fdsa fdsa fds</p>', '<p>fsda fsdaf sf</p>', '<p>fdsa fds afdsfsd</p>', '1710242167780_profile_icon.png', 'fds fds', 'ACTIVE', '2024-02-27 07:09:21.650901', '2024-03-19 07:19:29.999819', 'fdsaf,fdsafd,fsdafsd', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(76, 'fdsa fsd fsd', '<p>fads fsdf</p>', '<p>fsa fds f</p>', '<p>fds fsdafd</p>', '<p>fsda fdsfsdff</p>', '1710242167780_profile_icon.png', 'fsdafsdf', 'ACTIVE', '2024-02-27 07:12:13.664868', '2024-03-19 07:19:29.999819', 'fdasf,fdasf,fsdafds', 'fsda fds', 'fdsa fds', 'fds fsd', 'fsd fds', 'fdsa fds fds', 'fdsa fsda fds f', 'CONFIDENTIAL', '', '', ''),
(77, 'fdsa sadf', '<p>fds fsdaf</p>', '<p>fsda fsdaf</p>', '<p>fdsa fsd</p>', '<p>fds afsd</p>', '1710242167780_profile_icon.png', 'fsdfsdf', 'ACTIVE', '2024-02-27 07:17:11.467806', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(78, 'fsda fdasfd', '<p>fdsa fdsa</p>', '<p>fsad fdsf</p>', '<p>fdsa fdsa fds</p>', '<p>fdsa fsdfds</p>', '1710242167780_profile_icon.png', 'fdsafsd', 'ACTIVE', '2024-02-27 07:18:40.403207', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(79, 'fdsa ds', '<p>fdsa fds</p>', '<p>fsda fds</p>', '<p>fsda fds</p>', '<p>f fsdafds</p>', '1710242167780_profile_icon.png', 'fasfsd', 'ACTIVE', '2024-02-27 07:21:54.679200', '2024-03-19 07:19:29.999819', 'fdsads,fdsafds,fsdafsd', 'fdsa fdsa fds', 'fdsa fds', 'fasd fads', 'fdsa fds', 'fsda fds', 'fdsa fds', 'CONFIDENTIAL', '', '', ''),
(80, 'fdsa fdas', '<p>fdsa fd</p>', '<p>fsad fds</p>', '<p>f dasfdsf</p>', '<p>fdsafsdfds</p>', '1710242167780_profile_icon.png', 'teast', 'ACTIVE', '2024-02-27 07:23:56.985040', '2024-03-19 07:19:29.999819', 'dsfa,fdsafd,fdsafdsf', 'fdsa fds', 'fdsafsd', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(81, 'fsdafsdf', '<p>fasdfds</p>', '<p>fsdafds</p>', '<p>fdsafsd</p>', '<p>fasfdsafds</p>', '1710242167780_profile_icon.png', 'fdsafds', 'ACTIVE', '2024-02-27 07:25:19.898156', '2024-03-19 07:19:29.999819', 'teat,teat,fdsafds', 'fdasfds', 'fdsafds', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(82, 'fdsafds', '<p>fsdafds</p>', '<p>fsdafds</p>', '<p>fdsafds</p>', '<p>fsdafds</p>', '1710242167780_profile_icon.png', 'fdsafds', 'ACTIVE', '2024-02-27 07:26:43.408198', '2024-03-19 07:19:29.999819', 'fdsaf,fasdfds,fasdfds', 'fsdfsdaf', 'fdsafdsfds', 'fdsafds', '', '', '', 'CONFIDENTIAL', '', '', ''),
(83, 'fasd sfds f', '<p>fads fdsa fd</p>', '<p>fdsa fdsf</p>', '<p>fsda fsadf </p>', '<p>fsdaf sfsa</p>', '1710242167780_profile_icon.png', 'fasfds', 'ACTIVE', '2024-02-27 07:32:38.262404', '2024-03-19 07:19:29.999819', 'tsat,afsadf,fdsafsd', 'fdsa dsf f', 'fdsa sdf', 'fdsa fds', 'fasd fds', 'fdsa fsd', 'fsda fds', 'CONFIDENTIAL', '', '', ''),
(84, 'fsad sdf', '<p>fadsfds</p>', '<p>fsdafsd</p>', '<p>fdsaf fds</p>', '<p>fdas fds fds</p>', '1710242167780_profile_icon.png', 'fdsafa', 'ACTIVE', '2024-02-27 07:35:19.908518', '2024-03-19 07:19:29.999819', 'fdsa,fdsa,fadsff', 'fdsafds', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(85, 'fdsa dfs', '<p>fdsa sdf</p>', '<p>fdas fds</p>', '<p>fdsa fds</p>', '<p>fdsa fdsf</p>', '1710242167780_profile_icon.png', 'fsdafds', 'ACTIVE', '2024-02-27 07:37:04.503060', '2024-03-19 07:19:29.999819', 'fdasf,fdasf,fsdaf', 'fdas fdsa', 'fdas fds', 'fsda dsf', 'fdsa fds', '', '', 'CONFIDENTIAL', '', '', ''),
(86, 'fdsa dsaf', '<p>fasd fsd</p>', '<p>fda fd</p>', '<p>fas fds</p>', '<p>fas dfds</p>', '1710242167780_profile_icon.png', 'fdsafsd', 'ACTIVE', '2024-02-27 07:40:17.150563', '2024-03-19 07:19:29.999819', 'fdsa,fdasf,fdasfd', 'fdasfd', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(87, 'fdsaf sdf', '<p>fas fsd</p>', '<p>fa fsdf</p>', '<p>fa fds</p>', '<p>f afsfsd</p>', '1710242167780_profile_icon.png', 'fadsf', 'ACTIVE', '2024-02-27 07:43:12.837075', '2024-03-19 07:19:29.999819', 'fasd,fadsf,fadsfdf', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(88, 'fdasfsd', '<p>fdasfsd</p>', '<p>fdasfds</p>', '<p>fdsafds</p>', '<p>fsdafsdf</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 07:46:06.081545', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(89, 'fdsaf sf', '<p>fads fds</p>', '<p>f sadfds</p>', '<p>fdas fsd</p>', '<p>fdsa fds</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 07:48:16.890734', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(90, 'fsda dsf', '<p>fa fdsf ds</p>', '<p>fsa dfds</p>', '<p>fd safds</p>', '<p>fs fds</p>', '1710242167780_profile_icon.png', 'fsdafds', 'ACTIVE', '2024-02-27 08:04:19.538864', '2024-03-19 07:19:29.999819', 'fdsaf,fsdfasd,fdsfasd', 'fsdaf sd', 'fdsa fds', 'fsa fsdf', '', '', '', 'CONFIDENTIAL', '', '', ''),
(91, 'fdas sdf', '<p>fas fds</p>', '<p>fa fsdf</p>', '<p>fsa fds</p>', '<p>fas fds</p>', '1710242167780_profile_icon.png', 'fsdaf', 'ACTIVE', '2024-02-27 08:09:55.379573', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(92, 'fdsa fsdf', '<p>fdsa fds</p>', '<p>fdas fds</p>', '<p>fdsa fs</p>', '<p>fsda sdf</p>', '1710242167780_profile_icon.png', 'fdsafds', 'ACTIVE', '2024-02-27 08:14:21.902946', '2024-03-19 07:19:29.999819', 'fdsaf,fsdaf,fsafds', 'fdsa', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(93, 'fsdafds', '<p>fdsafds</p>', '<p>fdsafds</p>', '<p>fsdafds</p>', '<p>fsdafds</p>', '1710242167780_profile_icon.png', 'fdsa', 'ACTIVE', '2024-02-27 08:19:17.414241', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(94, 'dd', '<p>dd</p>', '<p>dd</p>', '<p>ddd</p>', '<p>dd</p>', '1710242167780_profile_icon.png', 'dd', 'ACTIVE', '2024-02-27 08:23:33.144990', '2024-03-19 07:19:29.999819', 'd,,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(95, 'gfdsgfd', '<p>gfdsgfd</p>', '<p>gfdsgfd</p>', '<p>gsdgfd</p>', '<p>gfsdgfd</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 08:27:06.659134', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(96, 'gfdsgfd', '<p>gdfsgfd</p>', '<p>gsfdgf</p>', '<p>gfdsgfd</p>', '<p>gdfsgfd</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 08:29:43.298965', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(97, 'fdsafds', '<p>fdsafds</p>', '<p>fsdfsdf</p>', '<p>fsdafds</p>', '<p>fsdafsdf</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 09:22:38.876640', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(98, 'gtsgfafa', '<p>fadsfsdfd</p>', '<p>fsadfsdf</p>', '<p>fdasfsdfds</p>', '<p>fdasfdsfd</p>', '1710242167780_profile_icon.png', 'fsdfsd', 'ACTIVE', '2024-02-27 09:27:50.696649', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(99, 'fdas sdf f', '<p>fas fsdf ds</p>', '<p>fads fsdf ds</p>', '<p>fdas fdsa fds fds</p>', '<p>dsadsdfsdfsd</p>', '1710242167780_profile_icon.png', 'fadsfds', 'ACTIVE', '2024-02-27 09:30:39.822849', '2024-03-19 07:19:29.999819', 'fdasf,fdas,fdasfsdf', 'fsafds fds', 'fasd fds fds', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(100, ' fasdf ds', '<p>fdsa fds fd</p>', '<p>fsda fds dfs</p>', '<p>fsda fds dfs</p>', '<p>fdas fds fd</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 09:35:20.625179', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(101, 'fa fdsaf dsaf', '<p>fa fds fdsf</p>', '<p>fdas fds ds</p>', '<p>fdas fds fds</p>', '<p>fads fdsa fdsa sdf</p>', '1710242167780_profile_icon.png', 'fdsafsd', 'ACTIVE', '2024-02-27 09:39:03.333201', '2024-03-19 07:19:29.999819', 'dsfasdfd,,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(102, 'fdasfds', '<p>fsdadsf</p>', '<p>fsdafdsf</p>', '<p>fsadfsda</p>', '<p>fdsafdsafds</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 09:43:13.081301', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(103, 'fdas fds fds', '<p>fasd fsd fds</p>', '<p>fasd fds fdsa</p>', '<p>fdas fds fds</p>', '<p>fdas fds fdsfd</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 09:45:21.638841', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(104, 'fdsa fsdf ds', '<p>fsd fds dsf</p>', '<p>fds afds fds</p>', '<p>f sdafdsfdf</p>', '<p>sd fsdfds</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 09:48:47.614380', '2024-03-19 07:19:29.999819', 'fdsafds,fsdafdsa,fdsafds', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(105, 'fasfsdf', '<p>fsdafds</p>', '<p>fdsafds</p>', '<p>fsdafdsf</p>', '<p>fdsafdsfds</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 09:55:30.187244', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(106, 'fsad fds fds', '<p>fa sdfs fds</p>', '<p>fsad fsd fds</p>', '<p>fs dafds fds</p>', '<p>fds fdsfd</p>', '1710242167780_profile_icon.png', 'dfdsafds', 'ACTIVE', '2024-02-27 10:00:27.850704', '2024-03-19 07:19:29.999819', 'fsdafds,fsdafds,fdsafdsf', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(107, 'fs afsdf', '<p>f afsdf ds</p>', '<p>fd afds </p>', '<p>fd sfsdfd</p>', '<p>fds fsdfds a</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 10:02:57.649131', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(108, 'fsdafs fds', '<p>fsda fds</p>', '<p>fa sfds</p>', '<p>fsad fds</p>', '<p>fsda fsd</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 10:10:41.403723', '2024-03-19 07:19:29.999819', 'fdsafds,fsdafds,fsdafds', 'dsafdsfds', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(109, 'fsdafs fds', '<p>fsda fds</p>', '<p>fa sfds</p>', '<p>fsad fds</p>', '<p>fsda fsd</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 10:12:01.798575', '2024-03-19 07:19:29.999819', 'fdsafds,fsdafds,fsdafds', 'dsafdsfds', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(110, 'fsda fsd ', '<p>fdsa fds </p>', '<p>fsa dfsd </p>', '<p>fs fsd f</p>', '<p>fsda fds </p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 10:15:18.988699', '2024-03-19 07:19:29.999819', 'fdsa,fds,fsad', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(111, 'fsda fsd fsa fsd', '<p>fdsa fds fsd fsd</p>', '<p>fsa dfsd fs af</p>', '<p>fs fsd ffsa fds</p>', '<p>fsda fds fds afds</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 10:17:02.500030', '2024-03-19 07:19:29.999819', 'fdsa,fds,fsad', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(112, 'gfds gfsd fdg', '<p>gs gfd gf</p>', '<p>gfs gdfs gfd</p>', '<p>g dfsgdf</p>', '<p>gf sgfd </p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 10:18:45.887402', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(113, 'fdsafs f', '<p>fsda fdsf</p>', '<p>fa fds</p>', '<p>f afds</p>', '<p>fsda fsd f</p>', '1710242167780_profile_icon.png', 'fsadfsd', 'ACTIVE', '2024-02-27 10:19:58.117253', '2024-03-19 07:19:29.999819', 'fdasfd,fdsaf,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(114, 'fdsa fds', '<p>f asfds</p>', '<p>fa fds</p>', '<p>fs afds</p>', '<p>f asdfdsa fds</p>', '1710242167780_profile_icon.png', 'fds afds', 'ACTIVE', '2024-02-27 10:21:13.434573', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(115, 'fsd fds f', '<p>fsad fdsa f</p>', '<p>fsa fsd</p>', '<p>f afsdf</p>', '<p>f safds</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-02-27 10:25:38.391737', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(116, 'teatesf', '<p>adsfsdf</p>', '<p>fasdfsdf</p>', '<p>fdsafadsf</p>', '<p>fdasfdsf</p>', '1710242167780_profile_icon.png', 'fdsafds', 'ACTIVE', '2024-02-27 10:27:57.063091', '2024-03-19 07:19:29.999819', 'tat,afsfd,fdasfdsf', 'fda fds fds', 'fdsaf fd af', 'fsdafdsf', 'fsadfds', 'fdsafsdaf', 'fsdafadsfds', 'CONFIDENTIAL', '', '', ''),
(117, 'vxzcvcx v', '<p>vz xvxcz vc</p>', '<p>vz vcxvcx</p>', '<p>vz vcx cxz</p>', '<p>v zvccv vxcz</p>', '1710242167780_profile_icon.png', 'vcxzvxc', 'ACTIVE', '2024-02-27 10:30:08.379625', '2024-03-19 07:19:29.999819', 'gdzg,gdz,gdz', 'cxz vxcv cxz', 'vz vxcvzcx', 'vxcz vcx', 'vxc zvcxz', 'vzxc vzcx', 'vzxvxvxc', 'CONFIDENTIAL', '', '', ''),
(118, 'fdas fsd fds', '<p>fa sfsdaf </p>', '<p>f safasdf</p>', '<p>fsa fasfsda</p>', '<p>f afsd fds</p>', '1710242167780_profile_icon.png', 'fdsafsd', 'ACTIVE', '2024-02-27 10:37:22.692036', '2024-03-19 07:19:29.999819', 'tea,fsdaf,fdsafs', 'f fsdaf sd', 'fds dsff', 'f sfsdfsad', 'f fsdaf', 'a fsfsd', 'f afsdf', 'CONFIDENTIAL', '', '', ''),
(119, 'fdsa fadsf', '<p>fsda fds</p>', '<p>f asfds</p>', '<p>fsda fds</p>', '<p>fds afsda</p>', '1710242167780_profile_icon.png', 'fdsafds', 'ACTIVE', '2024-02-27 10:38:51.513692', '2024-03-19 07:19:29.999819', 'teasfd,fdsaf,fdasfd', 'fa fdsf', 'fdsa fds', 'fda fdsf', 'f afdsa', 'fsda fsd', 'fa fads', 'CONFIDENTIAL', '', '', ''),
(120, 'f asfsad', '<p>fa fds</p>', '<p>fdas fads</p>', '<p>f afds</p>', '<p>fa fds</p>', '1710242167780_profile_icon.png', 'fsda fsf', 'ACTIVE', '2024-02-27 10:41:08.603501', '2024-03-19 07:19:29.999819', 'teas,fasdf,fdasfds', 'fas fasd', 'fas fadsfds', 'fdsa fdas df', 'fda fadsf', 'fa fasdf', 'fda fads', 'CONFIDENTIAL', '', '', ''),
(121, 'fsad fsd', '<p>f asfds</p>', '<p>fasd fds</p>', '<p>f afds</p>', '<p>fas fsadf</p>', '1710242167780_profile_icon.png', 'fdsafds', 'ACTIVE', '2024-02-27 10:55:54.232940', '2024-03-19 07:19:29.999819', 'tea,teat,fdsafsd', 'fsd fd', 'fsda fds', 'fsa fds', 'fsd fdsfds', 'f afdsfffasd fsd', 'fsad fds', 'CONFIDENTIAL', '', '', ''),
(122, 'fsdf sfsd f', '<p>fa sfdsf dsf</p>', '<p>f safsfsd</p>', '<p>fsda fds sdf</p>', '<p>fds afds fds</p>', '1710242167780_profile_icon.png', 'fdsafds', 'ACTIVE', '2024-02-27 11:01:20.805353', '2024-03-19 07:19:29.999819', 'fsdafds,fsdaf,fdsafdsf', 'fsdafds', 'fsdafsdf', 'fsdafasdf', 'fsdfdsafds', 'fsdafdsafsd', 'fsdafasdf', 'CONFIDENTIAL', '', '', ''),
(123, 'fsdafdsfds', '<p>fsdafdsfds</p>', '<p>fsdaf fsdaf</p>', '<p>fsd afsdf</p>', '<p>fsda fds fds</p>', '1710242167780_profile_icon.png', 'fdsafd', 'ACTIVE', '2024-02-27 11:04:11.683993', '2024-03-19 07:19:29.999819', 'fdsafs,fdsaf,fadsfdsf', 'fsadfsdafds', 'fsdafdsaf', 'fadsfdsaf', 'fsdafdsf', 'fsdafds', 'fasfdsaf', 'CONFIDENTIAL', '', '', ''),
(124, 'fdsa fdsaf', '<p>fdsa fds fd</p>', '<p>fdsa fds</p>', '<p>fdsa fdsa fds</p>', '<p>f afdsafds</p>', '1710242167780_profile_icon.png', 'fdsafdsf', 'ACTIVE', '2024-02-27 11:45:12.038382', '2024-03-19 07:19:29.999819', 'fdasf,fdsafds,fdsafds', 'fdsaf sdf', 'fsdafds', 'fsdafdsa', 'fasfdsaf', 'fdsafdsa', 'fdsafdas', 'CONFIDENTIAL', '', '', ''),
(125, 'fsda fsdf', '<p>fsa fds f</p>', '<p>fds fsd</p>', '<p>fd assadf</p>', '<p>fdas fds </p>', '1710242167780_profile_icon.png', 'teasfds', 'ACTIVE', '2024-02-27 12:01:33.952242', '2024-03-19 07:19:29.999819', 'teast,teast,tsae', 'fdsaf sfda', 'fasd fsdfds', 'fdsasdfasd f', 'f afdsfdsf', 'fsad asd', 'fdsa fsda', 'CONFIDENTIAL', '', '', ''),
(126, 'fdsaf fds', '<p>fsad fdsa sd</p>', '<p>fdsa sfd</p>', '<p>fsda fdsa</p>', '<p>fsda asdfsd</p>', '1710242167780_profile_icon.png', 'fdsafds', 'ACTIVE', '2024-02-27 12:03:20.274632', '2024-03-19 07:19:29.999819', ',,', '', '', 'fsadfds', 'fdafdsaf', '', '', 'CONFIDENTIAL', '', '', ''),
(128, 'fdsafds fsd', '<p>fdsa fads</p>', '<p>fads fsd</p>', '<p>fdas fds</p>', '<p>fdsa fds</p>', '1710242167780_profile_icon.png', 'fdsafsd', 'ACTIVE', '2024-02-27 12:11:23.502336', '2024-03-19 07:19:29.999819', 'fdasf,teafdsafdsfsd,teaa', 'dsfsdf', 'fsdafds', 'fasdfsdf', 'fsdafdsa', 'fasfsd', 'fadsfdsa', 'CONFIDENTIAL', '', '', ''),
(133, 'sdafs f', '<p>fsd fsd</p>', '<p>fds fd</p>', '<p>fsda fds</p>', '<p>fsda fasdf</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-03-12 11:11:51.173666', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(134, 'fsd sdf', '<p>fds fds f</p>', '<p>fds fsd fds</p>', '<p>fds fsdf</p>', '<p>fsd fsdfsdf</p>', '1710242167780_profile_icon.png', 'teat', 'ACTIVE', '2024-03-12 11:16:07.829885', '2024-03-19 07:19:29.999819', 'test,test,test', 'fsd fsa f', 'fds fds sdf', 'fsd fasd fs', 'fds fsd fds', 'fsda fsd f', 'fds fds fd', 'CONFIDENTIAL', '', '', ''),
(135, 'fsdf asf', '<p>fas fds</p>', '<p>f afds</p>', '<p>f afds</p>', '<p>fds fds</p>', '1710242167780_profile_icon.png', '', 'ACTIVE', '2024-03-12 11:20:12.888898', '2024-03-19 07:19:29.999819', ',,', '', '', '', '', '', '', 'CONFIDENTIAL', '', '', ''),
(137, 'fdsaf f', '<p>fds sfda f</p>', '<p>fda fafd</p>', '<p>fdsa fds</p>', '<p>fdsf dsf</p>', '1710242167780_profile_icon.png', 'test', 'ACTIVE', '2024-03-13 09:00:50.729997', '2024-03-19 07:19:29.999819', 'test,test,test', 'fdsaf sdfds', 'fdsa fdsfd', 'fdsa fds f', 'fdasfd f', 'fds afds', 'fda fdsa', 'CONFIDENTIAL', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `asset_asset_types`
--

CREATE TABLE `asset_asset_types` (
  `id` int(11) NOT NULL,
  `asset_id` int(11) DEFAULT NULL,
  `asset_type_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asset_asset_types`
--

INSERT INTO `asset_asset_types` (`id`, `asset_id`, `asset_type_id`) VALUES
(2, 8, 1),
(3, 8, 2),
(6, 10, 1),
(7, 10, 2),
(8, 11, 1),
(9, 11, 2),
(10, 12, 1),
(11, 12, 2),
(12, 13, 1),
(13, 13, 2),
(16, 15, 1),
(17, 15, 2),
(18, 16, 1),
(19, 16, 2),
(24, 19, 1),
(25, 20, 1),
(30, 25, 1),
(31, 25, 2),
(36, 28, 1),
(37, 28, 2),
(43, 32, 2),
(44, 33, 2),
(45, 34, 2),
(46, 35, 2),
(47, 36, 2),
(48, 37, 2),
(49, 38, 2),
(50, 39, 2),
(51, 40, 2),
(53, 42, 3),
(54, 43, 2),
(55, 44, 2),
(56, 45, 1),
(57, 46, 2),
(58, 47, 2),
(59, 48, 2),
(60, 49, 2),
(61, 50, 4),
(63, 52, 3),
(64, 53, 2),
(65, 54, 2),
(66, 55, 2),
(67, 56, 2),
(68, 57, 2),
(69, 58, 1),
(70, 59, 2),
(71, 60, 2),
(72, 61, 2),
(73, 62, 2),
(74, 63, 2),
(75, 64, 2),
(76, 65, 1),
(77, 66, 2),
(78, 67, 2),
(79, 68, 1),
(80, 69, 2),
(81, 70, 2),
(82, 71, 2),
(83, 72, 1),
(84, 73, 2),
(85, 74, 2),
(86, 75, 2),
(87, 76, 2),
(88, 77, 2),
(89, 78, 2),
(90, 79, 2),
(91, 80, 3),
(92, 81, 3),
(93, 82, 3),
(94, 83, 3),
(95, 84, 2),
(96, 85, 3),
(97, 86, 3),
(98, 87, 1),
(99, 88, 2),
(100, 89, 2),
(101, 90, 1),
(102, 91, 1),
(103, 92, 3),
(104, 93, 2),
(105, 94, 1),
(106, 95, 1),
(107, 96, 1),
(108, 97, 1),
(109, 98, 2),
(110, 99, 1),
(111, 100, 1),
(112, 101, 2),
(113, 102, 2),
(114, 103, 2),
(115, 104, 2),
(116, 105, 2),
(117, 106, 2),
(118, 107, 2),
(119, 108, 2),
(120, 109, 1),
(121, 110, 1),
(122, 111, 1),
(123, 112, 1),
(124, 113, 1),
(125, 114, 1),
(126, 115, 1),
(127, 116, 1),
(128, 117, 1),
(129, 118, 1),
(130, 119, 1),
(131, 120, 1),
(132, 121, 1),
(133, 122, 1),
(134, 123, 1),
(135, 124, 4),
(136, 125, 1),
(137, 126, 1),
(139, 128, 1),
(145, 133, 3),
(146, 134, 1),
(147, 135, 1),
(149, 137, 1);

-- --------------------------------------------------------

--
-- Table structure for table `asset_businesses`
--

CREATE TABLE `asset_businesses` (
  `id` int(11) NOT NULL,
  `asset_id` int(11) DEFAULT NULL,
  `business_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asset_businesses`
--

INSERT INTO `asset_businesses` (`id`, `asset_id`, `business_id`) VALUES
(1, 8, 1),
(2, 8, 2),
(5, 10, 1),
(6, 10, 2),
(7, 11, 1),
(8, 11, 2),
(9, 12, 1),
(10, 12, 2),
(11, 13, 1),
(12, 13, 2),
(15, 15, 1),
(16, 15, 2),
(17, 16, 1),
(18, 16, 2),
(23, 19, 1),
(24, 20, 1),
(29, 25, 1),
(30, 25, 2),
(35, 28, 1),
(36, 28, 2),
(42, 32, 1),
(43, 33, 1),
(44, 34, 1),
(45, 35, 2),
(46, 36, 2),
(47, 37, 3),
(48, 38, 3),
(49, 39, 2),
(50, 40, 2),
(52, 42, 2),
(53, 43, 2),
(54, 44, 1),
(55, 45, 2),
(56, 46, 1),
(57, 47, 1),
(58, 48, 2),
(59, 49, 2),
(60, 50, 4),
(62, 52, 4),
(63, 53, 2),
(64, 54, 3),
(65, 55, 2),
(66, 56, 2),
(67, 57, 2),
(68, 58, 2),
(69, 59, 2),
(70, 60, 2),
(71, 61, 1),
(72, 62, 2),
(73, 63, 2),
(74, 64, 2),
(75, 65, 2),
(76, 66, 3),
(77, 67, 2),
(78, 68, 2),
(79, 69, 3),
(80, 70, 3),
(81, 71, 1),
(82, 72, 2),
(83, 73, 2),
(84, 74, 2),
(85, 75, 2),
(86, 76, 2),
(87, 77, 2),
(88, 78, 2),
(89, 79, 2),
(90, 80, 1),
(91, 81, 1),
(92, 82, 1),
(93, 83, 2),
(94, 84, 3),
(95, 85, 2),
(96, 86, 1),
(97, 87, 3),
(98, 88, 2),
(99, 89, 2),
(100, 90, 2),
(101, 91, 4),
(102, 92, 3),
(103, 93, 1),
(104, 94, 3),
(105, 95, 2),
(106, 96, 1),
(107, 97, 1),
(108, 98, 2),
(109, 99, 2),
(110, 100, 2),
(111, 101, 2),
(112, 102, 1),
(113, 103, 2),
(114, 104, 1),
(115, 105, 2),
(116, 106, 2),
(117, 107, 2),
(118, 108, 3),
(119, 109, 1),
(120, 109, 2),
(121, 110, 1),
(122, 111, 1),
(123, 112, 1),
(124, 113, 1),
(125, 114, 1),
(126, 115, 1),
(127, 116, 1),
(128, 117, 1),
(129, 118, 1),
(130, 119, 1),
(131, 120, 1),
(132, 121, 1),
(133, 122, 1),
(134, 123, 1),
(135, 124, 1),
(136, 125, 1),
(137, 126, 1),
(139, 128, 1),
(144, 133, 2),
(145, 134, 1),
(146, 135, 1),
(148, 137, 1);

-- --------------------------------------------------------

--
-- Table structure for table `asset_files`
--

CREATE TABLE `asset_files` (
  `id` int(11) NOT NULL,
  `asset_id` int(11) DEFAULT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asset_files`
--

INSERT INTO `asset_files` (`id`, `asset_id`, `file`) VALUES
(5, 6, '1707726712279_Screenshot 2024-01-31 162610.png'),
(6, 6, '1707726712273_Screenshot 2024-01-31 162723.png'),
(9, 8, '1707727791554_Screenshot 2024-01-31 162610.png'),
(10, 8, '1707727791553_Screenshot 2024-01-31 162723.png'),
(13, 10, '1707988732927_Screenshot 2024-01-31 162610.png'),
(14, 10, '1707988732927_Screenshot 2024-01-31 162723.png'),
(15, 11, '1707988767884_Screenshot 2024-01-31 162610.png'),
(16, 11, '1707988767876_Screenshot 2024-01-31 162723.png'),
(17, 12, '1707988812055_Screenshot 2024-01-31 162610.png'),
(18, 12, '1707988812070_Screenshot 2024-01-31 162723.png'),
(19, 13, '1707988843928_Screenshot 2024-01-31 162610.png'),
(20, 13, '1707988843928_Screenshot 2024-01-31 162723.png'),
(23, 15, '1708590783058_Screenshot 2024-01-31 162610.png'),
(24, 15, '1708590783059_Screenshot 2024-01-31 162723.png'),
(25, 16, '1708590799326_Screenshot 2024-01-31 162610.png'),
(26, 16, '1708590799324_Screenshot 2024-01-31 162723.png'),
(31, 19, '1708675127027_Ethics_Toolkit_en.pdf'),
(32, 19, '1708675127057_Capgemini_CBE_en.pdf'),
(33, 20, '1708680599337_Ethics_Toolkit_en (2).pdf'),
(34, 20, '1708680599335_POPSH_M03_007.pdf'),
(43, 25, '1708946763950_Screenshot 2024-01-31 162610.png'),
(44, 25, '1708946763950_Screenshot 2024-01-31 162723.png'),
(49, 28, '1708948143895_Screenshot 2024-01-31 162610.png'),
(50, 28, '1708948143904_Screenshot 2024-01-31 162723.png'),
(57, 32, '1708949035926_188140629.pdf'),
(58, 32, '1708949035918_HGS Process Documentation.pdf'),
(59, 33, '1708949191411_Ethics_Toolkit_en.pdf'),
(60, 33, '1708949191426_Capgemini_CBE_en.pdf'),
(61, 34, '1708949369010_banner.jpg'),
(62, 35, '1708949439776_banner.jpg'),
(63, 36, '1708949649819_banner.jpg'),
(64, 37, '1708949988014_banner.jpg'),
(65, 38, '1708950338902_banner.jpg'),
(66, 39, '1708950555651_banner.jpg'),
(67, 40, '1708950903916_banner.jpg'),
(69, 42, '1708951955689_banner.jpg'),
(70, 43, '1708952488638_banner.jpg'),
(71, 44, '1708952774855_banner.jpg'),
(72, 45, '1708953016623_banner.jpg'),
(73, 46, '1708953317921_banner.jpg'),
(74, 47, '1708953478228_banner.jpg'),
(75, 48, '1708953651062_banner.jpg'),
(76, 49, '1708954154658_banner.jpg'),
(77, 50, '1708954312559_banner.jpg'),
(79, 52, '1709010868554_banner.jpg'),
(80, 53, '1709011048817_banner.jpg'),
(81, 54, '1709011148940_banner.jpg'),
(82, 55, '1709011638601_banner.jpg'),
(83, 56, '1709011762532_banner.jpg'),
(84, 57, '1709013322558_banner.jpg'),
(85, 58, '1709013424396_banner.jpg'),
(86, 59, '1709013597047_banner.jpg'),
(87, 60, '1709013738627_banner.jpg'),
(88, 61, '1709013827949_banner.jpg'),
(89, 62, '1709014505783_banner.jpg'),
(90, 63, '1709014590443_banner.jpg'),
(91, 64, '1709014998852_banner.jpg'),
(92, 65, '1709015143444_banner.jpg'),
(93, 66, '1709016372187_banner.jpg'),
(94, 67, '1709016507349_banner.jpg'),
(95, 68, '1709016752902_banner.jpg'),
(96, 69, '1709016871336_banner.jpg'),
(97, 70, '1709016999874_banner.jpg'),
(98, 71, '1709017123610_banner.jpg'),
(99, 72, '1709017244191_banner.jpg'),
(100, 73, '1709017453874_banner.jpg'),
(101, 74, '1709017590375_banner.jpg'),
(102, 75, '1709017761689_banner.jpg'),
(103, 76, '1709017933704_banner.jpg'),
(104, 77, '1709018231500_banner.jpg'),
(105, 78, '1709018320432_banner.jpg'),
(106, 79, '1709018514701_banner.jpg'),
(107, 80, '1709018637018_banner.jpg'),
(108, 81, '1709018719926_banner.jpg'),
(109, 82, '1709018803437_banner.jpg'),
(110, 83, '1709019158298_banner.jpg'),
(111, 84, '1709019319937_banner.jpg'),
(112, 85, '1709019424537_banner.jpg'),
(113, 86, '1709019617176_banner.jpg'),
(114, 87, '1709019792856_banner.jpg'),
(115, 88, '1709019966105_banner.jpg'),
(116, 89, '1709020096919_banner.jpg'),
(117, 90, '1709021059614_banner.jpg'),
(118, 91, '1709021395415_banner.jpg'),
(119, 92, '1709021661952_banner.jpg'),
(120, 93, '1709021957448_banner.jpg'),
(121, 94, '1709022213175_banner.jpg'),
(122, 95, '1709022426699_banner.jpg'),
(123, 96, '1709022583316_banner.jpg'),
(124, 97, '1709025758920_banner.jpg'),
(125, 98, '1709026070729_banner.jpg'),
(126, 99, '1709026239844_banner.jpg'),
(127, 100, '1709026520664_banner.jpg'),
(128, 101, '1709026743369_banner.jpg'),
(129, 102, '1709026993106_banner.jpg'),
(130, 103, '1709027121687_banner.jpg'),
(131, 104, '1709027327633_banner.jpg'),
(132, 105, '1709027730206_banner.jpg'),
(133, 106, '1709028027911_banner.jpg'),
(134, 107, '1709028177683_banner.jpg'),
(135, 108, '1709028641424_banner.jpg'),
(136, 109, '1709028721856_banner.jpg'),
(137, 110, '1709028919061_banner.jpg'),
(138, 111, '1709029022580_banner.jpg'),
(139, 112, '1709029125934_banner.jpg'),
(140, 113, '1709029198139_banner.jpg'),
(141, 114, '1709029273459_banner.jpg'),
(142, 115, '1709029538418_banner.jpg'),
(143, 116, '1709029677085_banner.jpg'),
(144, 117, '1709029808404_banner.jpg'),
(145, 118, '1709030242729_banner.jpg'),
(146, 119, '1709030331541_banner.jpg'),
(147, 120, '1709030468652_banner.jpg'),
(148, 121, '1709031354271_banner.jpg'),
(149, 122, '1709031680842_banner.jpg'),
(150, 123, '1709031851717_banner.jpg'),
(151, 124, '1709034312062_banner.jpg'),
(152, 125, '1709035293993_banner.jpg'),
(153, 126, '1709035400316_Social_Media_Code_of_Conduct.pdf'),
(155, 128, '1709035883551_banner.jpg'),
(161, 133, '1710241911279_profile_icon.png'),
(162, 134, '1710242167857_profile_icon.png'),
(163, 135, '1710242412931_profile_icon.png'),
(165, 137, '1710320450836_LoginPage (1).js');

-- --------------------------------------------------------

--
-- Table structure for table `asset_groups`
--

CREATE TABLE `asset_groups` (
  `id` int(11) NOT NULL,
  `asset_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asset_groups`
--

INSERT INTO `asset_groups` (`id`, `asset_id`, `group_id`) VALUES
(3, 8, 1),
(4, 8, 2),
(7, 10, 1),
(8, 10, 2),
(9, 11, 1),
(10, 11, 2),
(11, 12, 1),
(12, 12, 2),
(13, 13, 1),
(14, 13, 2),
(17, 15, 1),
(18, 15, 2),
(19, 16, 1),
(20, 16, 2),
(25, 19, 1),
(26, 20, 1),
(31, 25, 1),
(32, 25, 2),
(37, 28, 1),
(38, 28, 2),
(44, 32, 3),
(45, 33, 3),
(46, 34, 2),
(47, 34, 3),
(48, 35, 2),
(49, 36, 1),
(50, 37, 3),
(51, 38, 2),
(52, 38, 3),
(53, 39, 2),
(54, 40, 2),
(56, 42, 2),
(57, 43, 1),
(58, 44, 2),
(59, 45, 2),
(60, 46, 1),
(61, 47, 3),
(62, 48, 2),
(63, 49, 1),
(64, 50, 1),
(66, 52, 3),
(67, 53, 2),
(68, 54, 2),
(69, 55, 2),
(70, 56, 2),
(71, 57, 2),
(72, 58, 2),
(73, 59, 2),
(74, 60, 1),
(75, 60, 2),
(76, 61, 2),
(77, 62, 2),
(78, 63, 2),
(79, 64, 2),
(80, 65, 2),
(81, 66, 2),
(82, 67, 2),
(83, 68, 2),
(84, 69, 3),
(85, 70, 3),
(86, 71, 2),
(87, 72, 2),
(88, 73, 1),
(89, 74, 2),
(90, 75, 2),
(91, 76, 2),
(92, 77, 1),
(93, 78, 2),
(94, 79, 2),
(95, 79, 3),
(96, 80, 3),
(97, 81, 3),
(98, 82, 3),
(99, 83, 2),
(100, 84, 2),
(101, 85, 2),
(102, 86, 3),
(103, 87, 3),
(104, 88, 3),
(105, 89, 3),
(106, 90, 3),
(107, 91, 3),
(108, 92, 3),
(109, 93, 1),
(110, 94, 2),
(111, 95, 2),
(112, 96, 2),
(113, 97, 1),
(114, 98, 2),
(115, 99, 2),
(116, 100, 2),
(117, 101, 2),
(118, 102, 2),
(119, 103, 2),
(120, 104, 2),
(121, 105, 2),
(122, 106, 2),
(123, 107, 2),
(124, 108, 2),
(125, 109, 1),
(126, 110, 1),
(127, 111, 1),
(128, 112, 1),
(129, 113, 1),
(130, 114, 1),
(131, 115, 1),
(132, 116, 1),
(133, 117, 1),
(134, 118, 1),
(135, 119, 1),
(136, 120, 1),
(137, 121, 1),
(138, 122, 1),
(139, 123, 1),
(140, 124, 3),
(141, 125, 1),
(142, 126, 1),
(144, 128, 1),
(151, 133, 1),
(152, 134, 1),
(153, 135, 1),
(155, 137, 2);

-- --------------------------------------------------------

--
-- Table structure for table `asset_portfolios`
--

CREATE TABLE `asset_portfolios` (
  `id` int(11) NOT NULL,
  `asset_id` int(11) DEFAULT NULL,
  `portfolio_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asset_portfolios`
--

INSERT INTO `asset_portfolios` (`id`, `asset_id`, `portfolio_id`) VALUES
(1, 8, 1),
(2, 8, 2),
(5, 10, 1),
(6, 10, 2),
(7, 11, 1),
(8, 11, 2),
(9, 12, 1),
(10, 12, 2),
(11, 13, 1),
(12, 13, 2),
(15, 15, 1),
(16, 15, 2),
(17, 16, 1),
(18, 16, 2),
(23, 19, 1),
(24, 19, 2),
(25, 20, 1),
(26, 20, 2),
(32, 25, 1),
(33, 25, 2),
(38, 28, 1),
(39, 28, 2),
(45, 32, 2),
(46, 33, 1),
(47, 34, 2),
(48, 35, 1),
(49, 35, 2),
(50, 36, 2),
(51, 37, 3),
(52, 38, 3),
(53, 39, 1),
(54, 40, 1),
(56, 42, 2),
(57, 43, 1),
(58, 44, 2),
(59, 45, 2),
(60, 46, 1),
(61, 47, 2),
(62, 48, 2),
(63, 49, 1),
(64, 50, 1),
(66, 52, 3),
(67, 53, 2),
(68, 54, 2),
(69, 55, 2),
(70, 56, 3),
(71, 57, 2),
(72, 58, 2),
(73, 59, 2),
(74, 60, 1),
(75, 60, 2),
(76, 60, 3),
(77, 61, 2),
(78, 62, 2),
(79, 63, 2),
(80, 64, 2),
(81, 65, 2),
(82, 66, 2),
(83, 67, 2),
(84, 68, 3),
(85, 69, 3),
(86, 70, 2),
(87, 71, 3),
(88, 72, 2),
(89, 73, 1),
(90, 74, 2),
(91, 75, 2),
(92, 76, 2),
(93, 77, 1),
(94, 78, 2),
(95, 79, 2),
(96, 79, 3),
(97, 80, 3),
(98, 81, 4),
(99, 82, 3),
(100, 83, 2),
(101, 84, 2),
(102, 85, 2),
(103, 86, 2),
(104, 87, 3),
(105, 88, 3),
(106, 89, 3),
(107, 90, 3),
(108, 91, 4),
(109, 92, 3),
(110, 93, 1),
(111, 94, 2),
(112, 95, 3),
(113, 96, 3),
(114, 97, 2),
(115, 98, 2),
(116, 99, 2),
(117, 100, 2),
(118, 101, 2),
(119, 102, 2),
(120, 103, 2),
(121, 104, 2),
(122, 105, 2),
(123, 106, 2),
(124, 107, 2),
(125, 108, 2),
(126, 109, 1),
(127, 110, 1),
(128, 111, 2),
(129, 112, 1),
(130, 113, 1),
(131, 114, 1),
(132, 115, 1),
(133, 116, 2),
(134, 117, 1),
(135, 118, 1),
(136, 119, 1),
(137, 120, 2),
(138, 121, 1),
(139, 122, 1),
(140, 123, 1),
(141, 124, 2),
(142, 125, 1),
(143, 126, 1),
(145, 128, 1),
(152, 133, 1),
(153, 134, 1),
(154, 135, 2),
(156, 137, 1);

-- --------------------------------------------------------

--
-- Table structure for table `asset_sectors`
--

CREATE TABLE `asset_sectors` (
  `id` int(11) NOT NULL,
  `asset_id` int(11) DEFAULT NULL,
  `sector_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asset_sectors`
--

INSERT INTO `asset_sectors` (`id`, `asset_id`, `sector_id`) VALUES
(1, 8, 1),
(2, 8, 2),
(5, 10, 1),
(6, 10, 2),
(7, 11, 1),
(8, 11, 2),
(9, 12, 1),
(10, 12, 2),
(11, 13, 1),
(12, 13, 2),
(15, 15, 1),
(16, 15, 2),
(17, 16, 1),
(18, 16, 2),
(23, 19, 1),
(24, 20, 1),
(29, 25, 1),
(30, 25, 2),
(35, 28, 1),
(36, 28, 2),
(42, 32, 1),
(43, 33, 1),
(44, 34, 1),
(45, 35, 2),
(46, 36, 2),
(47, 37, 3),
(48, 38, 3),
(49, 39, 2),
(50, 40, 2),
(52, 42, 2),
(53, 43, 2),
(54, 44, 1),
(55, 45, 2),
(56, 46, 1),
(57, 47, 1),
(58, 48, 2),
(59, 49, 2),
(60, 50, 4),
(62, 52, 4),
(63, 53, 2),
(64, 54, 3),
(65, 55, 2),
(66, 56, 2),
(67, 57, 2),
(68, 58, 2),
(69, 59, 2),
(70, 60, 2),
(71, 61, 1),
(72, 62, 2),
(73, 63, 2),
(74, 64, 2),
(75, 65, 2),
(76, 66, 3),
(77, 67, 2),
(78, 68, 2),
(79, 69, 3),
(80, 70, 3),
(81, 71, 1),
(82, 72, 2),
(83, 73, 2),
(84, 74, 2),
(85, 75, 2),
(86, 76, 2),
(87, 77, 2),
(88, 78, 2),
(89, 79, 2),
(90, 80, 1),
(91, 81, 1),
(92, 82, 1),
(93, 83, 2),
(94, 84, 3),
(95, 85, 2),
(96, 86, 1),
(97, 87, 3),
(98, 88, 2),
(99, 89, 2),
(100, 90, 2),
(101, 91, 4),
(102, 92, 3),
(103, 93, 1),
(104, 94, 3),
(105, 95, 2),
(106, 96, 1),
(107, 97, 1),
(108, 98, 2),
(109, 99, 2),
(110, 100, 2),
(111, 101, 2),
(112, 102, 1),
(113, 103, 2),
(114, 104, 1),
(115, 105, 2),
(116, 106, 2),
(117, 107, 2),
(118, 108, 3),
(119, 109, 1),
(120, 109, 2),
(121, 110, 1),
(122, 111, 1),
(123, 112, 1),
(124, 113, 1),
(125, 114, 1),
(126, 115, 1),
(127, 116, 1),
(128, 117, 1),
(129, 118, 1),
(130, 119, 1),
(131, 120, 1),
(132, 121, 1),
(133, 122, 1),
(134, 123, 1),
(135, 124, 1),
(136, 125, 1),
(137, 126, 1),
(139, 128, 1),
(144, 133, 2),
(145, 134, 1),
(146, 135, 1),
(148, 137, 1);

-- --------------------------------------------------------

--
-- Table structure for table `asset_technologies`
--

CREATE TABLE `asset_technologies` (
  `id` int(11) NOT NULL,
  `asset_id` int(11) DEFAULT NULL,
  `technology_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asset_technologies`
--

INSERT INTO `asset_technologies` (`id`, `asset_id`, `technology_id`) VALUES
(1, 8, 1),
(2, 8, 2),
(5, 10, 1),
(6, 10, 2),
(7, 11, 1),
(8, 11, 2),
(9, 12, 1),
(10, 12, 2),
(11, 13, 1),
(12, 13, 2),
(15, 15, 1),
(16, 15, 2),
(17, 16, 1),
(18, 16, 2),
(23, 19, 1),
(24, 20, 1),
(29, 25, 1),
(30, 25, 2),
(35, 28, 1),
(36, 28, 2),
(42, 32, 1),
(43, 33, 1),
(44, 34, 1),
(45, 35, 2),
(46, 36, 2),
(47, 37, 3),
(48, 38, 3),
(49, 39, 3),
(50, 40, 3),
(52, 42, 2),
(53, 43, 2),
(54, 44, 1),
(55, 45, 2),
(56, 46, 2),
(57, 47, 2),
(58, 48, 2),
(59, 49, 2),
(60, 50, 4),
(62, 52, 4),
(63, 53, 2),
(64, 54, 3),
(65, 55, 2),
(66, 56, 2),
(67, 57, 2),
(68, 58, 2),
(69, 59, 2),
(70, 60, 1),
(71, 60, 2),
(72, 61, 1),
(73, 62, 2),
(74, 63, 2),
(75, 64, 2),
(76, 65, 2),
(77, 66, 3),
(78, 67, 2),
(79, 68, 2),
(80, 69, 2),
(81, 70, 2),
(82, 71, 1),
(83, 72, 2),
(84, 73, 2),
(85, 74, 2),
(86, 75, 2),
(87, 76, 2),
(88, 77, 3),
(89, 78, 2),
(90, 79, 2),
(91, 80, 3),
(92, 81, 1),
(93, 82, 1),
(94, 83, 2),
(95, 84, 3),
(96, 85, 2),
(97, 86, 1),
(98, 87, 2),
(99, 88, 2),
(100, 89, 2),
(101, 90, 2),
(102, 91, 4),
(103, 92, 3),
(104, 93, 2),
(105, 94, 3),
(106, 95, 2),
(107, 96, 2),
(108, 97, 2),
(109, 98, 2),
(110, 99, 2),
(111, 100, 2),
(112, 101, 2),
(113, 102, 1),
(114, 103, 2),
(115, 104, 1),
(116, 105, 2),
(117, 106, 2),
(118, 107, 2),
(119, 108, 3),
(120, 109, 1),
(121, 110, 1),
(122, 111, 1),
(123, 112, 1),
(124, 113, 1),
(125, 114, 1),
(126, 115, 1),
(127, 116, 1),
(128, 117, 1),
(129, 118, 1),
(130, 119, 1),
(131, 120, 1),
(132, 121, 1),
(133, 122, 1),
(134, 123, 1),
(135, 124, 1),
(136, 125, 1),
(137, 126, 1),
(139, 128, 1),
(144, 133, 1),
(145, 134, 1),
(146, 135, 1),
(148, 137, 2);

-- --------------------------------------------------------

--
-- Table structure for table `asset_types`
--

CREATE TABLE `asset_types` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `logo` varchar(100) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asset_types`
--

INSERT INTO `asset_types` (`id`, `title`, `logo`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Connector/Integrations', '', 'ACTIVE', '2024-02-12 08:45:38.647918', '2024-02-12 08:45:38.647918'),
(2, 'Demo Videos', '', 'ACTIVE', '2024-02-12 08:45:38.647918', '2024-02-12 08:45:38.647918'),
(3, 'Methodology/Guidelines', '', 'ACTIVE', '2024-02-12 08:45:38.647918', '2024-02-12 08:45:38.647918'),
(4, 'Snippets', '', 'ACTIVE', '2024-02-12 08:45:38.647918', '2024-02-12 08:45:38.647918'),
(5, 'Starter Kits', '', 'ACTIVE', '2024-02-12 08:45:38.647918', '2024-02-12 08:45:38.647918'),
(6, 'Product/Solution Specification', '', 'ACTIVE', '2024-02-12 08:45:38.647918', '2024-02-12 08:45:38.647918'),
(7, 'Tool', '', 'ACTIVE', '2024-02-12 08:45:38.647918', '2024-02-12 08:45:38.647918');

-- --------------------------------------------------------

--
-- Table structure for table `asset_types_assets_asset_type_asset_asset_types`
--

CREATE TABLE `asset_types_assets_asset_type_asset_asset_types` (
  `assetTypesId` int(11) NOT NULL,
  `assetAssetTypesId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `business_functions`
--

CREATE TABLE `business_functions` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `logo` varchar(100) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `business_functions`
--

INSERT INTO `business_functions` (`id`, `title`, `logo`, `status`, `created_at`, `updated_at`) VALUES
(1, 'After Sales', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918'),
(2, 'Finance', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918'),
(3, 'HR', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918'),
(4, 'Logistics', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918'),
(5, 'Planning', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918'),
(6, 'Procurement', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918'),
(7, 'Production', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918'),
(8, 'R&D', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918'),
(9, 'Sales and Marketing', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918'),
(10, 'Operations', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918'),
(11, 'Utilities', '', 'ACTIVE', '2024-02-12 08:46:16.871918', '2024-02-12 08:46:16.871918');

-- --------------------------------------------------------

--
-- Table structure for table `business_functions_asset_business_asset_businesses`
--

CREATE TABLE `business_functions_asset_business_asset_businesses` (
  `businessFunctionsId` int(11) NOT NULL,
  `assetBusinessesId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `logo` varchar(100) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `title`, `logo`, `status`, `created_at`, `updated_at`) VALUES
(1, 'ABL FRANCE INTERNALS', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(2, 'AIE Bordeaux', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(3, 'AIE France', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(4, 'AIE Grenoble', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(5, 'AIE Hyderabad', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(6, 'AIE Lille', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(7, 'AIE London', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(8, 'AIE MADRID', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(9, 'AIE Malmo', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(10, 'AIE Melbourne', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(11, 'AIE Milan', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(12, 'AIE Mumbai', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(13, 'AIE Munich', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(14, 'AIE Nantes', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(15, 'AIE New York', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(16, 'AIE Paris', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(17, 'AIE Rennes', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(18, 'AIE San Francisco', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(19, 'AIE Sao Paulo', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(20, 'AIE Shenzhen', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(21, 'AIE Singapore', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(22, 'AIE Stockholm', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(23, 'AIE Toronto', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(24, 'AIE Toulouse', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(25, 'AIE Utrecht', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(26, 'AIE Wroclaw', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(27, 'Altran', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(28, 'Americas & APAC', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(29, 'APAC SAP Utilities', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(30, 'AUMA', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(31, 'Auto India Industry Platform', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(32, 'Capgemini Engineering', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(33, 'CPRD', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(34, 'DCX', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(35, 'DEMS', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(36, 'DTCM', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(37, 'ER&D', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(38, 'EUS', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(39, 'FS L&D', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(40, 'I&D', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(41, 'I&D Millennial Garage', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(42, 'L&D', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(43, 'SECTORHUB', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(44, 'SOGETI', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254'),
(45, 'STARTUPS', '', 'ACTIVE', '2024-02-12 08:45:21.850254', '2024-02-12 08:45:21.850254');

-- --------------------------------------------------------

--
-- Table structure for table `groups_asset_groups_asset_groups`
--

CREATE TABLE `groups_asset_groups_asset_groups` (
  `groupsId` int(11) NOT NULL,
  `assetGroupsId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `portfolios`
--

CREATE TABLE `portfolios` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `logo` varchar(100) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portfolios`
--

INSERT INTO `portfolios` (`id`, `title`, `logo`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Artificial Intelligence', '', 'ACTIVE', '2024-02-12 08:46:32.542461', '2024-02-12 08:46:32.542461'),
(2, 'Customer Experience', '', 'ACTIVE', '2024-02-12 08:46:32.542461', '2024-02-12 08:46:32.542461'),
(3, 'Cloud', '', 'ACTIVE', '2024-02-12 08:46:32.542461', '2024-02-12 08:46:32.542461'),
(4, 'Cybersecurity', '', 'ACTIVE', '2024-02-12 08:46:32.542461', '2024-02-12 08:46:32.542461'),
(5, 'Digital Manufacturing', '', 'ACTIVE', '2024-02-12 08:46:32.542461', '2024-02-12 08:46:32.542461'),
(6, 'NextGenAMS', '', 'ACTIVE', '2024-02-12 08:46:32.542461', '2024-02-12 08:46:32.542461'),
(7, 'S4HANA', '', 'ACTIVE', '2024-02-12 08:46:32.542461', '2024-02-12 08:46:32.542461');

-- --------------------------------------------------------

--
-- Table structure for table `portfolios_asset_portfolio_asset_portfolios`
--

CREATE TABLE `portfolios_asset_portfolio_asset_portfolios` (
  `portfoliosId` int(11) NOT NULL,
  `assetPortfoliosId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', '2024-03-11 06:03:00.004321', '2024-03-11 06:03:00.004321'),
(2, 'User', '2024-03-11 06:03:07.505910', '2024-03-11 06:03:07.505910');

-- --------------------------------------------------------

--
-- Table structure for table `sectors`
--

CREATE TABLE `sectors` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `logo` varchar(100) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sectors`
--

INSERT INTO `sectors` (`id`, `title`, `logo`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Automotive', '', 'ACTIVE', '2024-02-12 08:45:51.797718', '2024-02-12 08:45:51.797718'),
(2, 'Manufacturing', '', 'ACTIVE', '2024-02-12 08:45:51.797718', '2024-02-12 08:45:51.797718'),
(3, 'CPRD', '', 'ACTIVE', '2024-02-12 08:45:51.797718', '2024-02-12 08:45:51.797718'),
(4, 'EUC', '', 'ACTIVE', '2024-02-12 08:45:51.797718', '2024-02-12 08:45:51.797718'),
(5, 'TMT', '', 'ACTIVE', '2024-02-12 08:45:51.797718', '2024-02-12 08:45:51.797718'),
(6, 'FS', '', 'ACTIVE', '2024-02-12 08:45:51.797718', '2024-02-12 08:45:51.797718'),
(7, 'Life Sciences', '', 'ACTIVE', '2024-02-12 08:45:51.797718', '2024-02-12 08:45:51.797718'),
(8, 'Public Sector', '', 'ACTIVE', '2024-02-12 08:45:51.797718', '2024-02-12 08:45:51.797718'),
(9, 'Services', '', 'ACTIVE', '2024-02-12 08:45:51.797718', '2024-02-12 08:45:51.797718');

-- --------------------------------------------------------

--
-- Table structure for table `sectors_asset_sector_asset_sectors`
--

CREATE TABLE `sectors_asset_sector_asset_sectors` (
  `sectorsId` int(11) NOT NULL,
  `assetSectorsId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `technologies`
--

CREATE TABLE `technologies` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `logo` varchar(100) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `technologies`
--

INSERT INTO `technologies` (`id`, `title`, `logo`, `status`, `created_at`, `updated_at`) VALUES
(1, 'AI', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(2, 'AR/VR', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(3, 'Big Data', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(4, 'Blockchain', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(5, 'Cognitive', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(6, 'IoT', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(7, 'Mobile', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(8, 'Wearables', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(9, 'Robotics', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(10, 'Drones', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(11, 'SAP', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010'),
(12, '5G', '', 'ACTIVE', '2024-02-12 08:46:04.263010', '2024-02-12 08:46:04.263010');

-- --------------------------------------------------------

--
-- Table structure for table `technologies_asset_technology_asset_technologies`
--

CREATE TABLE `technologies_asset_technology_asset_technologies` (
  `technologiesId` int(11) NOT NULL,
  `assetTechnologiesId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `account_name` varchar(255) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `project_id` varchar(255) NOT NULL,
  `project_manager` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') NOT NULL DEFAULT 'INACTIVE',
  `password` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `role_id` int(11) NOT NULL DEFAULT 2,
  `approved_by` int(11) DEFAULT NULL,
  `approved_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `account_name`, `project_name`, `project_id`, `project_manager`, `token`, `status`, `password`, `created_at`, `updated_at`, `role_id`, `approved_by`, `approved_date`) VALUES
(3, 'rajesh', 'rajesh.jangid@capagemini.com', '', '', '', '', 'ZJwF8kvBDDInhOxVR0UdwiO1pRTr7oRa', 'ACTIVE', '$2a$10$zXKwvXFFDHYQ3psQB66zoeRralv.WsnipyzTPusQ0U59WUhg81QUG', '2024-03-11 06:16:37.708636', '2024-03-13 09:07:25.122008', 1, 3, '2024-03-11 06:24:50'),
(4, 'ankur', 'ankur.khera@capagemini.com', '', '', '', '', 'QiiIogJAgwhlLIGOoL65bsAHHa6oxeRF', 'ACTIVE', '$2a$10$kXC/gAt5UKncR8Qq4UX/t.piEENI3fgbYhIxC9IyVFA4MySOMgo96', '2024-03-12 15:02:33.703951', '2024-03-13 08:47:50.000000', 2, 3, '2024-03-12 15:02:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `asset_asset_types`
--
ALTER TABLE `asset_asset_types`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_431655ab1e57a16acb96d86b1b2` (`asset_id`),
  ADD KEY `FK_a11204a9267f1d61bacf14baeaf` (`asset_type_id`);

--
-- Indexes for table `asset_businesses`
--
ALTER TABLE `asset_businesses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_84c91fdd09e14ba2b24214cf951` (`asset_id`),
  ADD KEY `FK_5c2c45812a211d1003f8c2e5ade` (`business_id`);

--
-- Indexes for table `asset_files`
--
ALTER TABLE `asset_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_6c869e078b29ad08e3bee59ccd4` (`asset_id`);

--
-- Indexes for table `asset_groups`
--
ALTER TABLE `asset_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_7a91af6eb2e902234996b4074a0` (`asset_id`),
  ADD KEY `FK_5f0702276aefd43adf56cb5ffbc` (`group_id`);

--
-- Indexes for table `asset_portfolios`
--
ALTER TABLE `asset_portfolios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_5e43d1bd6b0ac085fc05e3582cf` (`asset_id`),
  ADD KEY `FK_d1b065707d5e3fa36bfa9b50f2c` (`portfolio_id`);

--
-- Indexes for table `asset_sectors`
--
ALTER TABLE `asset_sectors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_b92cba5afc1136371d18891cb5d` (`asset_id`),
  ADD KEY `FK_ca01284890dbd15b091a91a9df1` (`sector_id`);

--
-- Indexes for table `asset_technologies`
--
ALTER TABLE `asset_technologies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_4daf8bc8103e6f9fce5cab27aac` (`asset_id`),
  ADD KEY `FK_d63a2b0b114808305ecb98af102` (`technology_id`);

--
-- Indexes for table `asset_types`
--
ALTER TABLE `asset_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `asset_types_assets_asset_type_asset_asset_types`
--
ALTER TABLE `asset_types_assets_asset_type_asset_asset_types`
  ADD PRIMARY KEY (`assetTypesId`,`assetAssetTypesId`),
  ADD KEY `IDX_8870adcf9961b63eedf0568d4a` (`assetTypesId`),
  ADD KEY `IDX_62743b13f1dc8e45edffd7b080` (`assetAssetTypesId`);

--
-- Indexes for table `business_functions`
--
ALTER TABLE `business_functions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_functions_asset_business_asset_businesses`
--
ALTER TABLE `business_functions_asset_business_asset_businesses`
  ADD PRIMARY KEY (`businessFunctionsId`,`assetBusinessesId`),
  ADD KEY `IDX_83c27692602b2a19e104ee082a` (`businessFunctionsId`),
  ADD KEY `IDX_398922a1984cc9f8805fef7bbe` (`assetBusinessesId`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groups_asset_groups_asset_groups`
--
ALTER TABLE `groups_asset_groups_asset_groups`
  ADD PRIMARY KEY (`groupsId`,`assetGroupsId`),
  ADD KEY `IDX_04897c12b5ff896c73d0e51879` (`groupsId`),
  ADD KEY `IDX_25e5a3011f9b99a99a163f6783` (`assetGroupsId`);

--
-- Indexes for table `portfolios`
--
ALTER TABLE `portfolios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolios_asset_portfolio_asset_portfolios`
--
ALTER TABLE `portfolios_asset_portfolio_asset_portfolios`
  ADD PRIMARY KEY (`portfoliosId`,`assetPortfoliosId`),
  ADD KEY `IDX_dcc8cd23ceade1027f53b1637d` (`portfoliosId`),
  ADD KEY `IDX_cc7782fffb1d84ea7d205faa34` (`assetPortfoliosId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sectors`
--
ALTER TABLE `sectors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sectors_asset_sector_asset_sectors`
--
ALTER TABLE `sectors_asset_sector_asset_sectors`
  ADD PRIMARY KEY (`sectorsId`,`assetSectorsId`),
  ADD KEY `IDX_891e8c4185b4214a4364eeabd7` (`sectorsId`),
  ADD KEY `IDX_498d91146f933530186129f43e` (`assetSectorsId`);

--
-- Indexes for table `technologies`
--
ALTER TABLE `technologies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `technologies_asset_technology_asset_technologies`
--
ALTER TABLE `technologies_asset_technology_asset_technologies`
  ADD PRIMARY KEY (`technologiesId`,`assetTechnologiesId`),
  ADD KEY `IDX_97e5ba629467d9dade38b12efd` (`technologiesId`),
  ADD KEY `IDX_29dc91815e6e2d78111d95a479` (`assetTechnologiesId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_a2cecd1a3531c0b041e29ba46e1` (`role_id`),
  ADD KEY `FK_619d67e99ae5e826c47e955f9f7` (`approved_by`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assets`
--
ALTER TABLE `assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

--
-- AUTO_INCREMENT for table `asset_asset_types`
--
ALTER TABLE `asset_asset_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `asset_businesses`
--
ALTER TABLE `asset_businesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `asset_files`
--
ALTER TABLE `asset_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=167;

--
-- AUTO_INCREMENT for table `asset_groups`
--
ALTER TABLE `asset_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=157;

--
-- AUTO_INCREMENT for table `asset_portfolios`
--
ALTER TABLE `asset_portfolios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=158;

--
-- AUTO_INCREMENT for table `asset_sectors`
--
ALTER TABLE `asset_sectors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `asset_technologies`
--
ALTER TABLE `asset_technologies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `asset_types`
--
ALTER TABLE `asset_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `business_functions`
--
ALTER TABLE `business_functions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `portfolios`
--
ALTER TABLE `portfolios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sectors`
--
ALTER TABLE `sectors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `technologies`
--
ALTER TABLE `technologies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `asset_asset_types`
--
ALTER TABLE `asset_asset_types`
  ADD CONSTRAINT `FK_431655ab1e57a16acb96d86b1b2` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_a11204a9267f1d61bacf14baeaf` FOREIGN KEY (`asset_type_id`) REFERENCES `asset_types` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `asset_businesses`
--
ALTER TABLE `asset_businesses`
  ADD CONSTRAINT `FK_5c2c45812a211d1003f8c2e5ade` FOREIGN KEY (`business_id`) REFERENCES `business_functions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_84c91fdd09e14ba2b24214cf951` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `asset_files`
--
ALTER TABLE `asset_files`
  ADD CONSTRAINT `FK_6c869e078b29ad08e3bee59ccd4` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `asset_groups`
--
ALTER TABLE `asset_groups`
  ADD CONSTRAINT `FK_5f0702276aefd43adf56cb5ffbc` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_7a91af6eb2e902234996b4074a0` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `asset_portfolios`
--
ALTER TABLE `asset_portfolios`
  ADD CONSTRAINT `FK_5e43d1bd6b0ac085fc05e3582cf` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_d1b065707d5e3fa36bfa9b50f2c` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `asset_sectors`
--
ALTER TABLE `asset_sectors`
  ADD CONSTRAINT `FK_b92cba5afc1136371d18891cb5d` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ca01284890dbd15b091a91a9df1` FOREIGN KEY (`sector_id`) REFERENCES `sectors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `asset_technologies`
--
ALTER TABLE `asset_technologies`
  ADD CONSTRAINT `FK_4daf8bc8103e6f9fce5cab27aac` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_d63a2b0b114808305ecb98af102` FOREIGN KEY (`technology_id`) REFERENCES `technologies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `asset_types_assets_asset_type_asset_asset_types`
--
ALTER TABLE `asset_types_assets_asset_type_asset_asset_types`
  ADD CONSTRAINT `FK_62743b13f1dc8e45edffd7b080f` FOREIGN KEY (`assetAssetTypesId`) REFERENCES `asset_asset_types` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_8870adcf9961b63eedf0568d4ac` FOREIGN KEY (`assetTypesId`) REFERENCES `asset_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `business_functions_asset_business_asset_businesses`
--
ALTER TABLE `business_functions_asset_business_asset_businesses`
  ADD CONSTRAINT `FK_398922a1984cc9f8805fef7bbec` FOREIGN KEY (`assetBusinessesId`) REFERENCES `asset_businesses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_83c27692602b2a19e104ee082a5` FOREIGN KEY (`businessFunctionsId`) REFERENCES `business_functions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `groups_asset_groups_asset_groups`
--
ALTER TABLE `groups_asset_groups_asset_groups`
  ADD CONSTRAINT `FK_04897c12b5ff896c73d0e51879f` FOREIGN KEY (`groupsId`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_25e5a3011f9b99a99a163f67830` FOREIGN KEY (`assetGroupsId`) REFERENCES `asset_groups` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `portfolios_asset_portfolio_asset_portfolios`
--
ALTER TABLE `portfolios_asset_portfolio_asset_portfolios`
  ADD CONSTRAINT `FK_cc7782fffb1d84ea7d205faa34d` FOREIGN KEY (`assetPortfoliosId`) REFERENCES `asset_portfolios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_dcc8cd23ceade1027f53b1637d4` FOREIGN KEY (`portfoliosId`) REFERENCES `portfolios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sectors_asset_sector_asset_sectors`
--
ALTER TABLE `sectors_asset_sector_asset_sectors`
  ADD CONSTRAINT `FK_498d91146f933530186129f43ed` FOREIGN KEY (`assetSectorsId`) REFERENCES `asset_sectors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_891e8c4185b4214a4364eeabd7e` FOREIGN KEY (`sectorsId`) REFERENCES `sectors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `technologies_asset_technology_asset_technologies`
--
ALTER TABLE `technologies_asset_technology_asset_technologies`
  ADD CONSTRAINT `FK_29dc91815e6e2d78111d95a4794` FOREIGN KEY (`assetTechnologiesId`) REFERENCES `asset_technologies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_97e5ba629467d9dade38b12efd6` FOREIGN KEY (`technologiesId`) REFERENCES `technologies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_619d67e99ae5e826c47e955f9f7` FOREIGN KEY (`approved_by`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_a2cecd1a3531c0b041e29ba46e1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
