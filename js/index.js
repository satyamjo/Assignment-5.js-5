const buttons = document.querySelectorAll('button');
textField.document.designMode = "on";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let cmd = buttons[i].getAttribute('data-cmd');
        if (buttons[i].name === "active") {
            buttons[i].classList.toggle('active');
        } else {
            textField.document.execCommand(cmd, false, null);
        }
    })
}