(function () {
    function applyDarkMode() {
        try {
            const darkMode = localStorage.getItem('darkMode') === 'enabled';

            document.documentElement.classList.toggle('dark-mode', darkMode);
            document.documentElement.classList.toggle('light-mode', !darkMode);
        } catch (e) {
            console.warn('localStorage is not available.', e);
        }
    }
    console.log(localStorage.getItem('darkMode'));

    function setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            const darkModeToggle = document.getElementById('dark-mode-toggle');
            const lightModeToggle = document.getElementById('light-mode-toggle');

            if (!darkModeToggle || !lightModeToggle) return; // Avoid errors

            const toggleMode = (enableDark) => {
                document.documentElement.classList.toggle('dark-mode', enableDark);
                document.documentElement.classList.toggle('light-mode', !enableDark);
                localStorage.setItem('darkMode', enableDark ? 'enabled' : 'disabled');
                updateToggleButtons(enableDark);
            };

            const updateToggleButtons = (enableDark) => {
                darkModeToggle.classList.toggle('activate', enableDark);
                lightModeToggle.classList.toggle('activate', !enableDark);
            };

            // Set initial state
            updateToggleButtons(localStorage.getItem('darkMode') === 'enabled');

            // Event listeners
            darkModeToggle.addEventListener('click', () => toggleMode(true));
            lightModeToggle.addEventListener('click', () => toggleMode(false));
        });
    }

    applyDarkMode(); // Apply dark mode immediately
    setupEventListeners(); // Setup event listeners when DOM is ready
})();




