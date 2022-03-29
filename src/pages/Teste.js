import Button from "../components/Button"
import Input from "../components/Input"
import Legend from "../components/Legend"

function Teste(){
    
    const btnHome = {
        color: "red",
        backgroundColor: "green"
    }

    const inputUser = {
        color: "red",
        backgroundColor: "green"
    }

    const legendStl = {
        color: "red",
        backgroundColor: "green"
    }

    return(<>
        <p>Hello Home</p>
        <Button style={btnHome} value="Enviar" />
        <Legend style={legendStl} value="Email" />
        <Input type="text" style={inputUser} name="user" id="user" placeholder="Insira seu nome de usuario"/>
    </>)
}

export default Teste