import { Component, useState, useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import axios from 'axios';
import './Ramais.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useContext } from 'react'; 
import { AuthContext } from '../../Auth' 

function Ramais(){
    const [users, setUsers] = useState([])
    const { token } = useContext(AuthContext);

    const config = {
        headers : {
            'Authorization' : `Bearer ${token}`
          }
    };

    useEffect(() => {
        axios.get("https://pedidos.grupostra.com/api/v1/table/users", config)
        .then((response)  => {
            setUsers(response.data)
        })

    }, [])


    return(
        <Accordion>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Almoxarifado
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "Almoxarifado").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                Comercial
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "Comercial").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                Compras
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "Compras").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                Faturamento
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "Faturamento").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                Financeiro
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "Financeiro").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                Logística
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "Logística").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                Marketing
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "Marketing").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                Produção
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "Produção").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                RH
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "RH").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                Técnica
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "Técnica").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                Tecnologia
                </AccordionItemButton>
            </AccordionItemHeading>
            {users.filter(users => users.department?.name === "Tecnologia").map((filtereduser, index) => (
                <AccordionItemPanel className="container-ramal" key={index}>
                <p className="worker"><span>{filtereduser?.name}</span></p>
                <p className="cargo">{filtereduser?.position}</p>
                <p className="email">{filtereduser?.email}</p>
                <p className="ramal">Ramal: {filtereduser?.extension_number}</p>
            </AccordionItemPanel>
            ))}
        </AccordionItem>

    </Accordion>
    )
}

export default Ramais;