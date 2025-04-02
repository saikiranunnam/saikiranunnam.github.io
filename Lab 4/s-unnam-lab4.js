// Sai Kiran Chowdary Unnam
// A20552979
// ITMD 541-01 Graduate Student

(function () {
    // 1. Change the main headline text in the hero section
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
      mainTitle.textContent = 'Uplift Your Brand with Stellar Marketing';
    }
  
    // 2. Change the hero subheadline (single line, only "thrive" and "excel" in bold and italic)
    setTimeout(() => {
      const candidates = document.querySelectorAll('p, span, div, h2, h3');
      for (const element of candidates) {
        if (
          element.textContent.trim() ===
          'We create innovative marketing strategies to help your business shine.'
        ) {
          element.innerHTML =
            'Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>.';
          break;
        }
      }
    }, 200);
  
    // 3. Change the background image behind the hero section
    const heroArea = document.querySelector('h1')?.closest('section, div, header');
    if (heroArea) {
      Object.assign(heroArea.style, {
        backgroundImage: 'url("https://picsum.photos/id/683/1280/720")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      });
    }
  
    // 4. Change the nav bar background color to match the footer's background color
    setTimeout(() => {
      const siteFooter = document.querySelector('footer');
      const footerColor = siteFooter ? getComputedStyle(siteFooter).backgroundColor : '#1a1a2e';
      const navStyle = document.createElement('style');
      navStyle.textContent = `
        nav, header {
          background-color: ${footerColor} !important;
        }
      `;
      document.head.appendChild(navStyle);
    }, 100);
  
    // 5. Remove the "Get Started" cta button in the hero section
    const callToAction = Array.from(document.querySelectorAll('a')).find(
      link => link.textContent.trim() === 'Get Started'
    );
    if (callToAction) {
      callToAction.remove();
    }
  
    // 6. Center align the section headings for "Our Services", "Specialized Marketing Solutions", and "Contact Us"
    document.querySelectorAll('section h2').forEach(heading => {
      const lowerText = heading.textContent.trim().toLowerCase();
      if (
        lowerText.includes('our services') ||
        lowerText.includes('specialized marketing solutions') ||
        lowerText.includes('contact us')
      ) {
        heading.style.textAlign = 'center';
      }
    });
  
    // 7. Change all service icons to green (#47C714)
    const icons = document.querySelectorAll('#services .material-symbols-outlined');
    icons.forEach(icon => {
      icon.style.color = '#47C714';
    });
  
    // 8. Change the digital marketing icon to "ads_click"
    const firstServiceIcon = document.querySelector('#services .material-symbols-outlined');
    if (firstServiceIcon) {
      firstServiceIcon.textContent = 'ads_click';
    }
  
    // 9. Layout the tiles 4-across in the Specialized Marketing Solutions section at >=1024px screen width
    const layoutStyle = document.createElement('style');
    layoutStyle.textContent = `
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
    document.head.appendChild(layoutStyle);
  
    // 10. Change the image for the Musicians tile in the solutions section
    const musicTile = Array.from(document.querySelectorAll('#solutions img')).find(img =>
      img.alt.toLowerCase().includes('musicians')
    );
    if (musicTile) {
      musicTile.src = 'https://picsum.photos/id/453/400/300';
    }
  
    // Graduate Requirement – Form Handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const userName = contactForm.querySelector('input[name="name"]')?.value.trim();
        const userEmail = contactForm.querySelector('input[name="email"]')?.value.trim();
  
        if (userName && userEmail) {
          alert(`Thank you, ${userName}! We will be in touch with you shortly at ${userEmail}.`);
        } else {
          alert('Please provide a name and email.');
        }
      });
    }
  })();
  
