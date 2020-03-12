const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/AAPL"

let data;
function getData () {
    fetch({BASE_URL})
    .then(res => res.json())
    .then(company => {
        data = company
    })
    console.log(data)
    return data;
}
export default getData;