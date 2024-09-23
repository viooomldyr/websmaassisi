document.addEventListener("DOMContentLoaded", () => {
  const textContent = document.querySelector(".textcontent");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        textContent.classList.add("visible");
        observer.unobserve(textContent);
      }
    });
  });

  observer.observe(textContent);
});

document.addEventListener("DOMContentLoaded", () => {
  const quote = document.querySelector(".quote"); // Mengambil elemen pertama
  // Membuat observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Jika elemen masuk ke viewport
        quote.classList.add("visible");
        observer.unobserve(quote); // Menghentikan observasi setelah muncul
      }
    });
  });

  // Mulai mengamati elemen konten
  observer.observe(quote);
});
