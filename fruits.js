let fruits [];

gyumolcsSzallitmany = (fruitsArray) => {
  for (i = 0; i < fruitsArray.length; i++) {
    fruits.push(fruitsArray[i]);
  }
}

const gyumolcsSzallitmany(['alma', 'ko']);

printFruitsList = () => {
  console.log(fruits)
}