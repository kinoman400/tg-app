document.addEventListener('DOMContentLoaded', function () {
    Telegram.WebApp.ready();

    document.querySelectorAll('.tg-command').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            Telegram.WebApp.sendData(this.dataset.command);
        })
    })

    document.querySelectorAll('.chat-link').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const userId = Telegram.WebApp.initDataUnsafe.user.id;
            const chatId = Telegram.WebApp.initDataUnsafe.chat.id;
            let url = this.dataset.url + '&user=' + userId + '&chat=' + chatId;
            window.open(url, '_blank');
        })
    })
});
