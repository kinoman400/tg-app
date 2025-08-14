document.addEventListener('DOMContentLoaded', function () {
    Telegram.WebApp.ready();

    document.querySelectorAll('.tg-command').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            Telegram.WebApp.sendData(this.dataset.command);
        })
    })
});
