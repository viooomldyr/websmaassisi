document.addEventListener("DOMContentLoaded", () => {
  const kurikulum = document.querySelector(".kurikulum");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        kurikulum.classList.add("visible");
        observer.unobserve(kurikulum);
      }
    });
  });

  observer.observe(kurikulum);
});

document.addEventListener("DOMContentLoaded", () => {
  const ekskul = document.querySelector(".ekskul");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ekskul.classList.add("visible");
        observer.unobserve(ekskul);
      }
    });
  });

  observer.observe(ekskul);
});

document.addEventListener("DOMContentLoaded", () => {
  const bk = document.querySelector(".bk");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        bk.classList.add("visible");
        observer.unobserve(bk);
      }
    });
  });

  observer.observe(bk);
});

document.addEventListener("DOMContentLoaded", () => {
  const pelayanan = document.querySelector(".pelayanan");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        pelayanan.classList.add("visible");
        observer.unobserve(pelayanan);
      }
    });
  });

  observer.observe(pelayanan);
});

document.addEventListener("DOMContentLoaded", () => {
  const pengajaran = document.querySelector(".pengajaran");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        pengajaran.classList.add("visible");
        observer.unobserve(pengajaran);
      }
    });
  });

  observer.observe(pengajaran);
});
