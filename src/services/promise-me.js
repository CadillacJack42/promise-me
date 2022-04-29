/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export const getQuotes = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const json = await res.json();
  console.log(json);
  return json;
};
/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export const getThenQuotes = () => {
  const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then((obj) => console.log(obj));

  return result;
};

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export const tryGetQuotes = async () => {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
export const catchThenQuotes = () => {
  const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then((obj) => console.log(obj))
    .catch((error) => console.error(error));

  return result;
};

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */

export const finallyGetQuotes = async () => {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  } finally {
    console.log('All Done!');
  }
};

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
