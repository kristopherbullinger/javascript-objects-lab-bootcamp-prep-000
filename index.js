var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 var b = Object.assign({},object, {key, value})
 return b
}