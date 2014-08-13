function collect(collection, fn) {
  var Model;
  if(arguments.length > 2) {
    Model = arguments[1];
    fn    = arguments[2];
  } else if(collection.model) {
    Model = collection.model;
  } else {
    throw "No model specified";
  }

  var m = new Model;

  // Inefficient at the moment
  function update() {
    var data = fn(collection);
    m.set(data);
  }

  update();
  collection.on("add",    update);
  collection.on("remove", update);
  collection.on("reset",  update);
  return m;
}

module.exports = collect;
