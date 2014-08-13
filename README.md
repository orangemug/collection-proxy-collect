# collection-proxy-collect [![Build Status](https://travis-ci.org/orangemug/collection-proxy-collect.svg?branch=master)](https://travis-ci.org/orangemug/collection-proxy-collect)
Collect collection data into a model and keep it in sync


## API
The API is as follows

    proxyCollect(collection, Model, fn);

Where `fn` must return the attributes to map to a model.


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
