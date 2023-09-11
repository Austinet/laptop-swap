const inputs = [
    {
        id: "fullname",
        name: "fullname",
        type: "text",
        placeholder: "John Doe",
        errorMessage: "Full Name should be more than five letters",
        label: "Full Name",
        pattern : "^[A-Za-z ]{6,}$"
    },
    {
        id: "phone",
        name: "phone",
        type: "text",
        placeholder: "234000000000",
        errorMessage: "Please enter a vaild phone number",
        label: "Phone Number",
        pattern: "^[0-9]{11,}$"
    },
    {
        id: "email",
        name: "email",
        type: "email",
        placeholder: "mail@example.com",
        errorMessage: "Please enter a vaild email address",
        label: "Email"
    },
    {
        id: "address",
        name: "address",
        type: "text",
        placeholder: "230 Crescent Avenue",
        errorMessage: "Address should be more than five characters",
        label: "Address"
    }
]

  // const onChange = (e) => {
    //     setRegister({...register, [e.target.name]: e.target.value})
    // }

        {/* {
                inputs.map(input => {
                    return (
                       <SingleInput 
                       key={input.id}
                       register ={register}
                       {...input} 
                       onChange={onChange} 
                        />
                    )
                })
            } */}
     // let prx = "https://cors.iamnd.eu.org/?url=";


export default inputs