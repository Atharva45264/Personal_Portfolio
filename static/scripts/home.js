// Animate on Scroll
document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Initialize Third-Party Libraries ---
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Initialize Lucide Icons if it exists on the page
    if (window.lucide) {
        lucide.createIcons();
    }

  // Typewriter Effect
  const texts = [
    "Information Technology Student",
    "Tech Enthusiast",
    "Web Developer",
  ];
  let index = 0,
      charIndex = 0,
      isDeleting = false;
  const typewriter = document.getElementById("typewriter-text");

  if (typewriter) {
    function type() {
      const current = texts[index];
      typewriter.textContent = isDeleting
        ? current.slice(0, --charIndex)
        : current.slice(0, ++charIndex);

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 1500); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(type, 300); // Pause before typing next
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    }
    type();
  } else {
    console.error("#typewriter-text element not found in DOM.");
  }
  // Tab switch functionality
  const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // If there are no tab buttons, don't run the rest of the tab logic
    if (tabButtons.length === 0) {
        return;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);

            // Safety check: if no content matches the button, do nothing
            if (!targetContent) {
                console.error(`Tab content with id "${targetId}" was not found.`);
                return;
            }

            // Update button styles
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update content visibility
            tabContents.forEach(content => content.classList.add('hidden'));
            targetContent.classList.remove('hidden');
        });
    });

});

  // Contact form submit
  document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 1000, once: true });
  }

  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Handle contact form submit with SweetAlert2
  window.handleSubmit = function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    Swal.fire({
      title: 'Sending...',
      html: 'Please wait while we send your message.',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    fetch(form.action, {
      method: 'POST',
      body: formData
    })
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonColor: '#6366f1',
          timer: 2000,
          timerProgressBar: true
        });
        form.reset();
      })
      .catch(() => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#6366f1'
        });
      });
  };
})
