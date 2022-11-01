const user = {
  name: "Даня",
  surname: "Кондров",
  userPhoto: "fdf.png",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Авто моєї мрії" },
    { src: "proger.jpg", alt: "стати гарним спеціолістом" },
    { src: "102400.jpg", alt: "багато грошей " },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  5000,
  7000,
  8000,
  10000,
  12000,
  15000,
  18000,
  21000,
  24000,
  27000,
  30000,
  33000,
];

const necessaryExpenses = 1000;

const todo = [
  { month: "Червень", skill: "самостійність" },
  { month: "Липень", skill: "гнучкість" },
  { month: "Серпень", skill: "Java" },
  { month: "Вересень", skill: "JavaScript" },
  { month: "Жовтень", skill: "Python" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "публічні виступи" },
  { month: "Лютий", skill: "особистий бізнес " },
  { month: "Березень", skill: "Нетворкінг" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Лідерство" },
];

export { user, arr, necessaryExpenses, todo };
