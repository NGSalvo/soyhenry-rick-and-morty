const hasAllProperties = (object, requiredProperties) => {
  // const requiredProperties = {
  //   author: true,
  //   title: true,
  //   contents: true
  // };

  for (const prop in requiredProperties) {
    if ((!Object.hasOwn(prop) && object[prop] === undefined ) || object[prop] === null ) {
      return false;
    }
  }

  return true;
}

module.exports = {
  hasAllProperties
}