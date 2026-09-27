/* =========================================================
   SHAX PORTFOLIO — MAIN SCRIPT
   ========================================================= */


/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

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


  document.querySelectorAll(".nav a").forEach((link) => {

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


/* ================= SCROLL REVEAL ================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach((element) => {

    observer.observe(element);

  });

} else {

  revealElements.forEach((element) => {

    element.classList.add("visible");

  });

}


/* ================= FOOTER YEAR ================= */

const year =
  document.getElementById("year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* ================= CONTACT FORM ================= */

const form =
  document.getElementById("contactForm");

const note =
  document.getElementById("formNote");


if (form) {

  form.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const data =
        new FormData(form);


      const name =
        String(
          data.get("name") || ""
        ).trim();


      const email =
        String(
          data.get("email") || ""
        ).trim();


      const project =
        String(
          data.get("project") || ""
        ).trim();


      const message =
        String(
          data.get("message") || ""
        ).trim();


      /* Basic validation */

      if (
        !name ||
        !email ||
        !project ||
        !message
      ) {

        if (note) {

          note.textContent =
            "Please complete all fields before sending.";

        }

        return;

      }


      /* Create email */

      const subject =
        encodeURIComponent(
          `SHAX portfolio enquiry — ${project}`
        );


      const body =
        encodeURIComponent(
`Name: ${name}

Email: ${email}

Project type: ${project}

Message:
${message}`
        );


      if (note) {

        note.textContent =
          "Opening your email app…";

      }


      window.location.href =
        `mailto:growmatemgt@gmail.com?subject=${subject}&body=${body}`;

    }
  );

}
