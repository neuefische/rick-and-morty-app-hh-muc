export default function getCharacters(query) {
  if (query) {
    // copy query object and clean empty/unused properties
    const searchValues = { ...query };
    delete searchValues.toc;
    !searchValues.name && delete searchValues.name;

    // generate query string that fits https://rickandmortyapi.com/documentation/#filter-characters
    const queryString = Object.keys(searchValues)
      .map((key) => `${key}=${searchValues[key]}`)
      .join("&");
    console.log(queryString);

    return fetch(
      `https://rickandmortyapi.com/api/character/?${queryString}`
    ).then((res) => res.json());
  } else
    return fetch("https://rickandmortyapi.com/api/character/").then((res) =>
      res.json()
    );
}
