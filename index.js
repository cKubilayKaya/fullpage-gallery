const menu = ["01", "02", "03", "04"];
const context = [
  "Cennet Koyu Modern House",
  "SwissOtel Bodrum Beach Room",
  "OXA Gündoğan Houses",
  "Cennet Koyu Stone House",
];

const mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    speed: 5000,

    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        "<h3>" +
        menu[index] +
        "</h3>" +
        "<p>" +
        context[index] +
        "</p>" +
        "<div class='paginationBorder'></div>" +
        "</span>"
      );
    },
  },
  speed: 1000,
  //swipe özelliğini kapatmak için aşağıdaki 2 kodu yorumdan çıkarın
  //   onlyExternal: true,
  //   noSwipingClass: {
  //     noSwiping: false,
  //   },
  createPagination: false,
  calculateHeight: false, // Also tried 'false'
  slidesPerView: "auto",
});

const menuIcon = document.querySelector(".menuIcon");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const navMenu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("menuActive");
  menuIcon.classList.add("iconInactive");
  menuIcon.classList.remove("iconActive");
  //   menuIcon.classList.toggle("menuActive");
});

closeMenuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("menuActive");
  menuIcon.classList.add("iconActive");
  menuIcon.classList.remove("iconInactive");

  //   closeMenuIcon.classList.toggle("menuActive");
});
