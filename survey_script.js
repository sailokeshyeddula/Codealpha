document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const submitButton = document.getElementById("submitButton");
    const currentPageInput = document.getElementById("currentPage");

    let currentPageIndex = 0;

    function showPage(index) {
        pages.forEach((page) => {
            page.style.display = "none";
        });
        pages[index].style.display = "block";
        currentPageIndex = index;
        currentPageInput.value = index + 1;

        if (currentPageIndex === 0) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "block";
        }

        if (currentPageIndex === pages.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "block";
        } else {
            nextButton.style.display = "block";
            submitButton.style.display = "none";
        }
    }

    prevButton.addEventListener("click", function () {
        if (currentPageIndex > 0) {
            showPage(currentPageIndex - 1);
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentPageIndex < pages.length - 1) {
            showPage(currentPageIndex + 1);
        }
    });

    // Initial setup
    showPage(0);
});
