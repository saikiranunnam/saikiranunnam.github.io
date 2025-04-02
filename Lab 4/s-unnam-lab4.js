// Sai Kiran Chowdary Unnam
// A20552979
// ITMD 541-01 Graduate Student

(function () {
  // 1. Change the main headline text in the hero section
  const heroHeading = document.querySelector('h1');
  if (heroHeading) {
    heroHeading.textContent = 'Uplift Your Brand with Stellar Marketing';
  }

  // 2. Change the hero subheadline (single line, only "thrive" and "excel" in bold and italic)
  setTimeout(() => {
    document.querySelectorAll('p, span, div').forEach(el => {
      if (el.textContent.trim() === 'We create innovative marketing strategies to help your business shine.') {
        el.innerHTML =
          'Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>.';
      }
    });
  }, 200);

  // 3. Change the background image behind the hero section
  const heroContainer = document.querySelector('h1')?.closest('header, div, section');
  if (heroContainer) {
    heroContainer.style.background = 'url("https://picsum.photos/id/683/1280/720") center/cover no-repeat';
  }

  // 4. Change the nav bar background color to match the footer's background color
  setTimeout(() => {
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    if (nav && footer) {
      const bgColor = getComputedStyle(footer).backgroundColor;
      const injectedStyle = document.createElement('style');
      injectedStyle.textContent = `
        header, nav {
          background-color: ${bgColor} !important;
        }
      `;
      document.head.appendChild(injectedStyle);
    }
  }, 100);

  // 5. Remove the "Get Started" cta button in the hero section
  document.querySelectorAll('a').forEach(link => {
    if (link.textContent.trim() === 'Get Started') {
      link.remove();
    }
  });

  // 6. Center align the section headings for "Our Services", "Specialized Marketing Solutions", and "Contact Us"
  document.querySelectorAll('section h2').forEach(title => {
    const sectionName = title.textContent.trim().toLowerCase();
    if (
      ['our services', 'specialized marketing solutions', 'contact us'].some(key =>
        sectionName.includes(key)
      )
    ) {
      title.style.textAlign = 'center';
    }
  });

  // 7. Change all service icons to green (#47C714)
  document.querySelectorAll('#services .material-symbols-outlined').forEach(icon => {
    icon.style.color = '#47C714';
  });

  // 8. Change the digital marketing icon to "ads_click"
  const firstIcon = document.querySelector('#services .material-symbols-outlined');
  if (firstIcon) {
    firstIcon.textContent = 'ads_click';
  }

  // 9. Layout the tiles 4-across in the Specialized Marketing Solutions section at >=1024px screen width
  const tileLayout = document.createElement('style');
  tileLayout.textContent = `
    #solutions .grid {
      display: grid !important;
      grid-template-columns: repeat(4, 1fr) !important;
      gap: 1rem !important;
    }

    #solutions .grid > * {
      min-width: 0 !important;
    }

    @media (max-width: 767px) {
      #solutions .grid {
        zoom: 0.8;
      }
    }
  `;
  document.head.appendChild(tileLayout);

  // 10. Change the image for the Musicians tile in the solutions section
  document.querySelectorAll('#solutions img').forEach(img => {
    if (img.alt.toLowerCase().includes('musicians')) {
      img.src = 'https://picsum.photos/id/453/400/300';
    }
  });

  // Graduate Requirement – Form Handling
  const formElement = document.querySelector('form');
  if (formElement) {
    formElement.addEventListener('submit', event => {
      event.preventDefault();

      const userName = formElement.querySelector('input[name="name"]')?.value.trim();
      const userEmail = formElement.querySelector('input[name="email"]')?.value.trim();

      if (userName && userEmail) {
        alert(`Thank you, ${userName}! We will be in touch with you shortly at ${userEmail}.`);
      } else {
        alert('Please provide a name and email.');
      }
    });
  }
})();
