document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('open-contact');
  const closeBtn = document.getElementById('close-contact');
  const modal = document.getElementById('contact-modal');
  const form = document.getElementById('contact-form');

  if (openBtn) openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
  });

  if (closeBtn) closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
  });

  if (modal) modal.addEventListener('click', function(e) {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (form) form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = form.name.value;
    var email = form.email.value;
    var subject = form.title.value || 'Opportunity via psychichacker.xyz';
    var message = form.message.value;
    var mailto = 'mailto:vaibhav.techi01@gmail.com?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = mailto;
    modal.classList.remove('active');
  });
});
