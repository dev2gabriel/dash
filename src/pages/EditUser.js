import './NewCollaborator.css'
import './EditUser.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import './NewCollaboratorRegister.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Legend from '../components/Legend'
import Input from '../components/Input'
import Button from '../components/Button'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useContext } from 'react'; 
import { AuthContext } from '../Auth' 
import { useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function EditUser(){

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
    const [userImg, setUserImg] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("")
    const [userCompany, setUserCompany] = useState()
    const [userCpf, setUserCpf] = useState()
    const [userRg, setUserRg] = useState()
    const [userPosition, setUserPosition] = useState()
    const [userContract, setUserContract] = useState()
    const [userLevel, setUserLevel] = useState()
    const [userDepartment, setUserDeparment] = useState("")
    const [userPermission, setUserPermission] = useState([])
    const [userAdmissionDate, setUserAdmissionDate] = useState()
    const [userBirthDate, setUserBirthDate] = useState()
    const [userSalary, setUserSalary] = useState("")
    const [userManager, setUserManager] = useState("")
    const [userZipCode, setUserZipCode] = useState()
    const [userStreet, setUserStreet] = useState()
    const [userNumber, setUserNumber] = useState()
    const [userCbo, setUserCbo] = useState()
    const [userRegistration, setUserRegistration] = useState()
    const [userCountry, setUserCountry] = useState()
    const [userCity, setUserCity] = useState()
    const [userState, setUserState] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userPersonalPhone, setUserPersonalPhone] = useState()
    const [userExtensionNumber, setUserExtensionNumber] = useState()
    const [userEmergencyContactName, setUserEmergencyContactName] = useState()
    const [userEmergencyContactPhone, setUserEmergencyContactPhone] = useState()
    const [userEmergencyContactKinship, setUserEmergencyContactKinship] = useState()
    const [userSituation, setUserSituation] = useState()
    const [userCurrentSalary, setUserCurrentSalary] = useState("")
    
    const { token } = useContext(AuthContext);

    const [dataDepartment, setDataDepartment] = useState([])
    const [roles, setRoles] = useState([])
    const [users, setUsers] = useState([])
    const [userById, setUserById] = useState([])
    const [arrayPermission, setArrayPermissions] = useState([])

    const [findZipState, setFindZipState] = useState(false)
    const [zipData, setZipData] = useState([])
    const [renderedPermissions, setRenderedPermissions] = useState()
    const [isTrue, setIsTrue] = useState(false)

    const { userId } = useParams();

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
        if(userImg !== ""){
            formData.append('photo_url', userImg)
        }
        
        if(userCurrentSalary !== "") {
            formData.append('salary', userCurrentSalary)
        }
        
        if(userManager !== "") {
            formData.append('manager_id', userManager)
        }

        if(userImg !== "") {
            formData.append('photo_url', userImg)
        }

        if(userPassword !== "" && userPasswordConfirmation !== "") {
            formData.append('password', userPassword)
            formData.append('password_confirmation', userPasswordConfirmation)
        }

        formData.append('name', userName)
        formData.append('active', userSituation)
        formData.append('email', userEmail)
        formData.append('cpf', userCpf)
        formData.append('rg', userRg)
        formData.append('company', userCompany)
        formData.append('position', userPosition)
        formData.append('contract', userContract)
        formData.append('admission_date', userAdmissionDate)
        formData.append('department_id', userDepartment)
        formData.append('cbo', userCbo)
        formData.append('registration', userRegistration)
        formData.append('birth_date', userBirthDate)
        formData.append('level', userLevel)
        formData.append('roles_id', arrayPermission)
        formData.append('street', userStreet)
        formData.append('zip_code', userZipCode)
        formData.append('city', userCity)
        formData.append('number', userNumber)
        formData.append('state', userState)
        formData.append('country', userCountry)
        formData.append('emergency_contact_name', userEmergencyContactName)
        formData.append('emergency_contact_phone', userEmergencyContactPhone)
        formData.append('emergency_contact_kinship', userEmergencyContactKinship)
        formData.append('personal_phone', userPersonalPhone)
        formData.append('extension_number', userExtensionNumber)
        formData.append('_method', 'PUT');

        if(userPassword === userPasswordConfirmation){
            axios({
                method: 'POST',
                url: `https://pedidos.grupostra.com/api/v1/user/update/${userId}`,
                data: formData,
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                    '_method': 'PUT'
                }
            })
            .then((response) => {
                alert("Usuário Atualizado com sucesso!")  
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

    function findZipCode(e){
        e.preventDefault()
        setFindZipState(true)
    }

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
        axios.get("https://pedidos.grupostra.com/api/v1/department/all", config)
        .then((response)  => {
            setDataDepartment(response.data)
        })

        axios.get("https://pedidos.grupostra.com/api/v1/roles", config)
        .then((response)  => {
            setRoles(response.data)
        })

        axios.get(`https://pedidos.grupostra.com/api/v1/user/show/${userId}`, config)
        .then((response)  => {
            setUserById(response.data)
        })

        axios.get('https://pedidos.grupostra.com/api/v1/user/show-all', config)
        .then((response)  => {
            setUsers(response.data)
        })

    }, [])
    
    function handleSubmit(e){
        e.preventDefault()
    }

    function removePermission(e){
        e.preventDefault();
        let removed = arrayPermission.indexOf(e.target.text)
        arrayPermission.splice(removed, 1)
        setIsTrue(true)
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
        setUserName(userById?.user?.name)
        setUserCompany(userById?.user?.company)
        setUserCpf(userById?.user?.cpf ? userById?.user?.cpf : "")
        setUserRg(userById?.user?.rg)
        setUserCbo(userById?.user?.cbo ? userById?.user?.cbo : "")
        setUserRegistration(userById?.user?.registration ? userById?.user?.registration : "")
        setUserPosition(userById?.user?.position)
        setUserContract(userById?.user?.contract)
        setUserLevel(userById?.user?.level)
        setArrayPermissions(userById?.roles)
        setUserDeparment(userById?.user?.department_id)
        setUserManager(userById?.user?.manager_id)
        setUserAdmissionDate(userById?.user?.admission_date.slice(0, 10))
        setUserBirthDate(userById?.user?.birth_date.slice(0, 10))
        setUserSalary(userById?.user?.salaries?.map(index => index.salary))
        setUserZipCode(userById?.user?.zip_code)
        setUserSituation(userById?.user?.active)
        setUserStreet(userById?.user?.street)
        setUserNumber(userById?.user?.number)
        setUserCountry(userById?.user?.country)
        setUserCity(userById?.user?.city)
        setUserState(userById?.user?.state)
        setUserEmail(userById?.user?.email)
        setUserPersonalPhone(userById?.user?.personal_phone)
        setUserExtensionNumber(userById?.user?.extension_number)
        setUserEmergencyContactName(userById?.user?.emergency_contact_name ? userById?.user?.emergency_contact_name : "")
        setUserEmergencyContactPhone(userById?.user?.emergency_contact_phone ? userById?.user?.emergency_contact_phone : "")
        setUserEmergencyContactKinship(userById?.user?.emergency_contact_kinship ? userById?.user?.emergency_contact_phone : "")
    }, [userById])

    function handleChange(e){
        setUserName(document.querySelector('#name').value)
        setUserImg(document.querySelector('#file').files[0] ? document.querySelector('#file').files[0] : "")
        setUserCompany(document.querySelector('#company').value)
        setUserCpf(document.querySelector('#cpf').value)
        setUserRg(document.querySelector('#rg').value)
        setUserCbo(document.querySelector('#cbo').value)
        setUserRegistration(document.querySelector('#registration').value)
        setUserPosition(document.querySelector('#position').value)
        setUserContract(document.querySelector('#contract').value)
        setUserLevel(document.querySelector('#level').value)
        setUserPermission(arrayPermission)
        setUserSituation(parseInt(document.querySelector('#user-status').value))
        setUserDeparment(document.querySelector('#department').value)
        setUserManager(document.querySelector('#manager').value)
        setUserAdmissionDate(document.querySelector('#date-admis').value)
        setUserBirthDate(document.querySelector('#date-birth').value)
        setUserSalary(document.querySelector('#salary').value)
        setUserZipCode(document.querySelector('#cep').value)
        setUserStreet(document.querySelector('#address').value)
        setUserNumber(document.querySelector('#address-number').value)
        setUserCountry(document.querySelector('#district').value)
        setUserCity(document.querySelector('#city').value)
        setUserState(document.querySelector('#state').value)
        setUserEmail(document.querySelector('#email').value)
        setUserPersonalPhone(document.querySelector('#phone').value)
        setUserExtensionNumber(document.querySelector('#ramal').value)
        setUserEmergencyContactName(document.querySelector('#parent-name').value)
        setUserEmergencyContactPhone(document.querySelector('#parent-wpp').value)
        setUserEmergencyContactKinship(document.querySelector('#parent').value)
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
                                            <Legend value="Nome Completo"/>
                                            <Input type="text" name="name" id="name" value={userName} onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Status"/>
                                            <select name="user-status" id="user-status" value={userSituation} className="select_pers" onChange={handleChange}>
                                                <option value="1">Ativo</option>
                                                <option value="0">Desativado</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Foto"/>
                                            <label htmlFor="file" className="input_img">Enviar arquivo <FileUploadIcon /></label>
                                            <Input type="file" name="file" id="file" onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Senha"/>
                                            <Input type="password" name="password" id="password" onChange={(e) => setUserPasswordConfirmation(e.target.value)}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Confirmação de senha"/>
                                            <Input type="password" name="password_comfirmation" id="password_comfirmation" onChange={(e) => setUserPassword(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Empresa"/>
                                            <select name="company" id="company" value={userCompany} className="select_pers" onChange={handleChange}>
                                                <option value="#" selected disabled>Selecione a empresa</option>
                                                <option value="stra">stra</option>
                                                <option value="strafer">strafer</option>
                                            </select>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="CPF"/>  
                                            <Input type="text" name="cpf" id="cpf" value={userCpf} onChange={handleChange}/>  
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="RG"/>
                                            <Input type="text" name="rg" id="rg" value={userRg} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="CBO"/>
                                            <Input type="text" name="cbo" id="cbo" value={userCbo} onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Matrícula"/>
                                            <Input type="text" name="registration" id="registration" value={userRegistration} onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Cargo"/>
                                            <Input type="text" name="position" id="position" value={userPosition} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Contrato"/>
                                            <select name="contract" id="contract" value={userContract} className="select_pers" onChange={handleChange}>
                                                <option value="#" selected disabled>Tipo de contrato</option>
                                                <option value="CLT">CLT</option>
                                                <option value="Estágio">Estágio</option>
                                                <option value="Tercerizado PJ">Tercerizado PJ</option>
                                            </select>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Level"/>
                                            <select name="level" id="level" className="select_pers" value={userLevel} onChange={handleChange}>
                                                <option value="#" selected disabled>Posição</option>
                                                <option value="CEO">CEO</option>
                                                <option value="Colaborador">Colaborador</option>
                                                <option value="Estagiario">Estagiário</option>
                                                <option value="Gerente">Gerente</option>
                                                <option value="Supervisor">Supervisor</option>
                                            </select>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Departamento"/>
                                            <select name="department" id="department" value={userDepartment} className="select_pers" onChange={handleChange}>
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
                                            <Legend value="Gestor"/>
                                            <select name="manager" id="manager" value={userManager} className="select_pers" onChange={handleChange}>
                                                <option value="#" selected disabled>Gestor</option>
                                                {
                                                    users.map((user, i) =>
                                                        <option key={i} value={user.id}>{user.name}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Data de Admissão"/>
                                            <Input type="text" name="date-admis" id="date-admis" value={userAdmissionDate} onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Data de Nascimento"/>
                                            <Input type="text" name="date-birth" id="date-birth" value={userBirthDate} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Permissões"/>
                                            <select name="permissions" id="permissions" className="select_pers" onChange={(e) => {setUserPermission(setArrayPermissions(arrayPermission => [...arrayPermission, e.target.value]))}}>
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
                                            <Legend value="Salário Atual"/>
                                            <Input type="text" name="salary" id="salary" onChange={(e) => setUserCurrentSalary(e.target.value)}/>
                                            <div className="last_salaries">
                                                <Legend value="Últimos Sálarios" />
                                                <ul>
                                                    {userById?.user?.salaries?.map((salary, i) => 
                                                        <li key={i}>{salary?.salary.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="CEP"/>
                                            <div className="line_icon">
                                                <Input type="text" name="cep" id="cep" value={userZipCode} onChange={handleChange}/>
                                                <a href="#" onClick={findZipCode}><SearchIcon /></a>
                                            </div>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Endereço"/>
                                            <Input type="text" name="address" id="address" value={userStreet} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Número"/>
                                            <Input type="number" name="address-number" value={userNumber} id="address-number" onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Bairro"/>
                                            <Input type="text" name="district" id="district" value={userCountry} onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Cidade"/>
                                            <Input type="text" name="city" id="city" value={userCity} onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Estado"/>
                                            <select name="state" id="state" className="select_pers" value={userState} onChange={handleChange}>
                                                <option value="#" selected disabled>Estado</option>
                                                {
                                                    states.state.map((state, i) =>
                                                        <option key={i} value={state.sigla}>{state.sigla}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Email Empresarial"/>
                                            <Input type="email" name="email" id="email" value={userEmail} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <Legend value="Telefone Pessoal"/>
                                            <Input type="text" name="phone" id="phone" value={userPersonalPhone} onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Ramal"/>
                                            <Input type="number" name="ramal" id="ramal" value={userExtensionNumber} onChange={handleChange}/>
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
                                            <Input type="text" name="parent-name" id="parent-name" value={userEmergencyContactName} onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Whatsapp"/>
                                            <Input type="text" name="parent-wpp" id="parent-wpp" value={userEmergencyContactPhone} onChange={handleChange}/>
                                        </div>
                                        <div className="line_flex">
                                            <Legend value="Parentesco"/>
                                            <Input type="text" name="parent" id="parent" value={userEmergencyContactKinship} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="line_flex">
                                            <a className="clear-fields" onClick={handleClearFields} >Resetar Campos</a>
                                        </div>
                                        <div className="line_flex">
                                            <Button type="submit"  value="Atualizar Cadastro" className="submit-fields" onClick={submitFields} />
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

export default EditUser