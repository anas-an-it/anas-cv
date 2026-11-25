document.addEventListener("DOMContentLoaded", function () {

    // تحديث السنة
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // تحديد زر الوضع الليلي
    const themeToggle = document.getElementById("themeToggle");

    // استرجاع الوضع المحفوظ
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // تحديث الأيقونة
    function updateButton() {
        const isDark = document.body.classList.contains("dark-mode");

        themeToggle.innerHTML = isDark ? "☀️" : "🌙";
        themeToggle.title = isDark ? "الوضع النهاري" : "الوضع الليلي";
    }

    updateButton();

    // تشغيل زر التبديل
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem("theme", isDark ? "dark" : "light");

        updateButton();

    });

});