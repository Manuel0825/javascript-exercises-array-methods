// =============================================================================
// 1. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean mayor que 18
// =============================================================================
function getAdultsArray(ages) {
  const Adults = ages.filter((age) => age > 18);
  return Adults;
}

// =============================================================================
// 2. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean par
// =============================================================================
function getEvenArray(numbers) {
  const EvenNumbers = numbers.filter((numbers) => numbers % 2 === 0);
  return EvenNumbers;
}

// =============================================================================
// 3. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of legends'
// El objeto streamer tiene la siguiente forma
// { name: 'Nombre', gameMorePlayed: 'League of legends' }
// =============================================================================
function getStreamersLOL(streamers) {
  const LoLStreamers = streamers.filter(
    (streamers) => streamers.gameMorePlayed === "League of legends"
  );
  return LoLStreamers;
}

// =============================================================================
// 4. Dado el siguiente array, usa .map() para generar un nuevo array con
// cada uno de los valores aumentados en 10.
// =============================================================================
function getIncreasedArray(numbers) {
  const IncreasedArray = numbers.map((numbers) => numbers + 10);
  return IncreasedArray;
}

// =============================================================================
// 5. Dado el siguiente array, usa .map() para generar un nuevo array si hay números
// negativos se conviertan a positivos y si son positivos se conviertan a negativos.
function getInvertedSignArray(numbers) {
  const InvertedSign = numbers.map((numbers) => -numbers);
  return InvertedSign;
}

// =============================================================================
// 6. Dado el siguiente array, usa .reduce() para calcular la suma de todos
// los valores del array.
// =============================================================================
function getSum(numbers) {
  const Sum = numbers.reduce((acumulador, Element) => acumulador + Element, 0);
  return Sum;
}

// =============================================================================
// 7. Dado el siguiente array, usa .reduce() para calcular la media de todos
// los valores del array.
// ej. numbers = [1, 2, 3, 4, 5]
// =============================================================================
function getAverage(numbers) {
  const Average = numbers.reduce(
    (acumulador, Element) => acumulador + Element,
    0
  );
  const average = Average / numbers.length;
  return average;
}

// =============================================================================
// 8. Dado el siguiente array, usa .reduce() para conseguir devolver un
// objeto con el número de veces que se repite cada string.
// =============================================================================
function getRepetitions(array) {
  const repetitions = {};
  array.reduce((accumulator, currentValue) => {
    if (repetitions[currentValue]) {
      repetitions[currentValue]++;
    } else {
      repetitions[currentValue] = 1;
    }
    return accumulator;
  }, {});

  return repetitions;
}

// =============================================================================
// 9. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero }
// =============================================================================
function getSumAges(people) {
  const totalAge = people.reduce(
    (accumulator, person) => accumulator + person.age,
    0
  );
  return totalAge;
}

// =============================================================================
// 10. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas que tienen perro.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero, hasDog: boolean }
// =============================================================================
function getSumDogAges(people) {
  const PeopleAgesDod = people.reduce((total, person) => {
    if (person.hasDog) {
      return total + person.age;
    } else {
      return total;
    }
  }, 0);
  return PeopleAgesDod;
}

// =============================================================================
// 11. Dado el siguiente array, usa .find() para encontrar el número 100.
// =============================================================================
function find100(numbers) {
  const CIEN = numbers.find(Element=> Element === 100);
  return CIEN;
}

// =============================================================================
// 12. Dado el siguiente array, usa .sort() para ordenar los números de menor
// a mayor.
// =============================================================================
function sortFromMinToMax(numbers) {
  const MinMax = numbers.slice().sort((a, b) => a - b);
  return MinMax;
}


// =============================================================================
// 13. Dado el siguiente array, usa .some() para saber si hay algún número
// par.
// =============================================================================
function thereAreEven(numbers) {
  const Even = numbers.some (Element=> Element % 2 === 0);
  return Even;
}

// =============================================================================
// 14. Dado el siguiente array, usa .every() para saber si todas las películas
// son del año 2018.
// El objecto pelicula tiene la siguiente forma
// { title: 'título', year: 2018 }
// =============================================================================
function areAllFilms2018(films) {
  const CINE = films.every ( Element=> Element === 2018);
  return CINE;
}

// =============================================================================
// 15. Dado el siguiente array, usa .join() para concatenar todos los
// nombres en una coma.
// =============================================================================
function joinNames(names) {
  const Connect = names.join (", ");
  return Connect;
}

// =============================================================================
// 16. Dado el siguiente array, usa .includes() para saber si 'Perro' está
// incluido en el array.
// =============================================================================
function thereIsADog(animals) {
  const Inlist = animals.includes ('Perro')
  return Inlist;
}

// =============================================================================
// 17. Dado el siguiente array, usa .reverse() para darle la vuelta a los
// elementos del array.
// =============================================================================
function reverseNumbers(numbers) {
  const Backwords = numbers.reverse ()
  return Backwords;
}

// =============================================================================
// 18. Dado el siguiente array, usa .from() para convertirlo en un array.
// =============================================================================
function fromStringToArray(string) {
  return Array.from(string);
}
