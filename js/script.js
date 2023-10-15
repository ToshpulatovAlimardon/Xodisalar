"use strict";

const buttons = document.querySelectorAll("button");
const logger = () => {
    console.log("1");
};
buttons.forEach((item) => {
    item.addEventListener("click", logger, { once: true });
});
