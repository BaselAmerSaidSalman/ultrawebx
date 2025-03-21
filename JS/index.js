document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".header_images img");
    let index = 0;

    function showNextImage() {
        // إخفاء جميع الصور
        images.forEach(img => {
            img.style.opacity = "0";
            img.style.transform = "translateY(-50px)";
        });

        // إظهار الصورة الحالية
        images[index].style.opacity = "1";
        images[index].style.transform = "translateY(0)";

        // تحريك إلى الصورة التالية بعد 2.5 ثانية
        setTimeout(() => {
            images[index].style.opacity = "0";
            images[index].style.transform = "translateY(50px)"; // تنزل لأسفل ثم تختفي
            index = (index + 1) % images.length; // التنقل بين الصور
        }, 2000);

        setTimeout(showNextImage, 2500); // تشغيل الدالة مجددًا بعد 2.5 ثانية
    }

    showNextImage(); // تشغيل الوظيفة لأول مرة
});


document.querySelector(".dropbtn").addEventListener("click", function () {
    let menu = document.querySelector(".nav_bar_list_content");
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block'
    }
})
// إغلاق القائمة عند الضغط في أي مكان خارجها
document.addEventListener("click", function (event) {
    let menu = document.querySelector(".nav_bar_list_content");
    let button = document.querySelector(".dropbtn");

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
    }
});