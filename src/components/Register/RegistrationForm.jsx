import {useState, useRef, useContext} from 'react'
import './register.css'
import upload from '/src/assets/register/upload.svg'
import {ModalContext} from '../App/App'

const defaultValues = {
    fullname: "",
    phone: "",
    email: "",
    address: "",
    laptop: "Select Laptop Type",
    receipt: ""
}

const RegistrationForm = () => {
    const [toggle, setToggle] = useState(false)
    const [register, setRegister] = useState(defaultValues)
    const fileInput = useRef(null)
    const handleModal = useContext(ModalContext)
    const [focused, setFocused] = useState("false")

    

    const handleFocus = (e) => {
        e.target.className = "true"
    }

    const selectSpecification = (name) => {
        setRegister({...register, laptop: name})
        setToggle(false)
    }

    const collectFile = () => {
        fileInput.current.click()
    }

    const submitForm = (e) => {
        e.preventDefault()

        if (register.laptop === "Select Laptop Type")  {
            alert("Select Laptop Type")
            return
        } 
        setFocused("false")
                
        const url = new URL('https://testbackend-ya01.onrender.com/api/v1/users/register')
        Object.keys(register).forEach(key => url.searchParams.append(key, register[key]))
        const formData = new FormData()
        formData.append("receipt", register.receipt)

        fetch(url, {
            method: 'POST',  
            headers: {
                'accept': 'application/json',
            },
            body: formData
         })
        .then(res => res.json())
        .then(data =>  {
               setRegister(defaultValues)
               handleModal(true)
               console.log(data)
         })
        .catch((err) => {
            console.log("Error Message: ", err.message)
        })
    }

  return (
    <div className="form-container">
        <div className="form-header">
           <h2>Register with us</h2>
           <p>Swap your old laptop for a new one</p>
        </div>
        <form onSubmit={submitForm}>
            <div className="input-frame">
                <label htmlFor="fullname">Full name</label>
                <input 
                  type="text" 
                  name='fullname' 
                  id='fullname'
                  placeholder='John Doe' 
                  value={register.fullname} 
                  pattern = "^[A-Za-z ]{6,}$"
                  onChange={(e)=> setRegister({...register, fullname: e.target.value})}
                  required
                  onBlur={(e)=> handleFocus(e)}
                  className={focused}
                  />
                <span className='error-message'>Full Name should be more than five letters</span>
            </div>
            <div className="input-frame">
                <label htmlFor="phone">Phone Number</label>
                <input 
                   type="text" 
                   name='phone' 
                   id='phone' 
                   placeholder='+234000000000'
                   value={register.phone} 
                   pattern="^[+0-9]{11,}$"
                   onChange={(e)=> setRegister({...register, phone: e.target.value})}
                   required
                   onBlur={(e)=> handleFocus(e)}
                   className={focused}
                   />
                <span className='error-message'>Please enter a valid phone number</span>
            </div>
            <div className="input-frame">
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name='email' 
                id='email'
                placeholder='mail@example.com'
                value={register.email} 
                onChange={(e)=> setRegister({...register, email: e.target.value})}
                onBlur={(e)=> handleFocus(e)}
                className={focused}
                required
                />
                <span className='error-message'>Please enter a valid email</span>
            </div>
            <div className="input-frame">
                <label htmlFor="address">Address</label>
                <input 
                type="text" 
                name='address' 
                id='address' 
                placeholder='230 Crescent Avenue'
                value={register.address} 
                onChange={(e)=> setRegister({...register, address: e.target.value})}
                onBlur={(e)=> handleFocus(e)}
                className={focused}
                required
               />
                <span className='error-message'>Address should be more than five characters</span>
            </div>
            <div className="input-frame">
                <label htmlFor="specification">Laptop Specification</label>
                <div id="specification">
                    <p className='flex-between bg-white' onClick={()=> setToggle(!toggle)}><span>{register.laptop}</span> <i className="fas fa-chevron-down"></i></p>
                   {toggle &&
                     <ul id="select-list" className='bg-white'>
                       <li onClick={()=> selectSpecification("HP")}>HP</li>
                       <li onClick={()=> selectSpecification("DELL")}>DELL</li>
                       <li onClick={()=> selectSpecification("ACER")}>ACER</li>
                       <li onClick={()=> selectSpecification("MACBOOK")}>MACBOOK</li>
                     </ul>
                   }
                   <span className='error-message'>Name is invalid</span>
              </div>
            </div>
            <div className="input-frame file">
                <label htmlFor="receipt">Upload receipt of old laptop</label>
                <input 
                type="file" 
                accept="image/*"
                name='receipt' 
                id='receipt' 
                ref={fileInput} 
                onChange={(e)=> setRegister({...register, receipt: e.target.files[0]})}
                required
                />
                <span className='error-message'>File type is invalid</span>
                <div className="file-upload bg-white" onClick={collectFile}>
                    <img src={upload} alt="uplaod icon" />
                    <span>{register.receipt.name && register.receipt.name}</span>
                </div>      
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default RegistrationForm