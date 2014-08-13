# collection-proxy-collect
Collect collection data into a model and keep it in sync


## API
The api is as follows

    proxy.collect(collection, Model, fn);

Or if your collection library exposes `model` on the instance (like backbone.js does), you can ommit the `Model` param


## Example
In this simple (and pointless) example, we count all the `num` fields in a collection.

    proxyCollect(collection, Model, function(model) {
      var out = 0;
      collection.each(function(c) {
        out += c.get("num");
      });

      return {
        count: out
      };
    });


## License
MIT
