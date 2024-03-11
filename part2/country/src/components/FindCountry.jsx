import { useState } from "react";

const FindCountry = (props) => {
    const [findCountryName,setFindCountryName]=useState(); 
    const [countryExistAlert,setCountryExistAlert]=useState();

const findCountry = (event) => {
    event.preventDefault();
    let notExists = true; 
    for (let i=0; i<props.countryList.lenght;i++){
        if(props.countryList[i].name === findCountryName){
            setCountryExistAlert(
                JSON.stringify({
                    name: props.countryList[i].name
                })
            )
            notExists=false; 

        }
    }

    if (notExists) {
        setCountryExistAlert(`${findCountryName}is not on the database`);
    }
}

const handleFindCountryChange = (event) => {
    setFindCountryName(event.target.value)
}

return (
    <form onSubmit={findCountry}>
    <div>
      Find a country:{" "}
      <input value={findCountryName} onChange={handleFindCountryChange} />
    </div>
    <div>
      <button type="submit">Find country</button>
      {countryExistAlert}
    </div>
  </form>
)

}

export default FindCountry; 