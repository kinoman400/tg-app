document.addEventListener('DOMContentLoaded', function () {
    Telegram.WebApp.ready();
    const userId = Telegram.WebApp.initDataUnsafe.user.id;
    const chatId = Telegram.WebApp.initDataUnsafe.chat.id;

    document.querySelectorAll('.tg-command').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            Telegram.WebApp.sendData(this.dataset.command);
        })
    })

    document.querySelectorAll('.chat-link').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            let url = this.dataset.url + '&user=' + userId + '&chat=' + chatId;
            window.open(url, '_blank');
        })
    })
});
