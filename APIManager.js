//This is the class that will manage all your APIs
class APIManager {
  constructor() {
    this.data = {};
  }

  displayData = {
    fetchData: function (url) {
      return $.ajax({
        method: "GET",
        url: `${url}`,
      });
    },

    getRandomUsers: function () {
      this.data = this.fetchData(
        `https://randomuser.me/api/?format=json&results=7`
      );
      return this.data;
    },

    getRandomQuote: function () {
      this.data = this.fetchData(`https://api.kanye.rest`);
      return this.data;
    },

    getRandomPokemon: function () {
      let randomNumber = Math.floor(Math.random() * 949) + 1;
      this.data = this.fetchData(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
      );
      return this.data;
    },

    getRandomBacon: function () {
      this.data = this.fetchData(
        `https://baconipsum.com/api/?type=all-meat&sentences=1`
      );
      return this.data;
    },
  };
}
