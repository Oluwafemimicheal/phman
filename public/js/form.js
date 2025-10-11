const form = document.getElementById("prayerForm");
const status = document.getElementById("status");
const clearBtn = document.getElementById("clearBtn");

function showError(fieldName, message) {
  const el = document.querySelector('[data-error-for="' + fieldName + '"]');
  if (!el) return;
  el.textContent = message;
  el.classList.remove("hidden");
  const input =
    document.querySelector('[name="' + fieldName + '"]') ||
    document.getElementById(fieldName);
  if (input) input.classList.add("ring-2", "ring-red-200", "shake");
  setTimeout(() => {
    if (input) input.classList.remove("shake");
  }, 350);
}

function clearErrors() {
  document
    .querySelectorAll("[data-error-for]")
    .forEach((el) => el.classList.add("hidden"));
  document
    .querySelectorAll("input, textarea, select")
    .forEach((i) => i.classList.remove("ring-2", "ring-red-200"));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();
  status.classList.add("hidden");

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const prayer = form.prayer.value.trim();

  let hasError = false;

  if (!name) {
    showError("name", "Please enter your name.");
    hasError = true;
  }
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    showError("email", "Please enter a valid email.");
    hasError = true;
  }
  if (!prayer) {
    showError("prayer", "Please write your prayer request.");
    hasError = true;
  }

  if (hasError) return;

  // Mock submission — replace with real POST / API call as needed
  const payload = new FormData(form);
  const data = Object.fromEntries(payload.entries());
  console.log("Submitting prayer:", data);

  // show success status
  status.textContent = "Your prayer has been submitted. Thank you.";
  status.classList.remove("hidden");
  setTimeout(() => {
    status.style.display = "none";
  }, 3000);

  // Optionally reset form (keeping consent if checked)
  const consentState = form.consent.checked;
  form.reset();
  form.consent.checked = consentState;

  // Accessibility: move focus to status so screen readers notice
  status.focus?.();
});

clearBtn.addEventListener("click", () => {
  clearErrors();
  form.reset();
});
