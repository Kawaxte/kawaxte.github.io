export function initContactForm(): void {
  const form = document.getElementById("contactForm") as HTMLFormElement;
  const formSuccess = document.getElementById("formSuccess") as HTMLDivElement;
  const formFailure = document.getElementById("formFailure") as HTMLDivElement;

  const submitButton = form.querySelector(
    "button[type='submit']",
  ) as HTMLButtonElement;

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Sending...';
      }

      const formData = new FormData(form);
      const jsonData = Object.fromEntries(formData.entries());

      try {
        const response = await fetch(
          "https://formsubmit.co/ajax/25cfe7bb970482f72806da9e7e1110ab",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(jsonData),
          },
        );

        const data = await response.json();

        if (response.ok) {
          form.style.display = "none";
          formSuccess.style.display = "block";
        } else {
          throw new Error(data.message || "Form submission failed");
        }
      } catch (error) {
        console.error("Error:", error);

        form.style.display = "none";
        formFailure.style.display = "block";
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = "Send";
        }
      }
    });
  }
}
