import React,{useEffect, useState} from 'react'

const Form = () => {
const [form,setForm]=useState({
    username:"",
    email:"",
    password:"",
    age:0,
    isIndian:false,
    // resume:"",
})
const onChange=(e)=>{
    let {name,type,value,checked,files}=e.target;

    if(type==='checkbox'){
        setForm({
            ...form,[name]:checked,
        })



    }else if(type==="file"){
        
            setForm({
                ...form,[name]:files,
            })
    } 
    else{
        setForm({
            ...form,[name]:value,
        })
    }
    
    
    
    
    
   


// console.log(form)
    // console.log(value,type,checked)
// console.log(e.target)
}

useEffect(()=>{
    // console.log(form);

},[form])

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(form)
}



  return (
    <div>Form

<form onSubmit={handleSubmit}>
    <div>
        <label>Name</label>
        <input type="text"name="username" placeholder='Enter name...' value={form.name} 
                     onChange={onChange}
                    //  onKeyDown={onChange}
                    //  onKeyUp={onChange}
                    //  onClick={onChange}
                     
                     />
   
</div>
<div>
        <label>Email</label>
        <input type="email"  name="email"placeholder='Enter Email...' 
        value={form.email}
        onChange={onChange}
        
        
        />
    </div>
    <div>
        <label>Password</label>
        <input type="Password"name="password" placeholder='Enter pasword...'
        value={form.password}
        onChange={onChange} />
    </div>
    <div>
        <label>Age:</label>
        <input type="number"name="age" placeholder='Age...'
             value={form.age}
             onChange={onChange} />
    </div>
    <div>
        <label>isIndian:</label>
        <input type="checkbox" 
        name='isIndian'
             value={form.isIndian}
             onChange={onChange} />
    </div>

    <div>
        <label>File</label>
        <input type="file" 
        name='resume'
             files={form.resume}
             onChange={onChange} />
    </div>

    <button type='submit'>
        Submit
        
    </button>
    </form>
    </div>
  )
}

export default Form