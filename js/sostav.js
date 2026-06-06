(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const teamContainer = document.querySelector('.team');
        const addBtn = document.getElementById('dom-add');
        const removeLastBtn = document.getElementById('dom-remove-last');
        const nameInput = document.getElementById('dom-name');
        const positionInput = document.getElementById('dom-position');
        const numberInput = document.getElementById('dom-number');
        if (!teamContainer || !addBtn || !removeLastBtn) return;
        let cardId = 0;
        function addPlayerCard(name, position, number) {
            if (!name || !position || !number) {
                alert('Заполните все поля!');
                return false;
            }
            const card = document.createElement('div');
            card.className = 'player-card';
            card.setAttribute('data-card-id', cardId);
            
            card.innerHTML = `
                <div class="number">#${number}</div>
                <img src="../images/default-avatar.jpg" alt="${name}" class="player-photo">
                <h3>${name}</h3>
                <p>${position}</p>
                <span class="stats">Новый игрок</span>
                <button class="delete-card-btn" data-id="${cardId}"></button>`;
            const deleteBtn = card.querySelector('.delete-card-btn');
            deleteBtn.addEventListener('click', function() {
                card.remove();
            });
            teamContainer.appendChild(card);
            cardId++;
            return true;
        }
        function removeLastCard() {
            const allCards = document.querySelectorAll('.player-card');
            if (allCards.length > 6) {
                allCards[allCards.length - 1].remove();
            } else {
                alert('Нельзя удалить всех игроков! Оставьте хотя бы 6.');
            }
        }
        addBtn.addEventListener('click', function() {
            const name = nameInput.value.trim();
            const position = positionInput.value.trim();
            const number = numberInput.value.trim();
            addPlayerCard(name, position, number);
            nameInput.value = '';
            positionInput.value = '';
            numberInput.value = '';
        });
        removeLastBtn.addEventListener('click', function() {
            removeLastCard();
        });
        const existingCards = document.querySelectorAll('.player-card');
        existingCards.forEach(card => {
            const existingDeleteBtn = card.querySelector('.delete-card-btn');
            if (existingDeleteBtn) {
                existingDeleteBtn.addEventListener('click', function() {
                    card.remove();
                });
            }
        });

    });
})();