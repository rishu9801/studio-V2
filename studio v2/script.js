window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("top-nav").style.backgroundColor = "#300595";
  } else {
    document.getElementById("top-nav").style.backgroundColor = "transparent";
  }
}

i = 0;
function changeBg() {
  if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
    document.getElementById("top-nav").style.backgroundColor = "#300595";
    i++;
  }
}

const sections = document.querySelectorAll(".section");
console.log(sections);
const revealSections = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hidden");
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.2,
});

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("hidden");
});
