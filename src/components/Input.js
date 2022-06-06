import './Input.css'

function Input({type, name, style, placeholder, value, onChange, onKeyPress}){
    return(
            <input style={style} type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} onKeyPress={onKeyPress}/>  
    )
}

export default Input