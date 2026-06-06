(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const apiBtn = document.getElementById('api-btn');
        const apiContainer = document.getElementById('api-container');
        if (!apiBtn || !apiContainer) return;
        async function loadNews() {
            apiContainer.innerHTML = '<div class="loading">Загрузка новостей</div>';
            const news = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        {
                            title: "Энтони Эдвардс набрал 40 очков в матче против Lakers",
                            date: "27 апреля 2025",
                            description: "Эдвардс продолжает впечатлять, набирая 40+ очков в третьем матче подряд."
                        },
                        {
                            title: "Timberwolves выходят в плей-офф с 3-го места",
                            date: "8 марта 2026",
                            description: "Миннесота гарантировала себе место в плей-офф после победы над Denver."
                        },
                        {
                            title: "Кевин Гарнетт посетил тренировку команды",
                            date: "апрель 2026",
                            description: "Легендарный игрок поделился опытом с молодыми игроками."
                        },
                        {
                            title: "Руди Гобер — лучший защитник месяца",
                            date: "17 мая 2026",
                            description: "Французский центровой признан лучшим защитником февраля."
                        },
                        {
                            title: "Новый рекорд франшизы: 58 побед за сезон",
                            date: "25 февраля 2026",
                            description: "Timberwolves установили новый рекорд клуба по количеству побед."
                        }
                    ]);
                }, 1500);
            });
            apiContainer.innerHTML = '';
            news.forEach(function(item) {
                const newsItem = document.createElement('div');
                newsItem.className = 'api-item';
                const title = document.createElement('h4');
                title.textContent = `${item.title}`;
                const dateSpan = document.createElement('div');
                dateSpan.className = 'api-date';
                dateSpan.textContent = `${item.date}`;
                const descSpan = document.createElement('p');
                descSpan.textContent = item.description;
                newsItem.appendChild(title);
                newsItem.appendChild(dateSpan);
                newsItem.appendChild(descSpan);
                apiContainer.appendChild(newsItem);
            });
        }
        apiBtn.addEventListener('click', loadNews);
    });
})();