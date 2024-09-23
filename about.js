document.addEventListener("DOMContentLoaded", () => {
  const visi = document.querySelector(".visi");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visi.classList.add("visible");
        observer.unobserve(visi);
      }
    });
  });

  observer.observe(visi);
});

document.addEventListener("DOMContentLoaded", () => {
  const misi = document.querySelector(".misi");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        misi.classList.add("visible");
        observer.unobserve(misi);
      }
    });
  });

  observer.observe(misi);
});

document.addEventListener("DOMContentLoaded", () => {
  const tujuan = document.querySelector(".tujuan");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tujuan.classList.add("visible");
        observer.unobserve(tujuan);
      }
    });
  });

  observer.observe(tujuan);
});
