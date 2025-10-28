
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Reveal on scroll
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Portfolio placeholder linking (editable)
const portfolioBtns = document.querySelectorAll('#portfolio-btn, #portfolio-link');
portfolioBtns.forEach(b=>{
  b.addEventListener('click', (e)=>{
    // Default: open external link in new tab. Modify href directly in HTML to your portfolio URL.
    // For now prevent default and open placeholder
    e.preventDefault();
    const url = 'https://www.behance.net/a407f34e'; // replace # by your portfolio URL
    if(url && url !== '#') window.open(url, '_blank');
    else alert('Remplacez le lien du portfolio dans le fichier index.html par votre URL externe.');
  });
});

// Contact form: build mailto and open mail app
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const to = 'digitalsolution.ev@gmail.com';
    const subject = encodeURIComponent('Demande de contact — E.V.Digital-Solutions');
    const body = encodeURIComponent('Nom: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
    const mailto = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    window.location.href = mailto;
  });
}
