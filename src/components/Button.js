import './Button.css'

function Button({id, value, style, onClick}){
    return(<button id={id} style={style} onClick={onClick}>{value}</button>)
}

export default Button