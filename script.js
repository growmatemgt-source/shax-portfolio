/* ============================================================
   SHAX PORTFOLIO
   Main JavaScript
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================
     CURRENT YEAR
  ========================================================== */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ==========================================================
     MOBILE NAVIGATION
  ========================================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        nav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );

    });


    nav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

      });

    });

  }


  /* ==========================================================
     SMOOTH INTERNAL LINKS
  ========================================================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener("click", event => {

        const targetId =
          link.getAttribute("href");

        if (!targetId || targetId === "#") {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });


  /* ==========================================================
     SCROLL REVEAL
  ========================================================== */

  const revealElements =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add("visible");

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px"
        }
      );


    revealElements.forEach(element => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  /* ==========================================================
     CONTACT FORM
     
     This does NOT pretend to have a backend.
     It opens the user's email client with the enquiry.
  ========================================================== */

  const contactForm =
    document.getElementById("contactForm");

  const formNote =
    document.getElementById("formNote");


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();


        const formData =
          new FormData(contactForm);


        const name =
          String(
            formData.get("name") || ""
          ).trim();


        const email =
          String(
            formData.get("email") || ""
          ).trim();


        const project =
          String(
            formData.get("project") || ""
          ).trim();


        const message =
          String(
            formData.get("message") || ""
          ).trim();


        if (
          !name ||
          !email ||
          !project ||
          !message
        ) {

          formNote.textContent =
            "Please complete all fields.";

          return;
        }


        const subject =
          encodeURIComponent(
            `SHAX Portfolio Enquiry — ${project}`
          );


        const body =
          encodeURIComponent(
`Hello SHAX,

Name: ${name}
Email: ${email}
Project type: ${project}

Project details:
${message}

Sent from the SHAX portfolio.`
          );


        const mailto =
          `mailto:growmatemgt@gmail.com?subject=${subject}&body=${body}`;


        formNote.textContent =
          "Opening your email app...";


        window.location.href =
          mailto;

      }
    );

  }


  /* ==========================================================
     PROJECT IMAGE ERROR HANDLING
  ========================================================== */

  document
    .querySelectorAll(".project-visual img")
    .forEach(image => {

      image.addEventListener(
        "error",
        () => {

          image.style.opacity = "0";

          const parent =
            image.closest(".project-visual");

          if (parent) {

            parent.classList.add(
              "image-error"
            );

          }

        }
      );

    });


  /* ==========================================================
     EXTERNAL LINKS
     Make sure external links open safely.
  ========================================================== */

  document
    .querySelectorAll(
      'a[target="_blank"]'
    )
    .forEach(link => {

      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );

    });

});
/* =========================================================
   SHAX — WHATSAPP INQUIRY FORM
   ========================================================= */

const inquiryForm = document.getElementById("inquiryForm");

if (inquiryForm) {
  inquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const project = document.getElementById("projectType").value;
    const message = document.getElementById("projectMessage").value.trim();

    const whatsappNumber = "923393125143";

    const whatsappMessage =
`Hello SHAX,

I'd like to discuss a project.

Name: ${name}
Email: ${email}
Project Type: ${project}

Project Details:
${message}

Sent from SHAX Portfolio.`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  });
}
