/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
  let nameArray = [];
  for (let person in people){
    nameArray.push(people[person].name);
  }
  return nameArray;
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
function findPersonByName(people, name) {
  for (let person in people){
    if (people[person].name.toLowerCase() == name.toLowerCase()){
      return people[person];
    }
  }
  return null;
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  let under25 = [];
  for (let person in people){
    if (people[person].age < 25){
      under25.push(people[person]);
    }
  }
  return under25;
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
  let gmailArray = [];
  for (let person in people){
    if (people[person].email.includes('gmail.com')) gmailArray.push(people[person]);
  }
  return gmailArray;
}

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
