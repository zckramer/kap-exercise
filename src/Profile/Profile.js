import React from 'react';
import Link from '../Link/Link';
import HTML from '../HTML/HTML';

const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/AAPL"

const profile = (props) => {
    let data;
    function getProfile () {
        fetch({BASE_URL})
        .then(res => res.json())
        .then(company => {
            data = company
            console.log(data);
        })
    }
    getProfile();
    return (
        <div className="Profile">
            <p>Company Name : {props.name}</p>
            <p>+/- : {props.data}</p>
            <p>Current Price : {props.price}</p>
            <p>Website : {Link(`${props.website}`, `Apple Website`)}</p>
        </div>
    )
}
export default profile;

// function SingleRecipe (props) {
//     const [fetchResponse, setFetchResponse] = useState({});
  
//     useEffect(() => {
//       function getRecipe() {
//         setFetchResponse(getRecipeData)
//       }
  
//     getRecipe()
  
//     })
  
//     const [isLoading, setIsLoading] = useState(false);
    
//     let data;
//     function getRecipeData () {
//       setIsLoading(true)
//       fetch(`${BASE_URL}${props.recipeId}`) // check on BASE_URL routing for singular recipe
//       .then(res => res.json())
//       .then(recipe => {
//         data = recipe
//         setIsLoading(false)
//       })
//       return data
//     }
  
//       return( 
//         <> {isLoading ? (<div>Fetching Data...</div>
//           ) : (
//           <article className="single-recipe">
//             <RecipeCard 
//               name={props.name}    
//               image={props.image} 
//               recipeId={props._id}
//             />
//             <h2 className="single-recipe__title">{props.name}</h2>
//             <img alt="Cocktail" className="single-recipe__image" src={props.image} />
//           </article>  
//           )}
//         </>    
//       )
//   }
  