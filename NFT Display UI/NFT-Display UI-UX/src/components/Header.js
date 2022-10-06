import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeIcon from '../assets/header/theme-switch.png';
const Header = () => {
	return (
		<div className="header">
			<div className="logoContainer">
				<img src={punkLogo} className="punkLogo" alt="" />
			</div>

			<div className="searchBar">
				<div className="searchIconContainer">
					<img src={searchIcon} className="" alt="" />
				</div>
				<input className="searchInput" placeholder="Collection, item or user.." />
			</div>

			<div className="headerItems">
				<p>Drops</p>
				<p>Items</p>
				<p>Market Place</p>
			</div>

			<div className="headerActions">
				<div className="themeSwitchContainer">
					<img src={themeIcon} alt="" />
				</div>
			</div>

			<div className="logInButton">GET IN</div>
		</div>
	);
};

export default Header;
