// Seasonal Images Configuration
const seasonalImages = {
    spring: {
        path: 'img/seasons/spring.jpg',
        alt: 'Frühlingsblüten mit Bienen',
        start: '03-20', // March 20
        end: '06-20'    // June 20
    },
    summer: {
        path: 'img/seasons/summer.jpg',
        alt: 'Sommerliche Bienenweide',
        start: '06-21', // June 21
        end: '09-21'    // September 21
    },
    autumn: {
        path: 'img/seasons/autumn.jpg',
        alt: 'Herbstliche Impression mit Bienen',
        start: '09-22', // September 22
        end: '12-20'    // December 20
    },
    winter: {
        path: 'img/seasons/winter.jpg',
        alt: 'Winterruhe im Bienenstock',
        start: '12-21', // December 21
        end: '03-19'    // March 19
    }
};

// Helper function to determine current season
function getCurrentSeason() {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const currentDate = `${month}-${day}`;

    for (const [season, data] of Object.entries(seasonalImages)) {
        // Handle year wrap-around for winter
        if (season === 'winter') {
            if (currentDate >= data.start || currentDate <= data.end) {
                return season;
            }
        } else {
            if (currentDate >= data.start && currentDate <= data.end) {
                return season;
            }
        }
    }
    return 'spring'; // Default to spring if something goes wrong
}

// Function to set the seasonal image
function setSeasonalImage() {
    const imageContainer = document.getElementById('rotating-image');
    if (!imageContainer) return;

    const currentSeason = getCurrentSeason();
    const imageData = seasonalImages[currentSeason];

    // Create image element with loading state
    const img = document.createElement('img');
    img.src = imageData.path;
    img.alt = imageData.alt;
    img.className = 'w-full h-full object-cover opacity-0 transition-opacity duration-500';

    // Add loading placeholder
    imageContainer.innerHTML = `
        <div class="absolute inset-0 flex items-center justify-center bg-amber-50">
            <div class="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
        </div>
    `;

    // When image loads, fade it in
    img.onload = () => {
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
        setTimeout(() => {
            img.classList.remove('opacity-0');
        }, 50);
    };

    // Handle loading error
    img.onerror = () => {
        imageContainer.innerHTML = `
            <div class="flex items-center justify-center h-full bg-amber-50 text-amber-800">
                <p>Bild konnte nicht geladen werden</p>
            </div>
        `;
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setSeasonalImage();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 