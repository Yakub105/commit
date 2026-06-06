(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const playersData = {
            edwards: {
                images: ["../images/one-edw.jpg", "../images/two-edw.jpg", "../images/three-edw.jpg"]
            },
            gobert: {
                images: ["../images/gober-one.jpg", "../images/gober-two.jpg", "../images/gober-three.jpg"]
            },
            mcdaniels: {
                images: ["../images/mak-one.jpg", "../images/mak-two.jpg", "../images/mak-three.jpg"]
            },
            garnett: {
                images: ["../images/kevin.jpg", "../images/kevin-two.jpg", "../images/kevin-three.jpg"]
            },
            reid: {
                images: ["../images/naz-one.jpg", "../images/naz-two.jpg", "../images/naz-three.jpg"]
            }
        };
        const sliders = document.querySelectorAll('.galer-slider');
        sliders.forEach(slider => {
            const playerName = slider.getAttribute('data-player');
            const images = playersData[playerName]?.images || [];
            if (images.length === 0) return;
            let currentIndex = 0;
            const imgElement = slider.querySelector('.galer-photo');
            const prevBtn = slider.querySelector('.galer-prev');
            const nextBtn = slider.querySelector('.galer-next');
            if (!imgElement || !prevBtn || !nextBtn) return;
            function updateImage() {
                imgElement.src = images[currentIndex];
                console.log("Меняю на:", images[currentIndex]);
            }
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateImage();
            });
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % images.length;
                updateImage();
            });
        });
    });
})();