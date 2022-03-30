import Container from '../../containers/Container'
import Legend from '../../components/Legend'
import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from './RequestVacation.module.css'


function RequestVacation(){

    function formPreventDefault(e){
        e.preventDefault();
    }

    const styledInput = {
        width: "100%",
        border: "1px solid lightgray",
        padding: "8px",
        borderRadius: "5px",
        fontSize: "16px",
        outline: "none",
    }

    const styledFile = {
        display: "none"
    }

    const styledLegend = {
        marginBottom: "10px"
    }

    const styledContainer = {
        padding: "30px 60px"
    }

    const styledButtonClear = {
        width: "100%",
        border: "0",
        padding: "8px",
        borderRadius: "5px",
        fontSize: "16px",
        outline: "none",
        backgroundColor: "var(--azul-grupo)",
        color: "white",
        marginTop: "10px",
        outline: "none",
        cursor: "pointer",
        textDecoration: "none"
    }

    const styledButton = {
        width: "100%",
        padding: "8px",
        borderRadius: "5px",
        fontSize: "16px",
        outline: "none",
        color: "white",
        backgroundColor: "var(--verde-grupo)",
        marginTop: "10px",
        outline: "none",
        border: "0",
        cursor: "pointer"
    }

    return(
        <div className={styles.register_collaborator}>
            <Container style={styledContainer}>
                <h1 className={styles.title_register}>Solicitar Férias</h1>
                <form action="#" onSubmit={formPreventDefault}>
                    <div className={styles.line}>
                        <Legend value="Nome Completo" style={styledLegend}/>
                        <Input type="text" name="name" id="name" style={styledInput}/>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Começo das Férias" style={styledLegend}/>
                            <Input type="date" name="date-vacation-on" id="date-vacation-on" style={styledInput}/>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Retorno das Férias" style={styledLegend}/>
                            <Input type="date" name="date-vacation-off" id="date-vacation-off" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Button type="submit" style={styledButton} value="Cadastrar" />
                        </div>
                        <div className={styles.line_flex}>
                            <a onClick={() => document.location.reload(true)} style={styledButtonClear}>Fechar Modal</a>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default RequestVacation