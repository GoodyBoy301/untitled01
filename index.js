const body = document.body;
const divs = document.querySelectorAll("div");
const mobile = 425;
let interval;
const states = [
  "state01",
  "state02",
  "state03",
  "state04",
  "state05",
  "state06",
  "state07",
  "state08",
  "state09",
  "state10",
];

const SwitchStates = () => {
  body.className = states[Randomizer()];
};

const Randomizer = () => {
  const isMobile = innerWidth < mobile;
  let random = Math.floor(Math.random() * 5);
  if (isMobile) random += 5;
  return random;
};

const Enlarge = (e) => {
  //show child image
  e.target.childNodes[0].classList.toggle("show");

  //enlarge or continue loop
  if (e.target.className === "enlarge") {
    e.target.className = "";
    interval = setInterval(SwitchStates, 1500);
  } else {
    e.target.className = "enlarge";
    clearInterval(interval);
  }
};

interval = setInterval(SwitchStates, 1500);

divs.forEach((div) => (div.onclick = Enlarge));
