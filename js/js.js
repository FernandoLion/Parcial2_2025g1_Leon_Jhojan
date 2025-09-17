document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.querySelector(".content");

    // Pantalla de carga siempre visible al menos 3 seg
    setTimeout(() => {
        loader.classList.add("hidden");
        content.classList.add("show");
    }, 1000); // ⏳ aquí ajustas el tiempo fijo



});

const form = document.getElementById('contactForm');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');

        // Buscar el primer campo inválido
        const primerInvalido = form.querySelector(':invalid');
        if (primerInvalido) {
            primerInvalido.focus(); // mueve el cursor
        }
        return;
    }

    // Si todo válido → alerta éxito
    alertPlaceholder.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
      ✅ Tu mensaje fue enviado con éxito. Te contactaremos pronto.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

    form.reset();
    form.classList.remove('was-validated');
});

function filterServices(category) {
      const services = document.querySelectorAll(".service-item");
      services.forEach(service => {
        if (category === "all" || service.classList.contains(category)) {
          service.classList.remove("hidden");
        } else {
          service.classList.add("hidden");
        }
      });

      // cambiar botón activo
      document.querySelectorAll(".filter-btns button").forEach(btn => btn.classList.remove("active"));
      document.querySelector(`.filter-btns button[onclick="filterServices('${category}')"]`).classList.add("active");
    }