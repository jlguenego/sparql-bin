# SPARQL bin

Command line utility for making SPARQL request from a command line.

## Installation

```
npm i -g sparql-bin
```

## Example

Create a file `test.sparql.txt` with a wikidata SPARQL request inside.

```
# The rivers which go to the Seine.
SELECT ?river ?riverLabel ?longueur ?superficie
WHERE 
{
  ?river wdt:P403 wd:Q1471;
         wdt:P2043 ?longueur;
         wdt:P2053 ?superficie.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
ORDER BY DESC(?superficie)
```

Then do
```
sparql test.sparql.txt
```

And you get the result in CSV format.

## File

You can add a second argument to the command. For instance:
```
sparql test.sparql.txt answer.csv
```

## Limitations

You can only reach wikidata. The endpoint is hardcoded.

## Author

Jean-Louis GUENEGO