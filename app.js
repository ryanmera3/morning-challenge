let cup = {
  sizeOz: 48,
  color: ["Blue", "Red", "Orange", "Green"],
  lidColor: "Clear",
  containsLiquid: true,
  containerFull: "not full"
}
let randomColor = cup.color[Math.floor(Math.random() * cup.color.length)];

console.log(`I have a ${randomColor} cup that is ${cup.sizeOz} oz in size. it has a ${cup.lidColor} lid and it ${cup.containsLiquid ? 'contains liquid' : 'does not contain liquid'}. The container is ${cup.containerFull}`)
