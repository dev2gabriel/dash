import Legend from '../../components/Legend'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './RegisterCollaborator.css'
import SearchIcon from '@mui/icons-material/Search';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function RegisterCollaborator(){
    function formPreventDefault(e){
        e.preventDefault();
    }

    function handleClearFields(e){
        e.preventDefault();
        let inputs = document.querySelectorAll('input');
        for(let i=0; i<inputs.length; i++){
            inputs[i].value = "";
        }
    }
  
    return(
        <div className="register_collaborator">
            <div className="container_collaborator">
                <h1 className="title_register">Cadastrar Colaborador</h1>
                <form className="form-register" action="#" onSubmit={formPreventDefault}>
                    <div className="line">
                        <Legend value="Nome Completo"/>
                        <Input type="text" name="name" id="name"/>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="Foto"/>
                            <label htmlFor="img-user" className="input_img">Enviar arquivo <FileUploadIcon /></label>
                            <Input type="file" name="img-user" id="img-user" />
                        </div>
                        <div className="line_flex">
                            <Legend value="Senha"/>
                            <Input type="password" name="password" id="password"/>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="Empresa"/>
                            <select name="company" id="company" className="select_pers">
                                <option value="#" selected disabled>Selecione a empresa</option>
                                <option value="Stra">Stra</option>
                                <option value="Grupo">Grupo</option>
                            </select>
                        </div>
                        <div className="line_flex">
                            <Legend value="CPF"/>  
                            <Input type="text" name="cpf" id="cpf"/>  
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="RG"/>
                            <Input type="text" name="rg" id="rg"/>
                        </div>
                        <div className="line_flex">
                            <Legend value="Cargo"/>
                            <Input type="text" name="position" id="position"/>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="Contrato"/>
                            <select name="contract" id="contract" className="select_pers">
                                <option value="#" selected disabled>Tipo de contrato</option>
                                <option value="Efetivo">Efetivo</option>
                                <option value="Estágio">Estágio</option>
                                <option value="PJ">PJ</option>
                                <option value="Tercerizado">Tercerizado</option>
                            </select>
                        </div>
                        <div className="line_flex">
                            <Legend value="Permissão"/>
                            <select name="permission" id="permission" className="select_pers">
                                <option value="#" selected disabled>Tipo de permissão</option>
                                <option value="Admin">Admin</option>
                                <option value="Colaborador">Colaborador</option>
                                <option value="Gerencia">Gerencia</option>
                                <option value="Supervisor">Supervisor</option>
                            </select>
                        </div>
                        <div className="line_flex">
                            <Legend value="Departamento"/>
                            <select name="department" id="department" className="select_pers">
                                <option value="#" selected disabled>Departamento</option>
                                <option value="Adiministração">Admin</option>
                                <option value="Tecnologia">Colaborador</option>
                                <option value="Gerencia">Gerencia</option>
                                <option value="Supervisor">Supervisor</option>
                            </select>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="Data de Admissão"/>
                            <Input type="date" name="date-admis" id="date-admis"/>
                        </div>
                        <div className="line_flex">
                            <Legend value="Data de Nascimento"/>
                            <Input type="date" name="date-birth" id="date-birth"/>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="Salário Atual"/>
                            <Input type="text" name="salary" id="salary"/>
                        </div>
                        <div className="line_flex">
                            <Legend value="Gestor"/>
                            <Input type="text" name="manager" id="manager"/>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="CEP"/>
                            <div className="line_icon">
                                <Input type="text" name="cep" id="cep"/>
                                <a href="#"><SearchIcon /></a>
                            </div>
                        </div>
                        <div className="line_flex">
                            <Legend value="Endereço"/>
                            <Input type="text" name="address" id="address"/>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="Número"/>
                            <Input type="number" name="address-number" id="address-number"/>
                        </div>
                        <div className="line_flex">
                            <Legend value="Bairro"/>
                            <Input type="text" name="district" id="district"/>
                        </div>
                        <div className="line_flex">
                            <Legend value="Cidade"/>
                            <Input type="text" name="city" id="city"/>
                        </div>
                        <div className="line_flex">
                            <Legend value="Estado"/>
                            <Input type="text" name="state" id="state"/>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="Email Empresarial"/>
                            <Input type="email" name="email" id="email"/>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="Telefone"/>
                            <Input type="text" name="phone" id="phone"/>
                        </div>
                        <div className="line_flex">
                            <Legend value="Ramal"/>
                            <Input type="number" name="ramal" id="ramal"/>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <h1 className="title_register">Contato de Emergência</h1>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <Legend value="Nome"/>
                            <Input type="text" name="parent-name" id="parent-name"/>
                        </div>
                        <div className="line_flex">
                            <Legend value="Whatsapp"/>
                            <Input type="text" name="parent-wpp" id="parent-wpp"/>
                        </div>
                        <div className="line_flex">
                            <Legend value="Parentesco"/>
                            <Input type="text" name="parent" id="parent"/>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line_flex">
                            <a className="clear-fields" onClick={handleClearFields} >Limpar Campos</a>
                        </div>
                        <div className="line_flex">
                            <Button type="submit"  value="Cadastrar" className="submit-fields" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterCollaborator