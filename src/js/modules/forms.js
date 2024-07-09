import chekNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");

    chekNumInputs("input[name='user_phone']"); // проверка на цифры в инпуте.

    const postData = async (url, data) => {
        // post запрос на сервер.
        document.querySelector(".status").textContent = messages.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data,
        });

        return await res.text();
    };

    const clearInput = () => {
        inputs.forEach((item) => {
            item.value = "";
        });
    };

    const messages = {
        loading: "Загрузка...",
        succses: "Спасибо! Скоро мы с вами свяжемся",
        failure: "ЧТо-то пошло не так...",
    };

    form.forEach((item) => {
        item.addEventListener("submit", (e) => {
            e.preventDefault();

            let statusMassage = document.createElement("div");
            statusMassage.classList.add("status");
            item.appendChild(statusMassage);

            const formData = new FormData(item); // собираем все данные с формы.
            if (item.getAttribute("data-calc") === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData("assets/server.php", formData) // отправляем на сервер.
                .then((res) => {
                    console.log(res);
                    statusMassage.textContent = messages.succses;
                })
                .catch(() => (statusMassage.textContent = messages.failure))
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        statusMassage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;
