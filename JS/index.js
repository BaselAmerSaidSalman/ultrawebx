const buttons = document.querySelectorAll(".benefits_title button");
const items = document.querySelectorAll(".benefit-box");

buttons.forEach(button => {
button.addEventListener("click", () => {
    buttons.forEach(btn => {
        btn.style.transform = "scale(1)";
        btn.style.backgroundColor = "#6B4C9A";
        btn.style.transition = "all 0.3s ease";
    });

    button.style.transform = "scale(1.1)";
    button.style.backgroundColor = "#593f7f";


    const target = button.getAttribute("data-target");

    // أخفي كل العناصر
    items.forEach(item => item.style.display = "none");

    // أظهر العنصر المطلوب
    document.querySelector(`.benefits_item_${target}`).style.display = "flex";

});
});



/* Question */
document.querySelectorAll(".benefit-box").forEach((item, index) => {
item.style.display = index === 0 ? "flex" : "none";
});

document.addEventListener("DOMContentLoaded", function () {
const calendlyWidget = document.getElementById("calendly_widget");
const loader = document.getElementById("calendly_loader");

const checkIframe = setInterval(() => {
    const iframe = calendlyWidget.querySelector("iframe");
    if (iframe && iframe.contentWindow.document.readyState === "complete") {
    clearInterval(checkIframe);
    loader.style.display = "none";
    calendlyWidget.style.display = "block";
    }
}, 300);
});
