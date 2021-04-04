const driver = {};
// Returns a driver with the original key value pairs and the new key value pair does not modify the original driver, but rather returns a clone with the new data
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

// updates `driver` with the given `key` and `value` (Destructive) and returns the entire updated driver "name = Sam address = 11 Broadway"
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

// Deletes `key` from a clone of driver and returns the new driver (Non-Destructive) "Does not modify the original driver"
function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

// Returns driver without the delete key/value pair "Modifies the original driver"
 function destructivelyDeleteFromDriverByKey(driver, key) {
   delete driver[key];

  return driver;
 }
