const logos = [
    { name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Facebook", img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
    { name: "Twitter", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1920px-X_logo_2023.svg.png" },
    { name: "Amazon", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Netflix", img: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" },
    { name: "Tesla", img: "https://i.pinimg.com/originals/c0/ff/73/c0ff7389878f57315b48734604454238.png" },
    { name: "Adobe", img: "https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-1.jpg?width=662&height=441&name=adobe-logo-1.jpg" },
    { name: "Spotify", img: "https://ritalinboy.com/app/uploads/2022/05/148-1487614_spotify-logo-small-spotify-logo-transparent-hd-png.png" },
    { name: "Samsung", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" },
    { name: "Intel", img: "https://cdn.worldvectorlogo.com/logos/intel-logo-1.svg" },
    { name: "Nike", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAHSjq7Gk3-FboSL_OMkC42bdCkxD12e4mw&s" },
    { name: "Coca-Cola", img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Coca-Cola_logo.svg" },
    { name: "Pepsi", img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pepsi_logo_2014.svg" },
    { name: "Toyota", img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.svg" },
    { name: "BMW", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW_logo.svg" },
    { name: "Ford", img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ford_logo.svg" },
    { name: "McDonald's", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/McDonald's_Logo.svg" },
    { name: "KFC", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/KFC_Logo.svg" },
    { name: "Walmart", img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Walmart_logo.svg" },
    { name: "IKEA", img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/IKEA_logo.svg" },
    { name: "Lego", img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Lego_logo.svg" },
    { name: "Shell", img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Shell_logo.svg" },
    { name: "BP", img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/BP_logo.svg" },
    { name: "Cisco", img: "https://upload.wikimedia.org/wikipedia/commons/6/67/Cisco_logo.svg" },
    { name: "Salesforce", img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Salesforce.com_logo.svg" },
    { name: "IBM", img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Oracle", img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Oracle_logo.svg" },
    { name: "Slack", img: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Slack_icon_2019.svg" },
    { name: "Snapchat", img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Snapchat_logo.svg" },
    { name: "Red Bull", img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Red_Bull_Logo.svg" },
    { name: "LinkedIn", img: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_logo_initials.png" },
    { name: "Discord", img: "https://upload.wikimedia.org/wikipedia/en/5/5b/Discord_logo.svg" },
    { name: "Vimeo", img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Vimeo_logo.svg" },
    { name: "eBay", img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/eBay_logo.svg" },
    { name: "Nokia", img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Nokia_logo.svg" },
    { name: "H&M", img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/H%26M_logo.svg" },
    { name: "Citi", img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Citi_logo.svg" },
    { name: "American Express", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/American_Express_logo.svg" },
    { name: "FedEx", img: "https://upload.wikimedia.org/wikipedia/commons/5/57/FedEx_logo.svg" },
    { name: "UPS", img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/UPS_Logo.svg" },
    { name: "T-Mobile", img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/T-Mobile_logo.svg" },
    { name: "Chick-fil-A", img: "https://upload.wikimedia.org/wikipedia/en/1/13/Chick-fil-A_logo.svg" },
    { name: "Visa", img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Visa_Logo.svg" },
    { name: "Mastercard", img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Mastercard-logo.svg" },
    { name: "American Airlines", img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/American_Airlines_logo.svg" },
];


let currentLogoIndex = 0;
let score = 0;

// Preload sounds
const correctSound = new Audio('Correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');

function displayLogo() {
    const logoContainer = document.getElementById('logo-container');
    const optionsContainer = document.getElementById('options');
    const resultMessage = document.getElementById('result-message');

    // Clear previous options and message
    optionsContainer.innerHTML = '';
    resultMessage.innerHTML = '';

    // Display the logo
    const logo = logos[currentLogoIndex];
    logoContainer.innerHTML = `<img src="${logo.img}" alt="${logo.name}" class="mx-auto mb-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">`;

    // Shuffle options
    const options = [logo.name, ...getRandomOptions(logos, 3)].sort(() => Math.random() - 0.5);
    
    options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = "flex items-center mb-2";

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.disabled = true; // Disable checkbox until answer is submitted
        checkbox.className = "mr-2 cursor-pointer";

        const label = document.createElement('label');
        label.textContent = option;
        label.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 cursor-pointer";

        label.onclick = () => checkAnswer(option, logo.name, checkbox);

        optionDiv.appendChild(checkbox);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    });
}

function getRandomOptions(logosArray, count) {
    const selected = new Set();
    while (selected.size < count) {
        const randomIndex = Math.floor(Math.random() * logosArray.length);
        selected.add(logosArray[randomIndex].name);
    }
    return Array.from(selected);
}

function checkAnswer(selected, correct, checkbox) {
    const resultMessage = document.getElementById('result-message');

    // Enable checkbox for selected option
    checkbox.disabled = false;

    if (selected === correct) {
        score++;
        correctSound.play();
        resultMessage.textContent = `Correct! Your score is ${score}.`;
        checkbox.value = "correct"; // Mark checkbox as correct
        checkbox.nextSibling.textContent = '✅ ' + selected; // Update label with tick
        checkbox.nextSibling.classList.add('bg-green-500'); // Change background color to green
    } else {
        incorrectSound.play();
        resultMessage.textContent = `Incorrect! The correct answer was ${correct}.`;
        checkbox.value = "incorrect"; // Mark checkbox as incorrect
        checkbox.nextSibling.textContent = '❌ ' + selected; // Update label with cross
        checkbox.nextSibling.classList.add('bg-red-500'); // Change background color to red
    }

    // Move to the next logo after a short delay
    setTimeout(() => {
        currentLogoIndex++;
        if (currentLogoIndex < logos.length) {
            displayLogo();
        } else {
            resultMessage.innerHTML = `Game Over! Your final score is ${score}.`;
            document.getElementById('logo-container').innerHTML = '';
            document.getElementById('options').innerHTML = '';
        }
    }, 2000);
}

// Preload background music
const backgroundMusic = new Audio('BG.mp3');
backgroundMusic.loop = true; // Set the music to loop

// Function to start the game and play music
function startGame() {
    backgroundMusic.play(); // Play the background music
    displayLogo(); // Start displaying logos
}

// Add an event listener to start the game on user interaction
document.body.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        startGame();
    }
});

// Start the game when the page loads (after user interaction)
startGame(); // Call this after user interaction to avoid autoplay restrictions


// Start the game
displayLogo();
