//LOADER
window.addEventListener("load", () => {
 gsap.to("loader", {
   opacity: 0,
   duration: 1,
   onComplete: () => {

    document.getElementById("loader").style.display = "none";
   }
 });
});
//AOS
AOS.init({
  duration: 1200,
  once: true
});

//HERO animation
gsap.from(".hero h1",  {
   y: 80,
   opacity: 0,
   duration: 1.2
});
gsap.from(".hero p", {
y: 40,
opacity: 0,
delay: 0.3
});
gsap.from(".btn", {
scale: 0.8,
opacity: 0,
delay: 0.5
});

//HEADER
gsap.from("header", {
y: -100,
opacity: 0,
duration: 1
});

//Pag TRansition
document.querySelectorAll("a").forEach(link => {
link.addEventListener("click", e => {
e.preventDefault();

let url = link.getAttribute("href");

gsap.to("#transition", {
x: "100%",
duration: 0.6,
onComplete: () => {
   window.location = url;
}
});
});
});

//Exibir modal (mostrar secçao informaçao)
$('#show-modal').on('click', function() {
  $('.overlay, .notice').show();
});