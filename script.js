$(function(){
    var APIKEY = "a974be00eb79053c00d4b6b6372ab763a0da9c17b1c75387cc19bc5d642b268d";
    trendingMovies(APIKEY);
});
/**
 * This function should use axios to make a GET request to the following url:
 *   https://comp426-1fa20.cs.unc.edu/a08/heroes
 *
 * The axios request should be "await"ed, and once the response is available,
 *   the body of the HTTP response (which is in JSON format) should be returned
 *   as a JavaScript Object.
 *
 * @returns  {Object}  The body of the HTTP response.
 */
export async function trendingMovies(APIKEY) {

    console.log("ran this far at least");
    var request = new XMLHttpRequest();
    //request.open('GET', 'https://private-anon-08f2abf737-trakt.apiary-mock.com/movies/trending');
    request.open('GET', 'https://api.trakt.tv/movies/trending');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('trakt-api-version', '2');
    request.setRequestHeader('trakt-api-key', APIKEY);
    
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
      }
    };
    
    request.send();
};

async function testTrending(APIKEY){
    console.log("test");
    const result = await axios({
        method: 'GET',
        //url: 'https://private-anon-08f2abf737-trakt.apiary-mock.com/movies/trending',
        url: "https://api.trakt.tv/movies/trending",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            "trakt-api-version": "2",
            "trakt-api-key": APIKEY,
        },
    });
    console.log(result);
    return result.data;
}