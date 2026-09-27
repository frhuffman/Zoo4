// Creates elephant.
let elephant = {
  id: 1,
  name: "Elmer",
  species: "Elephant",
  weight: 2000,
  age: 5,
  gender: "male",
  status: "Open",
  description: "Elephants are the largest land animals.",
  funFact: "Elephants can recognize themselves in mirrors.",
};

// Creates tiger.
let tiger = {
  id: 2,
  name: "Timmy",
  species: "Tiger",
  weight: 300,
  age: 12,
  gender: "male",
  status: "Open",
  description:
    "Tigers are powerful big cats that are excellent swimmers and usually hunt alone.",
  funFact:
    "Every tiger has a unique stripe pattern, kind of like a fingerprint!",
};

// Creates Panda.
let panda = {
  id: 3,
  name: "Patricia",
  species: "Panda",
  weight: 270,
  age: 4,
  gender: "female",
  status: "Open",
  description:
    "Giant pandas spend much of their day eating bamboo and have a special wrist bone that helps them grip it.",
  funFact: "A panda can eat around 20–40 pounds of bamboo in a day!",
};

// Creates lion.
let lion = {
  id: 4,
  name: "Lydia",
  species: "Lion",
  weight: 350,
  age: 8,
  gender: "female",
  status: "Open",
  description:
    "Lions are social big cats that live together in groups called prides.",
  funFact:
    "A lion's roar can be heard from about 5 miles away under the right conditions!",
};

let otter = {
  id: 5,
  name: "Otto",
  species: "Otter",
  weight: 15,
  age: 3,
  gender: "Male",
  status: "Open",
  description:
    "Otters are playful aquatic mammals that are excellent swimmers and use their paws to handle food.",
  funFact:
    "Sea otters sometimes hold hands while sleeping so they don't drift apart!",
};

let elephantButton = document.getElementById("elephantButton");
let tigerButton = document.getElementById("tigerButton");
let lionButton = document.getElementById("lionButton");
let pandaButton = document.getElementById("pandaButton");
let otterButton = document.getElementById("otterButton");
let animalName = document.getElementById("animalName");
let animalImage = document.getElementById("animalImage");
let animalAge = document.getElementById("animalAge");
let animalWeight = document.getElementById("animalWeight");
let animalDescription = document.getElementById("animalDescription");
let animalFunFact = document.getElementById("animalFact");
let aboutHeading = document.getElementById("aboutHeading");
let factHeading = document.getElementById("factHeading");

aboutHeading.style.display = "none";
factHeading.style.display = "none";

tigerButton.addEventListener("click", function () {
  animalName.textContent = "Timmy the Tiger";
  animalImage.src = "tiger.jpg";
  animalAge.textContent = "Age: " + tiger.age;
  animalWeight.textContent = "Weight: " + tiger.weight;
  animalDescription.textContent = "Description: " + tiger.description;
  animalFunFact.textContent = tiger.funFact;

  aboutHeading.style.display = "block";
  factHeading.style.display = "block";
});

lionButton.addEventListener("click", function () {
  animalName.textContent = "Lydia the Lion";
  animalImage.src = "lion.jpg";
  animalAge.textContent = "Age: " + lion.age;
  animalWeight.textContent = "Weight: " + lion.weight;
  animalDescription.textContent = "Description: " + lion.description;
  animalFunFact.textContent = lion.funFact;

  aboutHeading.style.display = "block";
  factHeading.style.display = "block";
});

pandaButton.addEventListener("click", function () {
  animalName.textContent = "Patricia the Panda";
  animalImage.src = "panda.jpg";
  animalAge.textContent = "Age: " + panda.age;
  animalWeight.textContent = "Weight: " + panda.weight;
  animalDescription.textContent = "Description: " + panda.description;
  animalFunFact.textContent = panda.funFact;

  aboutHeading.style.display = "block";
  factHeading.style.display = "block";
});

elephantButton.addEventListener("click", function () {
  animalName.textContent = "Elmer the Elephant";
  animalImage.src = "elephant.jpg";
  animalAge.textContent = "Age: " + elephant.age;
  animalWeight.textContent = "Weight: " + elephant.weight;
  animalDescription.textContent = "Description: " + elephant.description;
  animalFunFact.textContent = elephant.funFact;

  aboutHeading.style.display = "block";
  factHeading.style.display = "block";
});

otterButton.addEventListener("click", function () {
  animalName.textContent = "Otto the Otter";
  animalImage.src = "otter.jpg";
  animalAge.textContent = "Age: " + otter.age;
  animalWeight.textContent = "Weight: " + otter.weight;
  animalDescription.textContent = "Description: " + otter.description;
  animalFunFact.textContent = otter.funFact;

  aboutHeading.style.display = "block";
  factHeading.style.display = "block";
});

let redPandaButton = document.getElementById("redPandaButton");
let redPandaInfo = document.getElementById("redPandaInfo");

redPandaButton.addEventListener("click", function () {
  redPandaInfo.hidden = !redPandaInfo.hidden;
  redPandaButton.setAttribute("aria-expanded", !redPandaInfo.hidden);
});

let rhinoButton = document.getElementById("rhinoButton");
let rhinoInfo = document.getElementById("rhinoInfo");

rhinoButton.addEventListener("click", function () {
  rhinoInfo.hidden = !rhinoInfo.hidden;
  rhinoButton.setAttribute("aria-expanded", !rhinoInfo.hidden);
});

let saolaButton = document.getElementById("saolaButton");
let saolaInfo = document.getElementById("saolaInfo");

saolaButton.addEventListener("click", function () {
  saolaInfo.hidden = !saolaInfo.hidden;
  saolaButton.setAttribute("aria-expanded", !saolaInfo.hidden);
});
