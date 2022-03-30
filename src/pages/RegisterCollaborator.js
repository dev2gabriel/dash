import Container from '../containers/Container'
import Legend from '../components/Legend'
import Input from '../components/Input'
import Button from '../components/Button'
import styles from './RegisterCollaborator.module.css'
import SearchIcon from '@mui/icons-material/Search';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function RegisterCollaborator(){

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
                <h1 className={styles.title_register}>Cadastrar Colaborador</h1>
                <form action="#" onSubmit={formPreventDefault}>
                    <div className={styles.line}>
                        <Legend value="Nome Completo" style={styledLegend}/>
                        <Input type="text" name="name" id="name" style={styledInput}/>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Foto" style={styledLegend}/>
                            <label htmlFor="img-user" className={styles.input_img}>Enviar arquivo <FileUploadIcon /></label>
                            <Input type="file" name="img-user" id="img-user" style={styledFile} />
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Senha" style={styledLegend}/>
                            <Input type="password" name="password" id="password" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Empresa" style={styledLegend}/>
                            <select name="company" id="company" className={styles.select_pers}>
                                <option value="#" selected disabled>Selecione a empresa</option>
                                <option value="Stra">Stra</option>
                                <option value="Grupo">Grupo</option>
                            </select>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="CPF" style={styledLegend}/>  
                            <Input type="text" name="cpf" id="cpf" style={styledInput}/>  
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="RG" style={styledLegend}/>
                            <Input type="text" name="rg" id="rg" style={styledInput}/>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Cargo" style={styledLegend}/>
                            <Input type="text" name="position" id="position" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Contrato" style={styledLegend}/>
                            <select name="contract" id="contract" className={styles.select_pers}>
                                <option value="#" selected disabled>Tipo de contrato</option>
                                <option value="Efetivo">Efetivo</option>
                                <option value="Estágio">Estágio</option>
                                <option value="PJ">PJ</option>
                                <option value="Tercerizado">Tercerizado</option>
                            </select>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Permissão" style={styledLegend}/>
                            <select name="permission" id="permission" className={styles.select_pers}>
                                <option value="#" selected disabled>Tipo de permissão</option>
                                <option value="Admin">Admin</option>
                                <option value="Colaborador">Colaborador</option>
                                <option value="Gerencia">Gerencia</option>
                                <option value="Supervisor">Supervisor</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Data de Admissão" style={styledLegend}/>
                            <Input type="date" name="date-admis" id="date-admis" style={styledInput}/>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Data de Nascimento" style={styledLegend}/>
                            <Input type="date" name="date-birth" id="date-birth" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Salário Atual" style={styledLegend}/>
                            <Input type="text" name="salary" id="salary" style={styledInput}/>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Gestor" style={styledLegend}/>
                            <Input type="text" name="manager" id="manager" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="CEP" style={styledLegend}/>
                            <div className={styles.line_icon}>
                                <Input type="text" name="cep" id="cep" style={styledInput}/>
                                <a href="#"><SearchIcon /></a>
                            </div>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Endereço" style={styledLegend}/>
                            <Input type="text" name="address" id="address" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Número" style={styledLegend}/>
                            <Input type="number" name="address-number" id="address-number" style={styledInput}/>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Bairro" style={styledLegend}/>
                            <Input type="text" name="district" id="district" style={styledInput}/>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Cidade" style={styledLegend}/>
                            <Input type="text" name="city" id="city" style={styledInput}/>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Estado" style={styledLegend}/>
                            <Input type="text" name="state" id="state" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Email Empresarial" style={styledLegend}/>
                            <Input type="email" name="email" id="email" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Telefone" style={styledLegend}/>
                            <Input type="text" name="phone" id="phone" style={styledInput}/>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Ramal" style={styledLegend}/>
                            <Input type="number" name="ramal" id="ramal" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <h1 className={styles.title_register}>Contato de Emergência</h1>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Nome" style={styledLegend}/>
                            <Input type="text" name="parent-name" id="parent-name" style={styledInput}/>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Whatsapp" style={styledLegend}/>
                            <Input type="text" name="parent-wpp" id="parent-wpp" style={styledInput}/>
                        </div>
                        <div className={styles.line_flex}>
                            <Legend value="Parentesco" style={styledLegend}/>
                            <Input type="text" name="parent" id="parent" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Button type="submit" style={styledButton} value="Cadastrar" />
                        </div>
                        <div className={styles.line_flex}>
                            <a onClick={() => document.location.reload(true)} style={styledButtonClear}>Limpar Campos</a>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default RegisterCollaborator