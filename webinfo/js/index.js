let openedLeft = false;
let openedRight = false;

function openMenu(right) {
    if (right > 0) {
        if (openedLeft) {
            document.querySelector(".left").style.left = "-80vw";
            openedLeft = false;
        } else {
            document.querySelector(".right").style.right = "0";
            document.querySelector(".left").style.left = "-80vw";
            openedRight = true;
        }
    } else {
        if (openedRight) {
            document.querySelector(".right").style.right = "-80vw";
            openedRight = false;
        } else {
            document.querySelector(".right").style.right = "-80vw";
            document.querySelector(".left").style.left = "0";
            openedLeft = true;
        }
    }
}
