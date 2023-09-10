import {useState, useRef} from 'react'
import './register.css'
import upload from './upload.svg'

const defaultValues = {
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    laptopSpec: "Select Laptop Type",
    laptopReceipt: {}
}

const RegistrationForm = () => {
    const [toggle, setToggle] = useState(false)
    const [register, setRegister] = useState(defaultValues)
    const fileInput = useRef(null)

    const selectSpecification = (name) => {
        setRegister({...register, laptopSpec: name})
        setToggle(false)
    }

    const collectFile = () => {
        fileInput.current.click()
    }
  
    const submitForm = (e) => {
        e.preventDefault()
        console.log(register)
        const formData = new FormData()
        // formData.append("user", register)
        for (const [key, value] of Object.entries(register)){
            formData.append(key, value)
        }

        // for (const [key, value] of formData.entries()){
        //     console.log(key, value)
        // }
        fetch("https://testbackend-ya01.onrender.com/api/v1/users/register", {
            // mode: "no-cors",
            method: "POST",
            body: formData,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                 "Access-Control-Allow-Origin": "*",
            //    'Content-Type': 'application/json',
            //     "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
           }
        //    ,
        //     header: {
        //         'Access-Control-Allow-Origin': '*'
        //     }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

  return (
    <div className="form-container">
        <div className="form-header">
           <h2>Register with us</h2>
           <p>Swap your old laptop for a new one</p>
        </div>
        <form onSubmit={submitForm}>
            <div className="input-frame">
                <label htmlFor="fullName">Full name</label>
                <input 
                  type="text" 
                  name='fullName' 
                  id='fullName'
                  placeholder='John Doe' 
                  value={register.fullName} 
                  onChange={(e)=> setRegister({...register, fullName: e.target.value})}
                  />
            </div>
            <div className="input-frame">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                   type="text" 
                   name='phoneNumber' 
                   id='phoneNumber' 
                   placeholder='+234000000000'
                   value={register.phoneNumber} 
                   onChange={(e)=> setRegister({...register, phoneNumber: e.target.value})}/>
            </div>
            <div className="input-frame">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' placeholder='mail@example.com'
                 value={register.email} 
                 onChange={(e)=> setRegister({...register, email: e.target.value})}/>
            </div>
            <div className="input-frame">
                <label htmlFor="address">Address</label>
                <input type="text" name='address' id='address' placeholder='230 Crescent Avenue'
                 value={register.address} 
                 onChange={(e)=> setRegister({...register, address: e.target.value})}/>
            </div>
            <div className="input-frame">
                <label htmlFor="specification">Laptop Specification</label>
                <div id="specification">
                    <p onClick={()=> setToggle(!toggle)}><span>{register.laptopSpec}</span> <i className="fas fa-chevron-down">v</i></p>
                   {toggle &&
                     <ul id="select-list">
                       <li onClick={()=> selectSpecification("HP")}>HP</li>
                       <li onClick={()=> selectSpecification("DELL")}>DELL</li>
                       <li onClick={()=> selectSpecification("ACER")}>ACER</li>
                       <li onClick={()=> selectSpecification("MACBOOK")}>MACBOOK</li>
                     </ul>
                   }
              </div>
            </div>
            <div className="input-frame">
                <label htmlFor="receipt">Upload receipt of old laptop</label>
                <input type="file" accept="image/*" hidden name='receipt' id='receipt' ref={fileInput} onChange={(e)=> setRegister({...register, laptopReceipt: e.target.files[0]})} />
                <div className="file-upload" onClick={collectFile}>
                    <img src={upload} alt="uplaod icon" />
                </div>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default RegistrationForm