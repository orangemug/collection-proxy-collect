var assert       = require("assert");
var sinon        = require("sinon");
var Model        = require("backbone").Model;
var Collection   = require("backbone").Collection;
var proxyCollect = require("../");

// Sample collect fn
function total(collection) {
  var out = 0;
  collection.each(function(c) {
    out += c.get("num");
  });

  return {
    count: out
  };
}

describe("collection-proxy-collect", function() {
  beforeEach(function() {
    this.collection = new Collection([
      {num: 1},
      {num: 2},
      {num: 3},
      {num: 4}
    ]);
  });

  it("should instantiate with 3 args(collection, Model, fn)", function() {
    var m = proxyCollect(this.collection, Model, total);
    assert.equal(m.get("count"), 10);
  });

  it("should return model with collected data", function() {
    var m = proxyCollect(this.collection, Model, total);
    assert.equal(m.get("count"), 10);
  });

  it("should track add", function() {
    var m = proxyCollect(this.collection, Model, total);
    this.collection.add({num: 3})
    assert.equal(m.get("count"), 13);
  });

  it("should track remove", function() {
    var m = proxyCollect(this.collection, Model, total);
    this.collection.remove(
      this.collection.at(3)
    );
    assert.equal(m.get("count"), 6);
  });

  it("should track reset", function() {
    var m = proxyCollect(this.collection, Model, total);
    this.collection.reset([
      {num: 3},
      {num: 20}
    ]);
    assert.equal(m.get("count"), 23);
  });

});

