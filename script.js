
$(function(){
    trendingMovies();
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
export async function trendingMovies() {
    const result = await axios({
        method: 'GET',
        url: 'https://comp426-1fa20.cs.unc.edu/a08/heroes',
    });
    console.log(result);
    return result.data;
};