console.log("Initiating css animator...");

$(".buton").hover(
  function () {
    $(this).removeClass("flipInX");
    $(this).addClass("swing");
  },
  function () {
    $(this).removeClass("swing");
    // $(this).addClass('flipInX')
  }
);
/*
 $('.judul').hover(
     function () {
         $(this).removeClass('pulse slower infinite')
     },
     function () {
         $(this).addClass('pulse slower infinite')
     }
 )
*/
console.log("Initiating particles.js...");

particlesJS.load("particles", "../particlesjs-config.json", function () {
  console.log("particles.js config loaded");
});
// typing text animation script
var typed = new Typed(".typing", {
  strings: ["YouTuber", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
