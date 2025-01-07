const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetSection = link.getAttribute('data-section');

        sections.forEach(section => {
          section.classList.remove('active');
          if (section.id === targetSection) {
            section.classList.add('active');
          }
        });
      });
    });