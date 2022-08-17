import InputField from "../InputField/InputField"



const Content = () => {









    // API Key: b42b74623d0e404353804bd0dcd3832a

    const getData = (searchName) => {




        fetch(`http://api.countrylayer.com/v2/name/${searchName}?access_key=b42b74623d0e404353804bd0dcd3832a`)
        .then((response) => response.json())
        .then((data) => console.log(data))
    }


    // getData()

    https://api.countrylayer.com/v2/regionalbloc/

    return (
        <div className="content-section">
            <h1>Country Project</h1>
            <InputField 
                getData={getData}
            />

        </div>

    )








}

export default Content;