import chekNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForms = document.querySelectorAll(".balcon_icons_img");
    const windowWidth = document.querySelectorAll("#width");
    const windowHeight = document.querySelectorAll("#height");
    const windowType = document.querySelectorAll("#view_type");
    const windowProfile = document.querySelectorAll(".checkbox");

    chekNumInputs("#width"); //проверка на цифры в инпуте.
    chekNumInputs("#height");

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case "SPAN": 
                        state[prop] = i;
                        break;
                    case "INPUT":
                        if (item.getAttribute("type") === "checkbox") {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case "SELECT":
                        state[prop] = item.value;
                        break;
                };
                console.log(state);
            });
        });
    }

    bindActionToElems("click", windowForms, 'form');
    bindActionToElems("input", windowHeight, 'height');
    bindActionToElems("input", windowWidth, 'width');
    bindActionToElems("change", windowType, 'type');
    bindActionToElems("change", windowProfile, 'profile');
};

export default changeModalState;