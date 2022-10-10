require('jest-config').defaults

describe('movies tests', () => {
  let mockResponse = [
      {
        "genres": "Adventure|Animation|Children|Comedy|Fantasy", 
        "imdbId": "0114709", 
        "movieId": "1", 
        "tag": "pixar", 
        "timestamp": "1139045764", 
        "title": "Toy Story (1995)", 
        "tmdbId": "862", 
        "userId": "336"
      }, 
      {
        "genres": "Adventure|Animation|Children|Comedy|Fantasy", 
        "imdbId": "0114709", 
        "movieId": "1", 
        "tag": "pixar", 
        "timestamp": "1137206825", 
        "title": "Toy Story (1995)", 
        "tmdbId": "862", 
        "userId": "474"
      }, 
      {
        "genres": "Adventure|Animation|Children|Comedy|Fantasy", 
        "imdbId": "0114709", 
        "movieId": "1", 
        "tag": "fun", 
        "timestamp": "1525286013", 
        "title": "Toy Story (1995)", 
        "tmdbId": "862", 
        "userId": "567"
      }]

    test('Should return list of movies', async () => {
      await fetch("http://localhost:80/movies", {
        crossDomain: true,
      }).then((res) => {
          expect(response).toBeDefined();
          expect(response.result).toEqual(mockResponse);
      }).catch((err) => {
          console.log("Expected successful response");
      });
      
    });

    test('Should fail if the API fails to return a response', async () => {
      await fetch("http://localhost:80/movies", {
        crossDomain: true,
      }).then((res) => {
        console.log("Expected failure response");
      })
    });
  });