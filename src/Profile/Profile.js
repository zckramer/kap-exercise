import React from 'react';
import Link from '../Link/Link';
import axios from 'axios';

const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/AAPL"

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            company: []
        }
    }

    componentDidMount() {
        axios.get(BASE_URL)
        .then( response => {
            console.log( response );
            this.setState({company: response.data});
        })
    //     fetch(BASE_URL)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log(result)
    //                 this.setState({company: result.data})
    //                 // this.setState({
    //                 //     isLoaded: true,
    //                 //     items: result.items
    //                 // })
    //         })
    // }
    }

    render() {
        const company = this.state.company.map(profile => {
            return <Profile name={profile.name} website={profile.website} data={profile.data} price={profile.price}/>;
        }

        );

        return (
            <div className="Profile">
                {company}
                <p>Company Name : {Link(company.website, company.name)}</p>
                <p>+/- : {company.data}</p>
                <p>Current Price : {company.price}</p>
            </div>
        )
    // const { error, isLoaded } = this.state;
        // const { company } = this.state.company.map( result => {
        //     return <Profile />;

        // }
        // );
        // if (error) {
        // return <div>Error: {error.message}</div>;
        // } else if (!isLoaded){
        //     return <div>Loading...</div>;
        // } else {
        //     return (
        //         <div className="Profile">
        //             {company}
        //             <p>Company Name : {Link(company.website, company.name)}</p>
        //             <p>+/- : {company.data}</p>
        //             <p>Current Price : {company.price}</p>
        //         </div>
        //     )
        // }
    }
}

export default Profile;

// const profile = (props) => {
//     let data;
//     function getProfile () {
//         fetch({BASE_URL})
//         .then(res => res.json())
//         .then(company => {
//             data = company
//             console.log(data);
//         })
//     }
//     getProfile();
//     return (
//         <div className="Profile">
//             <p>Company Name : Link(${props.website}, ${props.name})</p>
//             <p>+/- : {props.data}</p>
//             <p>Current Price : {props.price}</p>
//         </div>
//     )
// }
// export default profile;

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
  