import './NewCollaborator.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Legend from '../components/Legend'
import Input from '../components/Input'
import Button from '../components/Button'
import './NewCollaboratorRegister.css'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useContext } from 'react'; 
import { AuthContext } from '../Auth' 
import SearchIcon from '@mui/icons-material/Search';

function NewCollaboratorRegister(){

    var states = {
        state: [
            {
                sigla: "AC",
                name: "Acre"
            },
            {
                sigla: "AL",
                name: "Alagoas"
            },
            {
                sigla: "AP",
                name: "Amapá"
            },
            {
                sigla: "AM",
                name: "Amazonas"
            },
            {
                sigla: "BA",
                name: "Bahia"
            },
            {
                sigla: "CE",
                name: "Ceara"
            },
            {
                sigla: "DF",
                name: "Distrito Federal"
            },
            {
                sigla: "ES",
                name: "Espírito Santo"
            },
            {
                sigla: "GO",
                name: "Goiás"
            },
            {
                sigla: "MA",
                name: "Maranhão"
            },
            {
                sigla: "MT",
                name: "Mato Grosso"
            },
            {
                sigla: "MS",
                name: "Mato Grosso do Sul"
            },
            {
                sigla: "MG",
                name: "Minas Gerais"
            },
            {
                sigla: "PA",
                name: "Pará"
            },
            {
                sigla: "PB",
                name: "Paraíba"
            },
            {
                sigla: "PR",
                name: "Paraná"
            },
            {
                sigla: "PE",
                name: "Pernambuco"
            },
            {
                sigla: "PI",
                name: "Piauí"
            },
            {
                sigla: "RJ",
                name: "Rio de Janeiro"
            },
            {
                sigla: "RN",
                name: "Rio Grande do Norte"
            },
            {
                sigla: "RS",
                name: "Rio Grande do Sul"
            },
            {
                sigla: "RO",
                name: "Rondônia"
            },
            {
                sigla: "RR",
                name: "Roraima"
            },
            {
                sigla: "SC",
                name: "Santa Catarina"
            },
            {
                sigla: "SP",
                name: "São Paulo"
            },
            {
                sigla: "SE",
                name: "Sergipe"
            },
            {
                sigla: "TO",
                name: "Tocantins"
            }
        ]
    }

    const [userName, setUserName] = useState()
    const [userImg, setUserImg] = useState()
    const [userPassword, setUserPassword] = useState()
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState()
    const [userCompany, setUserCompany] = useState()
    const [userCpf, setUserCpf] = useState()
    const [userRg, setUserRg] = useState()
    const [userPosition, setUserPosition] = useState()
    const [userContract, setUserContract] = useState()
    const [userLevel, setUserLevel] = useState()
    const [userDepartment, setUserDeparment] = useState()
    const [userAdmissionDate, setUserAdmissionDate] = useState()
    const [userBirthDate, setUserBirthDate] = useState()
    const [userSalary, setUserSalary] = useState()
    const [userManager, setUserManager] = useState()
    const [userZipCode, setUserZipCode] = useState()
    const [userStreet, setUserStreet] = useState()
    const [userNumber, setUserNumber] = useState()
    const [userCountry, setUserCountry] = useState()
    const [userCity, setUserCity] = useState()
    const [userCbo, setUserCbo] = useState()
    const [userRegistration, setUserRegistration] = useState()
    const [userState, setUserState] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userPersonalPhone, setUserPersonalPhone] = useState()
    const [userExtensionNumber, setUserExtensionNumber] = useState()
    const [userEmergencyContactName, setUserEmergencyContactName] = useState()
    const [userEmergencyContactPhone, setUserEmergencyContactPhone] = useState()
    const [userEmergencyContactKinship, setUserEmergencyContactKinship] = useState()
    const [userSituation, setUserSituation] = useState(1)
    
    const { token } = useContext(AuthContext);

    const [dataDepartment, setDataDepartment] = useState([])
    const [roles, setRoles] = useState([])
    const [users, setUsers] = useState([])
    const [arrayPermission, setArrayPermissions] = useState([])
    const [findZipState, setFindZipState] = useState(false)
    const [zipData, setZipData] = useState([])

    const [renderedPermissions, setRenderedPermissions] = useState()
    const [isTrue, setIsTrue] = useState(false)

    function handleClearFields(e){
        window.location = window.location.href;
    }

    const config = {
        headers : {
            'Authorization' : `Bearer ${token}`
          }
    };

    function submitFields(){
        let formData = new FormData()

        if(userCbo){
            formData.append('cbo', userCbo)
        }

        if(userRegistration){
            formData.append('registration', userRegistration)
        }
        
        if(userImg){
            formData.append('photo_url', userImg)
        }

        if(userExtensionNumber){
            formData.append('extension_number', userExtensionNumber)
        }

        if(userEmergencyContactName){
            formData.append('emergency_contact_name', userEmergencyContactName)
        }

        if(userEmergencyContactPhone){
            formData.append('emergency_contact_phone', userEmergencyContactPhone)
        }

        if(userEmergencyContactKinship){
            formData.append('emergency_contact_kinship', userEmergencyContactKinship)
        }

        formData.append('name', userName)
        formData.append('active', userSituation)
        formData.append('email', userEmail)
        formData.append('password', userPassword)
        formData.append('password_confirmation', userPasswordConfirmation)
        formData.append('cpf', userCpf.replace(".", "").replace(".", "").replace("-", ""))
        formData.append('rg', userRg)
        formData.append('company', userCompany)
        formData.append('position', userPosition)
        formData.append('contract', userContract)
        formData.append('admission_date', userAdmissionDate)
        formData.append('department_id', userDepartment)
        formData.append('manager_id', userManager)
        formData.append('birth_date', userBirthDate)
        formData.append('level', userLevel)
        formData.append('roles_id', arrayPermission)
        formData.append('salary', parseInt(userSalary.replace(".", "").replace(",", "")))
        formData.append('street', userStreet)
        formData.append('zip_code', userZipCode)
        formData.append('country', userCountry)
        formData.append('city', userCity)
        formData.append('number', userNumber)
        formData.append('state', userState)
        formData.append('personal_phone', userPersonalPhone)
        formData.append('_method', 'POST') 

        if(userPassword === userPasswordConfirmation){
            axios({
                method: 'POST',
                url: 'http://api-dash.grupostra.com/api/v1/user/register',
                data: formData,
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                    '_method': 'POST'
                }
            })
            .then(() => {
                alert("Usuário Cadastrado com sucesso!")  
                window.location = window.location.href;
            }).catch(function(error){ 
                if (error.response) {
                    alert(error.response.data.message)
                }
            })
        } else {
            alert("As senhas não coincidem")
        }
    }

    function removePermission(e){
        e.preventDefault();
        let removed = arrayPermission.indexOf(e.target.text)
        arrayPermission.splice(removed, 1)
        setIsTrue(true)
    }
    
    function findZipCode(e){
        e.preventDefault()
        setFindZipState(true)
    }

    useEffect(() => {
        setRenderedPermissions(
            <>{
                arrayPermission?.map((role, i) => 
                    <li key={i}><a href="#" onClick={removePermission}>{role}</a></li>
                )
            }</>
        )
        setIsTrue(false)
    }, [arrayPermission, isTrue])

    useEffect(() => {
        axios.get(`https://viacep.com.br/ws/${userZipCode}/json/`)
        .then((response)  => {
            setZipData(response.data)
            document.querySelector('#address').value = zipData.logradouro
            document.querySelector('#district').value = zipData.bairro
            document.querySelector('#city').value = zipData.localidade
            document.querySelector('#state').value = zipData.uf
            setUserStreet(zipData.logradouro)
            setUserCountry(zipData.bairro)
            setUserCity(zipData.localidade)
            setUserState(zipData.uf)
            setFindZipState(false)
        })
    }, [findZipState])

    useEffect(() => {
        axios.get("http://api-dash.grupostra.com/api/v1/department/all", config)
        .then((response)  => {
            setDataDepartment(response.data)
        })

        axios.get("http://api-dash.grupostra.com/api/v1/roles", config)
        .then((response)  => {
            setRoles(response.data)
        })

        axios.get("http://api-dash.grupostra.com/api/v1/user/show-all", config)
        .then((response)  => {
            setUsers(response.data)
        })

    }, [])

    function cpf(v){
        v=v?.replace(/\D/g,"")                    //Remove tudo o que não é dígito
        v=v?.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v?.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                                 //de novo (para o segundo bloco de números)
        v=v?.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
        let cpf = document.querySelector("#cpf")
        cpf.value = v
        return v
    }

    function mask_admis(d){
        let dateAdmis = document.querySelector("#date-admis")
        var mydata = '';
        mydata = mydata + d;
        if (mydata.length == 2){
          mydata = mydata + '-';
          dateAdmis.value = mydata;
        }
        if (mydata.length == 5){
          mydata = mydata + '-';
          dateAdmis.value = mydata;
        }
    }

    function mask_birth(d){
        let dateBirth = document.querySelector("#date-birth")
        var mydata = '';
        mydata = mydata + d;
        if (mydata.length == 2){
          mydata = mydata + '-';
          dateBirth.value = mydata;
        }
        if (mydata.length == 5){
          mydata = mydata + '-';
          dateBirth.value = mydata;
        }
      }

    function mask_real(e) {
        var v = e.target.value
        var salary = document.querySelector('#salary');
        v = salary.value.replace(/\D/g,'');
        v = (v/100).toFixed(2) + '';
        v = v.replace(".", ",");
        v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
        salary.value = v;
        setUserSalary(v)
    }
    
    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <div id="body-main" className="body-main home open">
            <Header />
            <div className="main">
                <div id="side-bar" className="side-bar open">
                    <NavMenu />
                </div>
            <div className="body"> </div>
            <div className="row">
                <div className="col-2">
                    <div className="rh-news container">
                        <div className="register_collaborator">
                            <div className="container_collaborator">
                                <h1 className="title_register">Cadastrar Colaborador</h1>
                                <form onSubmit={handleSubmit}>
                                <div className="form-register">
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Nome Completo *"/>
                                            <Input type="text" name="name" id="name" onChange={(e) => setUserName(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Status"/>
                                            <select name="user-status" id="user-status" className="select_pers" onChange={(e) => setUserSituation(e.target.value)}>
                                                <option value="1">Ativo</option>
                                                <option value="0">Desativado</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Foto"/>
                                            <label htmlFor="file" className="input_img">Enviar arquivo <FileUploadIcon /></label>
                                            <Input type="file" name="file" id="file" onChange={(e) => setUserImg(e.target.files[0])}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Senha *"/>
                                            <Input type="password" name="password" id="password" onChange={(e) => setUserPassword(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Confirmação de senha *"/>
                                            <Input type="password" name="password_comfirmation" id="password_comfirmation" onChange={(e) => setUserPasswordConfirmation(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Empresa *"/>
                                            <select name="company" id="company" className="select_pers" onChange={(e) => setUserCompany(e.target.value)}>
                                                <option value="#" selected disabled>Selecione a empresa</option>
                                                <option value="stra">stra</option>
                                                <option value="strafer">strafer</option>
                                            </select>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="CPF *"/>  
                                            <Input type="text" name="cpf" id="cpf" onBlur={userCpf ? cpf(userCpf) : ""} onChange={(e) => setUserCpf(e.target.value)}/>  
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="RG"/>
                                            <Input type="text" name="rg" id="rg" onChange={(e) => setUserRg(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="CBO"/>
                                            <Input type="text" name="cbo" id="cbo" onChange={(e) => setUserCbo(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Matrícula"/>
                                            <Input type="text" name="matricula" id="matricula" onChange={(e) => setUserRegistration(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Cargo *"/>
                                            <Input type="text" name="position" id="position" onChange={(e) => setUserPosition(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Contrato *"/>
                                            <select name="contract" id="contract" className="select_pers" onChange={(e) => setUserContract(e.target.value)}>
                                                <option value="#" selected disabled>Tipo de contrato</option>
                                                <option value="CLT">CLT</option>
                                                <option value="Estágio">Estágio</option>
                                                <option value="Terceirizado PJ">Terceirizado PJ</option>
                                            </select>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Level *"/>
                                            <select name="level" id="level" className="select_pers" onChange={(e) => setUserLevel(e.target.value)}>
                                                <option value="#" selected disabled>Posição</option>
                                                <option value="CEO">CEO</option>
                                                <option value="Colaborador">Colaborador</option>
                                                <option value="Estagiario">Estagiário</option>
                                                <option value="Gerente">Gerente</option>
                                                <option value="Supervisor">Supervisor</option>
                                            </select>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Permissões *"/>
                                            <select name="permissions" id="permissions" className="select_pers" onChange={(e) => setArrayPermissions(arrayPermission => [...arrayPermission, e.target.value])}>
                                                <option value="#" selected disabled>Permissões</option>
                                                {
                                                    roles.map((role, i) =>
                                                        <option key={i} value={role.name}>{role.name}</option>
                                                    )
                                                }
                                            </select>
                                            <div className="permissions_enabled">
                                            <Legend value="Permissões Atribuídas" />
                                                <ul>
                                                    {
                                                        renderedPermissions
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Departamento *"/>
                                            <select name="department" id="department" className="select_pers" onChange={(e) => setUserDeparment(e.target.value)}>
                                                <option value="#" selected disabled>Departamento</option>
                                                {
                                                    dataDepartment.map((department, i) =>
                                                        <option key={i} value={department.id}>{department.name}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Gestor *"/>
                                            <select name="manager" id="manager" className="select_pers" onChange={(e) => setUserManager(e.target.value)}>
                                                <option value="#" selected disabled>Gestor</option>
                                                {
                                                    users.map((user, i) =>
                                                        <option key={i} value={user.id}>{user.name}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Data de Admissão *"/>
                                            <Input type="text" name="date-admis" id="date-admis" onBlur={userAdmissionDate ? mask_admis(userAdmissionDate) : ""} onChange={(e) => setUserAdmissionDate(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Data de Nascimento *"/>
                                            <Input type="text" name="date-birth" id="date-birth" onBlur={userBirthDate ? mask_birth(userBirthDate) : ""} onChange={(e) => setUserBirthDate(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Salário Atual *"/>
                                            <Input type="text" name="salary" id="salary" onChange={(e) => mask_real(e)}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="CEP *"/>
                                            <div className="line_icon">
                                                <Input type="text" name="cep" id="cep" onChange={(e) => setUserZipCode(e.target.value)}/>
                                                <a href="#" onClick={findZipCode}><SearchIcon /></a>
                                            </div>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Endereço *"/>
                                            <Input type="text" name="address" id="address" onChange={(e) => setUserStreet(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Número *"/>
                                            <Input type="number" name="address-number" id="address-number" onChange={(e) => setUserNumber(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Bairro *"/>
                                            <Input type="text" name="district" id="district" onChange={(e) => setUserCountry(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Cidade *"/>
                                            <Input type="text" name="city" id="city" onChange={(e) => setUserCity(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Estado *"/>
                                            <select name="state" id="state" className="select_pers" onChange={(e) => setUserState(e.target.value)}>
                                                <option value="#" selected disabled>Estado</option>
                                                {
                                                    states.state.map((state, i) =>
                                                        <option key={i} value={state.sigla}>{state.name}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Email Empresarial *"/>
                                            <Input type="email" name="email" id="email" onChange={(e) => setUserEmail(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Telefone Pessoal *"/>
                                            <Input type="text" name="phone" id="phone" onChange={(e) => setUserPersonalPhone(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Ramal"/>
                                            <Input type="number" name="ramal" id="ramal" onChange={(e) => setUserExtensionNumber(e.target.value)}/>
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
                                            <Input type="text" name="parent-name" id="parent-name" onChange={(e) => setUserEmergencyContactName(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Whatsapp"/>
                                            <Input type="text" name="parent-wpp" id="parent-wpp" onChange={(e) => setUserEmergencyContactPhone(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Parentesco"/>
                                            <Input type="text" name="parent" id="parent" onChange={(e) => setUserEmergencyContactKinship(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <a className="clear-fields" onClick={handleClearFields} >Limpar Campos</a>
                                        </div>
                                        <div className="line_flex">
                                            <Button type="submit"  value="Cadastrar" className="submit-fields" onClick={submitFields} />
                                        </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    </div>
    )
}

export default NewCollaboratorRegister