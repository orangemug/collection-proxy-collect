function collect(collection, Model, fn) {
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
  collection.on("change", update);
  return m;
}

module.exports = collect;
