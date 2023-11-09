-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 09, 2023 at 01:07 PM
-- Server version: 10.6.14-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u169631667_digital`
--

-- --------------------------------------------------------

--
-- Table structure for table `country_codes`
--

CREATE TABLE `country_codes` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `nicename` varchar(80) NOT NULL,
  `numcode` smallint(6) DEFAULT NULL,
  `phonecode` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `country_codes`
--

INSERT INTO `country_codes` (`id`, `name`, `nicename`, `numcode`, `phonecode`) VALUES
(1, 'AFGHANISTAN', 'Afghanistan', 4, 93),
(2, 'ALBANIA', 'Albania', 8, 355),
(3, 'ALGERIA', 'Algeria', 12, 213),
(4, 'AMERICAN SAMOA', 'American Samoa', 16, 1684),
(5, 'ANDORRA', 'Andorra', 20, 376),
(6, 'ANGOLA', 'Angola', 24, 244),
(7, 'ANGUILLA', 'Anguilla', 660, 1264),
(8, 'ANTARCTICA', 'Antarctica', NULL, 0),
(9, 'ANTIGUA AND BARBUDA', 'Antigua and Barbuda', 28, 1268),
(10, 'ARGENTINA', 'Argentina', 32, 54),
(11, 'ARMENIA', 'Armenia', 51, 374),
(12, 'ARUBA', 'Aruba', 533, 297),
(13, 'AUSTRALIA', 'Australia', 36, 61),
(14, 'AUSTRIA', 'Austria', 40, 43),
(15, 'AZERBAIJAN', 'Azerbaijan', 31, 994),
(16, 'BAHAMAS', 'Bahamas', 44, 1242),
(17, 'BAHRAIN', 'Bahrain', 48, 973),
(18, 'BANGLADESH', 'Bangladesh', 50, 880),
(19, 'BARBADOS', 'Barbados', 52, 1246),
(20, 'BELARUS', 'Belarus', 112, 375),
(21, 'BELGIUM', 'Belgium', 56, 32),
(22, 'BELIZE', 'Belize', 84, 501),
(23, 'BENIN', 'Benin', 204, 229),
(24, 'BERMUDA', 'Bermuda', 60, 1441),
(25, 'BHUTAN', 'Bhutan', 64, 975),
(26, 'BOLIVIA', 'Bolivia', 68, 591),
(27, 'BOSNIA AND HERZEGOVINA', 'Bosnia and Herzegovina', 70, 387),
(28, 'BOTSWANA', 'Botswana', 72, 267),
(29, 'BOUVET ISLAND', 'Bouvet Island', NULL, 0),
(30, 'BRAZIL', 'Brazil', 76, 55),
(31, 'BRITISH INDIAN OCEAN TERRITORY', 'British Indian Ocean Territory', NULL, 246),
(32, 'BRUNEI DARUSSALAM', 'Brunei Darussalam', 96, 673),
(33, 'BULGARIA', 'Bulgaria', 100, 359),
(34, 'BURKINA FASO', 'Burkina Faso', 854, 226),
(35, 'BURUNDI', 'Burundi', 108, 257),
(36, 'CAMBODIA', 'Cambodia', 116, 855),
(37, 'CAMEROON', 'Cameroon', 120, 237),
(38, 'CANADA', 'Canada', 124, 1),
(39, 'CAPE VERDE', 'Cape Verde', 132, 238),
(40, 'CAYMAN ISLANDS', 'Cayman Islands', 136, 1345),
(41, 'CENTRAL AFRICAN REPUBLIC', 'Central African Republic', 140, 236),
(42, 'CHAD', 'Chad', 148, 235),
(43, 'CHILE', 'Chile', 152, 56),
(44, 'CHINA', 'China', 156, 86),
(45, 'CHRISTMAS ISLAND', 'Christmas Island', NULL, 61),
(46, 'COCOS (KEELING) ISLANDS', 'Cocos (Keeling) Islands', NULL, 672),
(47, 'COLOMBIA', 'Colombia', 170, 57),
(48, 'COMOROS', 'Comoros', 174, 269),
(49, 'CONGO', 'Congo', 178, 242),
(50, 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', 'Congo, the Democratic Republic of the', 180, 242),
(51, 'COOK ISLANDS', 'Cook Islands', 184, 682),
(52, 'COSTA RICA', 'Costa Rica', 188, 506),
(53, 'COTE D\'IVOIRE', 'Cote D\'Ivoire', 384, 225),
(54, 'CROATIA', 'Croatia', 191, 385),
(55, 'CUBA', 'Cuba', 192, 53),
(56, 'CYPRUS', 'Cyprus', 196, 357),
(57, 'CZECH REPUBLIC', 'Czech Republic', 203, 420),
(58, 'DENMARK', 'Denmark', 208, 45),
(59, 'DJIBOUTI', 'Djibouti', 262, 253),
(60, 'DOMINICA', 'Dominica', 212, 1767),
(61, 'DOMINICAN REPUBLIC', 'Dominican Republic', 214, 1809),
(62, 'ECUADOR', 'Ecuador', 218, 593),
(63, 'EGYPT', 'Egypt', 818, 20),
(64, 'EL SALVADOR', 'El Salvador', 222, 503),
(65, 'EQUATORIAL GUINEA', 'Equatorial Guinea', 226, 240),
(66, 'ERITREA', 'Eritrea', 232, 291),
(67, 'ESTONIA', 'Estonia', 233, 372),
(68, 'ETHIOPIA', 'Ethiopia', 231, 251),
(69, 'FALKLAND ISLANDS (MALVINAS)', 'Falkland Islands (Malvinas)', 238, 500),
(70, 'FAROE ISLANDS', 'Faroe Islands', 234, 298),
(71, 'FIJI', 'Fiji', 242, 679),
(72, 'FINLAND', 'Finland', 246, 358),
(73, 'FRANCE', 'France', 250, 33),
(74, 'FRENCH GUIANA', 'French Guiana', 254, 594),
(75, 'FRENCH POLYNESIA', 'French Polynesia', 258, 689),
(76, 'FRENCH SOUTHERN TERRITORIES', 'French Southern Territories', NULL, 0),
(77, 'GABON', 'Gabon', 266, 241),
(78, 'GAMBIA', 'Gambia', 270, 220),
(79, 'GEORGIA', 'Georgia', 268, 995),
(80, 'GERMANY', 'Germany', 276, 49),
(81, 'GHANA', 'Ghana', 288, 233),
(82, 'GIBRALTAR', 'Gibraltar', 292, 350),
(83, 'GREECE', 'Greece', 300, 30),
(84, 'GREENLAND', 'Greenland', 304, 299),
(85, 'GRENADA', 'Grenada', 308, 1473),
(86, 'GUADELOUPE', 'Guadeloupe', 312, 590),
(87, 'GUAM', 'Guam', 316, 1671),
(88, 'GUATEMALA', 'Guatemala', 320, 502),
(89, 'GUINEA', 'Guinea', 324, 224),
(90, 'GUINEA-BISSAU', 'Guinea-Bissau', 624, 245),
(91, 'GUYANA', 'Guyana', 328, 592),
(92, 'HAITI', 'Haiti', 332, 509),
(93, 'HEARD ISLAND AND MCDONALD ISLANDS', 'Heard Island and Mcdonald Islands', NULL, 0),
(94, 'HOLY SEE (VATICAN CITY STATE)', 'Holy See (Vatican City State)', 336, 39),
(95, 'HONDURAS', 'Honduras', 340, 504),
(96, 'HONG KONG', 'Hong Kong', 344, 852),
(97, 'HUNGARY', 'Hungary', 348, 36),
(98, 'ICELAND', 'Iceland', 352, 354),
(99, 'INDIA', 'India', 356, 91),
(100, 'INDONESIA', 'Indonesia', 360, 62),
(101, 'IRAN, ISLAMIC REPUBLIC OF', 'Iran, Islamic Republic of', 364, 98),
(102, 'IRAQ', 'Iraq', 368, 964),
(103, 'IRELAND', 'Ireland', 372, 353),
(104, 'ISRAEL', 'Israel', 376, 972),
(105, 'ITALY', 'Italy', 380, 39),
(106, 'JAMAICA', 'Jamaica', 388, 1876),
(107, 'JAPAN', 'Japan', 392, 81),
(108, 'JORDAN', 'Jordan', 400, 962),
(109, 'KAZAKHSTAN', 'Kazakhstan', 398, 7),
(110, 'KENYA', 'Kenya', 404, 254),
(111, 'KIRIBATI', 'Kiribati', 296, 686),
(112, 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF', 'Korea, Democratic People\'s Republic of', 408, 850),
(113, 'KOREA, REPUBLIC OF', 'Korea, Republic of', 410, 82),
(114, 'KUWAIT', 'Kuwait', 414, 965),
(115, 'KYRGYZSTAN', 'Kyrgyzstan', 417, 996),
(116, 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC', 'Lao People\'s Democratic Republic', 418, 856),
(117, 'LATVIA', 'Latvia', 428, 371),
(118, 'LEBANON', 'Lebanon', 422, 961),
(119, 'LESOTHO', 'Lesotho', 426, 266),
(120, 'LIBERIA', 'Liberia', 430, 231),
(121, 'LIBYAN ARAB JAMAHIRIYA', 'Libyan Arab Jamahiriya', 434, 218),
(122, 'LIECHTENSTEIN', 'Liechtenstein', 438, 423),
(123, 'LITHUANIA', 'Lithuania', 440, 370),
(124, 'LUXEMBOURG', 'Luxembourg', 442, 352),
(125, 'MACAO', 'Macao', 446, 853),
(126, 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', 'Macedonia, the Former Yugoslav Republic of', 807, 389),
(127, 'MADAGASCAR', 'Madagascar', 450, 261),
(128, 'MALAWI', 'Malawi', 454, 265),
(129, 'MALAYSIA', 'Malaysia', 458, 60),
(130, 'MALDIVES', 'Maldives', 462, 960),
(131, 'MALI', 'Mali', 466, 223),
(132, 'MALTA', 'Malta', 470, 356),
(133, 'MARSHALL ISLANDS', 'Marshall Islands', 584, 692),
(134, 'MARTINIQUE', 'Martinique', 474, 596),
(135, 'MAURITANIA', 'Mauritania', 478, 222),
(136, 'MAURITIUS', 'Mauritius', 480, 230),
(137, 'MAYOTTE', 'Mayotte', NULL, 269),
(138, 'MEXICO', 'Mexico', 484, 52),
(139, 'MICRONESIA, FEDERATED STATES OF', 'Micronesia, Federated States of', 583, 691),
(140, 'MOLDOVA, REPUBLIC OF', 'Moldova, Republic of', 498, 373),
(141, 'MONACO', 'Monaco', 492, 377),
(142, 'MONGOLIA', 'Mongolia', 496, 976),
(143, 'MONTSERRAT', 'Montserrat', 500, 1664),
(144, 'MOROCCO', 'Morocco', 504, 212),
(145, 'MOZAMBIQUE', 'Mozambique', 508, 258),
(146, 'MYANMAR', 'Myanmar', 104, 95),
(147, 'NAMIBIA', 'Namibia', 516, 264),
(148, 'NAURU', 'Nauru', 520, 674),
(149, 'NEPAL', 'Nepal', 524, 977),
(150, 'NETHERLANDS', 'Netherlands', 528, 31),
(151, 'NETHERLANDS ANTILLES', 'Netherlands Antilles', 530, 599),
(152, 'NEW CALEDONIA', 'New Caledonia', 540, 687),
(153, 'NEW ZEALAND', 'New Zealand', 554, 64),
(154, 'NICARAGUA', 'Nicaragua', 558, 505),
(155, 'NIGER', 'Niger', 562, 227),
(156, 'NIGERIA', 'Nigeria', 566, 234),
(157, 'NIUE', 'Niue', 570, 683),
(158, 'NORFOLK ISLAND', 'Norfolk Island', 574, 672),
(159, 'NORTHERN MARIANA ISLANDS', 'Northern Mariana Islands', 580, 1670),
(160, 'NORWAY', 'Norway', 578, 47),
(161, 'OMAN', 'Oman', 512, 968),
(162, 'PAKISTAN', 'Pakistan', 586, 92),
(163, 'PALAU', 'Palau', 585, 680),
(164, 'PALESTINIAN TERRITORY, OCCUPIED', 'Palestinian Territory, Occupied', NULL, 970),
(165, 'PANAMA', 'Panama', 591, 507),
(166, 'PAPUA NEW GUINEA', 'Papua New Guinea', 598, 675),
(167, 'PARAGUAY', 'Paraguay', 600, 595),
(168, 'PERU', 'Peru', 604, 51),
(169, 'PHILIPPINES', 'Philippines', 608, 63),
(170, 'PITCAIRN', 'Pitcairn', 612, 0),
(171, 'POLAND', 'Poland', 616, 48),
(172, 'PORTUGAL', 'Portugal', 620, 351),
(173, 'PUERTO RICO', 'Puerto Rico', 630, 1787),
(174, 'QATAR', 'Qatar', 634, 974),
(175, 'REUNION', 'Reunion', 638, 262),
(176, 'ROMANIA', 'Romania', 642, 40),
(177, 'RUSSIAN FEDERATION', 'Russian Federation', 643, 70),
(178, 'RWANDA', 'Rwanda', 646, 250),
(179, 'SAINT HELENA', 'Saint Helena', 654, 290),
(180, 'SAINT KITTS AND NEVIS', 'Saint Kitts and Nevis', 659, 1869),
(181, 'SAINT LUCIA', 'Saint Lucia', 662, 1758),
(182, 'SAINT PIERRE AND MIQUELON', 'Saint Pierre and Miquelon', 666, 508),
(183, 'SAINT VINCENT AND THE GRENADINES', 'Saint Vincent and the Grenadines', 670, 1784),
(184, 'SAMOA', 'Samoa', 882, 684),
(185, 'SAN MARINO', 'San Marino', 674, 378),
(186, 'SAO TOME AND PRINCIPE', 'Sao Tome and Principe', 678, 239),
(187, 'SAUDI ARABIA', 'Saudi Arabia', 682, 966),
(188, 'SENEGAL', 'Senegal', 686, 221),
(189, 'SERBIA AND MONTENEGRO', 'Serbia and Montenegro', NULL, 381),
(190, 'SEYCHELLES', 'Seychelles', 690, 248),
(191, 'SIERRA LEONE', 'Sierra Leone', 694, 232),
(192, 'SINGAPORE', 'Singapore', 702, 65),
(193, 'SLOVAKIA', 'Slovakia', 703, 421),
(194, 'SLOVENIA', 'Slovenia', 705, 386),
(195, 'SOLOMON ISLANDS', 'Solomon Islands', 90, 677),
(196, 'SOMALIA', 'Somalia', 706, 252),
(197, 'SOUTH AFRICA', 'South Africa', 710, 27),
(198, 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', 'South Georgia and the South Sandwich Islands', NULL, 0),
(199, 'SPAIN', 'Spain', 724, 34),
(200, 'SRI LANKA', 'Sri Lanka', 144, 94),
(201, 'SUDAN', 'Sudan', 736, 249),
(202, 'SURINAME', 'Suriname', 740, 597),
(203, 'SVALBARD AND JAN MAYEN', 'Svalbard and Jan Mayen', 744, 47),
(204, 'SWAZILAND', 'Swaziland', 748, 268),
(205, 'SWEDEN', 'Sweden', 752, 46),
(206, 'SWITZERLAND', 'Switzerland', 756, 41),
(207, 'SYRIAN ARAB REPUBLIC', 'Syrian Arab Republic', 760, 963),
(208, 'TAIWAN, PROVINCE OF CHINA', 'Taiwan, Province of China', 158, 886),
(209, 'TAJIKISTAN', 'Tajikistan', 762, 992),
(210, 'TANZANIA, UNITED REPUBLIC OF', 'Tanzania, United Republic of', 834, 255),
(211, 'THAILAND', 'Thailand', 764, 66),
(212, 'TIMOR-LESTE', 'Timor-Leste', NULL, 670),
(213, 'TOGO', 'Togo', 768, 228),
(214, 'TOKELAU', 'Tokelau', 772, 690),
(215, 'TONGA', 'Tonga', 776, 676),
(216, 'TRINIDAD AND TOBAGO', 'Trinidad and Tobago', 780, 1868),
(217, 'TUNISIA', 'Tunisia', 788, 216),
(218, 'TURKEY', 'Turkey', 792, 90),
(219, 'TURKMENISTAN', 'Turkmenistan', 795, 7370),
(220, 'TURKS AND CAICOS ISLANDS', 'Turks and Caicos Islands', 796, 1649),
(221, 'TUVALU', 'Tuvalu', 798, 688),
(222, 'UGANDA', 'Uganda', 800, 256),
(223, 'UKRAINE', 'Ukraine', 804, 380),
(224, 'UNITED ARAB EMIRATES', 'United Arab Emirates', 784, 971),
(225, 'UNITED KINGDOM', 'United Kingdom', 826, 44),
(226, 'UNITED STATES', 'United States', 840, 1),
(227, 'UNITED STATES MINOR OUTLYING ISLANDS', 'United States Minor Outlying Islands', NULL, 1),
(228, 'URUGUAY', 'Uruguay', 858, 598),
(229, 'UZBEKISTAN', 'Uzbekistan', 860, 998),
(230, 'VANUATU', 'Vanuatu', 548, 678),
(231, 'VENEZUELA', 'Venezuela', 862, 58),
(232, 'VIET NAM', 'Viet Nam', 704, 84),
(233, 'VIRGIN ISLANDS, BRITISH', 'Virgin Islands, British', 92, 1284),
(234, 'VIRGIN ISLANDS, U.S.', 'Virgin Islands, U.s.', 850, 1340),
(235, 'WALLIS AND FUTUNA', 'Wallis and Futuna', 876, 681),
(236, 'WESTERN SAHARA', 'Western Sahara', 732, 212),
(237, 'YEMEN', 'Yemen', 887, 967),
(238, 'ZAMBIA', 'Zambia', 894, 260),
(239, 'ZIMBABWE', 'Zimbabwe', 716, 263);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `country_codes`
--
ALTER TABLE `country_codes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `country_codes`
--
ALTER TABLE `country_codes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=240;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
