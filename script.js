// EmailJS integration for contact form
(function() {
    emailjs.init('Npumca_GBPZHWChAu');

    document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('contact-form');
        var formMessage = document.getElementById('form-message');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            formMessage.textContent = '';
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;
            var title = subject;
            var time = new Date().toLocaleString();

            emailjs.send('service_g1g852l', 'template_waon3po', {
                name: name,
                email: email,
                message: message,
                title: title,
                time: time
            })
            .then(function(response) {
                formMessage.style.color = '#4BB543';
                formMessage.textContent = 'Message sent successfully!';
                form.reset();
            }, function(error) {
                formMessage.style.color = '#ff3333';
                formMessage.textContent = 'Failed to send message. Please try again later.';
            });
        });
    });
})();
