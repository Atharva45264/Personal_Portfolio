// Function to load external HTML into sections
async function loadSection(id, file) {
    try {
      const res = await fetch(file);
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    } catch (err) {
      console.error(`Failed to load ${file}`, err);
    }
  }
  
  // Load each section
  loadSection("about", "about.html");
  loadSection("portfolio", "portfolio.html");
  loadSection("contact", "contact.html");
  