window.addEventListener('load', () => {
  document.querySelectorAll('.progress').forEach(bar => {
    bar.style.width = bar.getAttribute('data-width');
  });
});

// Smooth scroll for nav links
document.querySelectorAll('.nav_tag a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // navbar height adjust
        behavior: 'smooth',
      });
    }
  });
});

// Create button
const scrollBtn = document.createElement('div');
scrollBtn.innerHTML = '⇑';
document.body.appendChild(scrollBtn);

// Button style (JS দিয়েই)
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.width = '45px';
scrollBtn.style.height = '45px';
scrollBtn.style.background = '#9d39f4';
scrollBtn.style.color = '#fff';
scrollBtn.style.display = 'flex';
scrollBtn.style.alignItems = 'center';
scrollBtn.style.justifyContent = 'center';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.fontSize = '30px';
scrollBtn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
scrollBtn.style.opacity = '0';
scrollBtn.style.pointerEvents = 'none';
scrollBtn.style.transition = 'all 0.4s ease';
scrollBtn.style.zIndex = '9999';

// Show / Hide on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.opacity = '1';
    scrollBtn.style.pointerEvents = 'auto';
    scrollBtn.style.transform = 'translateY(0)';
  } else {
    scrollBtn.style.opacity = '0';
    scrollBtn.style.pointerEvents = 'none';
    scrollBtn.style.transform = 'translateY(20px)';
  }
});

// Scroll to top on click
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('active');
}

function closeMenu() {
  document.getElementById('navMenu').classList.remove('active');
}
