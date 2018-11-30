const apikey = "xow007-SJQmile_z3NcNGti0XMdOmFv01WEq1oF3Pmp5YE1THtJMeA5-Al0oc6Gcm-ddSfo5a1SnI90Sk8zh49jI_nz14hQrzDKiiNzecbV9-K96zNZ3ZdovJ2n_W3Yx";
const apiPath = "https://api.yelp.com/v3/businesses/search?"
const Yelp = {
  async search(term,location,sortBy){
    try{
      const url = `${apiPath}term=${term}&location=${location}&sort_by=${sortBy}`
      const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`,
        {
          headers: {
            Authorization:`Bearer ${apikey}`
          }
        });
      if (response.ok){
        const jsonResponse = await response.json();
        if(jsonResponse.businesses){
          return jsonResponse.businesses;
        }
      }
    } catch (error){
      console.log(error.message);
    }

  }
}
 Yelp.search("sushi","new york","rating").then(resolve=>console.log(resolve));
