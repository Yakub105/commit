(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const facts = [
            "Клуб основан в 1989 году и назван в честь популяции волков в Миннесоте.",
            "Кевин Гарнетт был выбран под 1 номером драфта 1995 года и стал MVP в 2004.",
            "Энтони Эдвардс набирает в среднем 28.8 очков за матч в сезоне 2025/2026.",
            "В 2024 году Timberwolves впервые за 20 лет вышли в финал Западной конференции.",
            "Руди Гобер признавался лучшим защитником года 4 раза в карьере.",
            "Карл-Энтони Таунс выиграл конкурс трёхочковых в 2022 году.",
            "Домашняя арена команды — Target Center в Миннеаполисе.",
            "Лучший сезон в истории: 58 побед сезон 2003/04."
        ];
        const factBtn = document.getElementById('fact-btn');
        const factText = document.getElementById('fact-text');
        if (factBtn && factText) {
            factBtn.addEventListener('click', function() {
                const randomIndex = Math.floor(Math.random() * facts.length);
                factText.textContent = facts[randomIndex];
            });
        }
        const calcForm = document.getElementById('calc-form');
        const calcResult = document.getElementById('calc-result');
        if (calcForm && calcResult) {
            calcForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const pts = parseInt(document.getElementById('calc-pts').value) || 0;
                const reb = parseInt(document.getElementById('calc-reb').value) || 0;
                const ast = parseInt(document.getElementById('calc-ast').value) || 0;
                const stl = parseInt(document.getElementById('calc-stl').value) || 0;
                const blk = parseInt(document.getElementById('calc-blk').value) || 0;
                const tov = parseInt(document.getElementById('calc-tov').value) || 0;
                const efficiency = pts + reb + ast + stl + blk - tov;
                let rating = '';
                let resultClass = '';
                if (efficiency >= 40) {
                    rating = 'Легендарный матч! (40+)';
                    resultClass = 'good';
                } else if (efficiency >= 30) {
                    rating = 'Молодец! (30-39)';
                    resultClass = 'good';
                } else if (efficiency >= 20) {
                    rating = 'Отлично! (20-29)';
                    resultClass = 'good';
                } else if (efficiency >= 10) {
                    rating = 'Хорошо (10-19)';
                    resultClass = 'good';
                } else if (efficiency >= 0) {
                    rating = 'Средне (0-9)';
                    resultClass = 'bad';
                } else {
                    rating = 'Плохо (-)';
                    resultClass = 'bad';
                }
                calcResult.innerHTML = '';
                const efficiencySpan = document.createElement('strong');
                efficiencySpan.textContent = `Эффективность: ${efficiency}`;
                const ratingSpan = document.createElement('span');
                ratingSpan.textContent = `Оценка: ${rating}`;
                const lineBreak = document.createElement('br');
                calcResult.appendChild(efficiencySpan);
                calcResult.appendChild(lineBreak);
                calcResult.appendChild(ratingSpan);
                calcResult.className = 'calc-result ' + resultClass;
            });
        }
        const quizForm = document.getElementById('viktoty');
        const quizResult = document.getElementById('viktory-res');
        if (quizForm && quizResult) {
            quizForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const answers = {
                    v1: '1989',
                    v2: 'kevin',
                    v3: '2004',
                    v4: '21'
                };
                let score = 0;
                const total = 4;
                const q1 = document.querySelector('input[name="v1"]:checked');
                const q2 = document.querySelector('input[name="v2"]:checked');
                const q3 = document.querySelector('input[name="v3"]:checked');
                const q4 = document.querySelector('input[name="v4"]:checked');
                if (q1 && q1.value === answers.v1) score++;
                if (q2 && q2.value === answers.v2) score++;
                if (q3 && q3.value === answers.v3) score++;
                if (q4 && q4.value === answers.v4) score++;
                let message = '';
                let resultClass = '';
                if (score === total) {
                    message = 'Отлично! Вы знаток Timberwolves! ' + score + '/' + total;
                    resultClass = 'correct';
                } else if (score >= 2) {
                    message = 'Хороший результат! ' + score + '/' + total + ' правильных ответов';
                    resultClass = 'correct';
                } else {
                    message = 'Попробуйте ещё раз! ' + score + '/' + total + ' правильных ответов.';
                    resultClass = 'wrong';
                }
                quizResult.textContent = message;
                quizResult.className = 'viktory-res ' + resultClass;
            });
        }
    });
})();