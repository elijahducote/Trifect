var d = document,
ocur,
aim,
active_slot,
elm = d.getElementById("frame"),
items;

function press (cur) {
ocur = cur - 1;
var xy = [4.5,2.6,9],
selected = ["pnult","alph"],
sibling = ["alph","pnult"],
dir = 0;
if (!(cur - 1)) {
// leftmost
xy[0] = -xy[0];
++dir;
}
else {
// rightmost 
xy[2] = -xy[2];
--dir;
}
aim = cur + dir;
// to middle
active_slot.classList.remove(selected[ocur]);
active_slot.classList.remove(sibling[ocur]);
active_slot.style.animationName = "anim";
active_slot.style.inset = "0 0 !important";
active_slot.classList.add(selected[ocur]);
active_slot.style.inset = "2.5rem " + xy[0] + "rem";

active_slot.addEventListener("animationend", function() {
active_slot.style.opacity = 1;
active_slot.style.animationName = "none";
active_slot.classList.add("ult");
active_slot.classList.remove(selected[ocur]);
},{once:true});

items[aim].classList.remove(sibling[ocur]);
items[aim].classList.remove(selected[ocur]);
items[aim].classList.remove("ult");
items[aim].style.animationName = "anim";
items[aim].style.inset = "0 0 !important";
items[aim].classList.add(sibling[ocur]);
items[aim].style.inset = "0 " + xy[2] + "rem";

items[aim].addEventListener("animationend", function() {
items[aim].style.animationName = "none";
items[aim].style.opacity = .5;
items[aim].classList.add(selected[ocur]);
items[aim].classList.remove(sibling[ocur]);
},{once:true});

items[0].classList.remove("ult");
items[0].classList.remove("pnult");
items[0].classList.remove("alph");
items[0].style.animationName = "anim";
items[0].style.inset = "0 0 !important";
items[0].classList.add("ult");
items[0].style.inset = "-2.6rem " + xy[0] + "rem";

items[0].addEventListener("animationend", function () {
items[0].style.animationName = "none";
items[0].style.opacity = .5;
items[0].classList.add(sibling[ocur]);
items[0].classList.remove("ult");
},{once:true});

}
function lookup () {
var trove = [],
nth = 3;
for (var name;nth;--nth) {
name = [".ult",".pnult",".alph"][nth - 1];
trove[nth - 1] = d.querySelector(name);
}
items = trove;

items[0].addEventListener("click",function () {
frame.src = "data:text/html,<a href=https://openpsychometrics.org/tests/HEMCR/>https://openpsychometrics.org/tests/HEMCR/</a><br/><a href=https://www.testmybrain.org/tests/famous_faces_2019/famous_faces_2019_en_checkbox_optimized.html>https://www.testmybrain.org/tests/famous_faces_2019/famous_faces_2019_en_checkbox_optimized.html</a>"
items[0].style.inset = "0 0";
items[1].style.inset = "0 0";
items[2].style.inset = "0 0";
items[0].style.opacity = 1;
items[1].style.opacity = .5;
items[2].style.opacity = .5;
},{once:false});
items[1].addEventListener("click",function (e) {
active_slot = e.target;
press(1);
},{once:false});
items[2].addEventListener("click",function (e) {
active_slot = e.target;
press(2);
},{once:false});
}
lookup();