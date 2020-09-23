// Open and close navigation bar

// DOM elements
const openNavbar = document.getElementById('open-menu');
const closeNavbar = document.getElementById('close-menu');
const navigation = document.getElementById('navbar');


//Apply the settings on reload
openNavbar.onclick = () => {
	navigation.classList.replace('closed', 'opened');
};

closeNavbar.onclick = () => {
	navigation.classList.replace('opened', 'closed');
};