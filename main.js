var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Cricket Lover", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 50,
    loop: true
});


document.querySelectorAll(".Services-list > div").forEach(box => {

    let para = box.querySelector("p");
    let btn = box.querySelector(".read");

    let fullText = para.innerText;
    let shortText = fullText.substring(0, 150) + "...";

    // Page load par short text
    para.innerText = shortText;

    // Hidden span create
    let span = document.createElement("span");
    span.className = "read-more-text";
    span.innerText = fullText.substring(150);

    para.appendChild(span);

    btn.addEventListener("click", function(e) {
        e.preventDefault();

        if (span.style.display === "inline") {
            span.style.display = "none";
            para.firstChild.textContent = shortText;
            btn.innerText = "learn more";
        } else {
            span.style.display = "inline";
            para.firstChild.textContent = fullText.substring(0,150);
            btn.innerText = "show less";
        }
    });

});
