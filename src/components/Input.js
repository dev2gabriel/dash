import './Input.css'

function Input({type, name, style, placeholder, value, onChange}){
    return(
            <input style={style} type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange}/>  
    )
}

export default Input