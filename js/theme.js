(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const themeBtn = document.getElementById('theme-toggle');
        if (!themeBtn) return;
        function updateButtonText(isLight) {
            themeBtn.textContent = isLight ? ' Светлая тема' : ' Тёмная тема';
        }
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            updateButtonText(true);
        } else {
            updateButtonText(false);
        }
        themeBtn.addEventListener('click', function() {
            const isLight = document.body.classList.toggle('light-theme');
            if (isLight) {
                localStorage.setItem('theme', 'light');
                updateButtonText(true);
            } else {
                localStorage.setItem('theme', 'dark');
                updateButtonText(false);
            }
        });
        
    });
})();