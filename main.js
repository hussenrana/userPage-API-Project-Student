let apiManager = new APIManager();
let renderer = new Renderer();

const displayUser = function () {
  apiManager.displayData
    .getRandomUsers()
    .then((data) => {
      renderer.GenericTemplateGenerator(
        `.user-container`,
        `#userInfo`,
        data.results[0]
      );
      data.results.splice(0, 1);
      return data.results;
    })
    .then((data) => {
      renderer.GenericTemplateGenerator(
        `.friends-container`,
        `#userFriendsNameList`,
        data
      );
    })
    .then(() => {
      apiManager.displayData.getRandomQuote().then((data) => {
        renderer.GenericTemplateGenerator(
          `.quote-container`,
          `#kanyeQuote`,
          data
        );
      });
    })
    .then(() => {
      apiManager.displayData.getRandomPokemon().then((data) => {
        data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        renderer.GenericTemplateGenerator(
          `.pokemon-container`,
          `#pokemonInfo`,
          data
        );
      });
    })
    .then(() => {
      apiManager.displayData.getRandomBacon().then((data) => {
        renderer.GenericTemplateGenerator(
          `.meat-container`,
          `#baconParagraph`,
          data
        );
      });
    });
};

displayUser();
//const saveUser = function ()
//   //const first = apiManager.data.name.first;
//   apiManager.displayData.getRandomUsers();
//   console.log(apiManager.data);

//   const userData = {};
// };
