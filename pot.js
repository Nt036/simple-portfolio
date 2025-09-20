

function toggleMode() {
  document.body.classList.toggle('dark');
}

    


  //projects
  const toggleBtn = document.getElementById("toggleArrow");
  const hiddenProjects = document.querySelectorAll(".project.hidden");
  let isExpanded = false;

  toggleBtn.addEventListener("click", () => {
    isExpanded = !isExpanded;
    hiddenProjects.forEach(project => {
      project.style.display = isExpanded ? "block" : "none";
    });

    toggleBtn.textContent = isExpanded ? "◀ Show Less" : "➤ Show More";
  });


  //contact js
   // Initialize EmailJS
  (function(){
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
  })();

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMsg = document.getElementById("successMessage");

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: name,
      from_email: email,
      message: message
    }).then(function() {
      successMsg.style.display = "block";
      document.getElementById("contactForm").reset();
      setTimeout(() => {
        successMsg.style.display = "none";
      }, 4000);
    }, function(error) {
      alert("Failed to send message. Please try again.");
      console.log(error);
    });
  });



 


//about 
const text = "I'm a passionate junior front-end developer.";
  const typingElement = document.querySelector(".typing-text");
  let i = 0;
  let isDeleting = false;

  function typeEffect() {
    typingElement.textContent = text.substring(0, i);

    if (!isDeleting && i < text.length) {
      i++;
    } else if (isDeleting && i > 0) {
      i--;
    }

    if (i === text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Pause before deleting
      return;
    } else if (i === 0 && isDeleting) {
      isDeleting = false;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  window.addEventListener("load", typeEffect);


  
//skills 
const filterButtons = document.querySelectorAll('.filter-btn');
  const languageGroup = document.querySelector('.skill-group.languages');
  const toolsGroup = document.querySelector('.skill-group.tools');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      if (filter === 'all') {
        languageGroup.style.display = 'block';
        toolsGroup.style.display = 'block';


} else if (filter === 'languages') {
        languageGroup.style.display = 'block';
        toolsGroup.style.display = 'none';
      } else if (filter === 'tools') {
        languageGroup.style.display = 'none';
        toolsGroup.style.display = 'block';
      }
    });
  });
