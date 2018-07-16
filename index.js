// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  newObj = {...driver};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  newObj = {...driver}
  mutatedObject = delete newObj.key
  return mutatedObject
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver;
}
