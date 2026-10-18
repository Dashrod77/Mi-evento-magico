const form = document.getElementById("form");

form.addEventListener("submit", captura);

async function captura(event) {
  event.preventDefault();
  const emailValue = event.target.email.value;
  const passValue = event.target.pass.value;

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailValue, password: passValue })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data.error);
      return;
    }

    localStorage.setItem("token", data.token);
    window.location.href = "Mi_evento_magico.html";
  } catch (error) {
    console.error(error);
  }
}
