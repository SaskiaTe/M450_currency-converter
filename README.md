# Currency Converter

## API

Run the server:

    $ deno run --allow-net src/server.ts
    Listening on http://localhost:8000/

Define an exchange rate (requires authentication):

    $ curl -X PUT -u banker:iLikeMoney http://localhost:8000/rate/usd/chf/0.81

Show a conversion rate (reverse rates are computed automatically):

    $ curl -X GET -u banker:iLikeMoney http://localhost:8000/rate/chf/usd
    {"rate":1.2345679012345678}

Convert a currency amount:

    $ curl -X GET http://localhost:8000/conversion/usd/chf/100
    {"result":81}

Remove an exchange rate (requires authentication):

    $ curl -X DELETE -u banker:iLikeMoney http://localhost:8000/rate/usd/chf

## CLI

Define a file containing exchange rates:

```json
[
  { "fromCurrency": "usd", "toCurrency": "chf", "exchangeRate": 0.81 },
  { "fromCurrency": "eur", "toCurrency": "chf", "exchangeRate": 0.94 },
  { "fromCurrency": "chf", "toCurrency": "gbp", "exchangeRate": 0.93 }
]
```

Run the command line program:

    $ deno run --allow-read src/cli.ts --rates exchange-rates.json --from chf --to usd --amount 1900
    2345.679012345679

## Tests

Run the tests:

    $ deno test

Report test coverage (exports an HTML report to the `codecov/` folder):

    $ deno test --coverage=codecov

## Ideas for Exercises

- Test-Driven Development: Compute transitive conversions. If an exchange rate from `chf` to `eur`, `eur` to `usd`, and from `usd` to `gbp` is given, a conversion from `chf` to `gbp` shall be possible, too.
- End-to-End Tests: Run the server and test against the API using shell scripts and `curl`.
- Mass Test: Generate a file with random numbers, process it using the server or the CLI, and store the results in another file. Write an `awk` script that performs the same conversions into another file, and `diff` those results.
