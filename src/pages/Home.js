import Button from "../components/Button"

function Home(){
    const btnHome = {
        color: "red",
        backgroundColor: "green"
    }

    return(<>
        <p>Hello Home</p>
        <Button style={btnHome} value="Enviar" />
    </>)
}

export default Home