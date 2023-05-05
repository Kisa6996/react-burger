function getIngredients(ApiUrl, setError) {
  return fetch(`${ApiUrl}`).then((res) =>
    res.ok ? res.json() : res.json().then(setError('Ошибка'))
  );
}

export default getIngredients;
