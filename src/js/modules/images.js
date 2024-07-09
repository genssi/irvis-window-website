const images = () => {
    const imgPopup = document.createElement("div");
    const workSections = document.querySelector(".works");
    const bigImage = document.createElement("img");

    imgPopup.classList.add("popup");
    workSections.appendChild(imgPopup);

    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";
    imgPopup.style.display = "none";

    imgPopup.appendChild(bigImage);

    workSections.addEventListener("click", (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains("preview")) {
            imgPopup.style.display = "flex";
            const path = target.parentNode.getAttribute("href");
            bigImage.setAttribute("src", path);
        }

        if (target && target.matches("div.popup")) {
            imgPopup.style.display = "none";
        }
    });
};

export default images;