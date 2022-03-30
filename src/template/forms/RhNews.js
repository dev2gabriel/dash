import Container from '../../containers/Container'
import Legend from '../../components/Legend'
import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from './RhNews.module.css'
import { useState, useRef, useMemo } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import emptyImg from '../../assets/empty_img.png';
import JoditEditor from "jodit-react";

function RhNews(){

    const [image, setImage] = useState(null)
    
    const [content, setContent] = useState('')
    const editor = useRef(null)
    const config = {
		readonly: false,
		placeholder: 'Digite seu texto'
	}

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
                <h1 className={styles.title_register}>Cadastrar Rh News</h1>
                <form action="#" onSubmit={formPreventDefault}>
                    <div className={styles.line}>
                        <Legend value="Título" style={styledLegend}/>
                        <Input type="text" name="title" id="title" style={styledInput}/>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.line_flex}>
                            <Legend value="Sub Título" style={styledLegend}/>
                            <Input type="text" name="sub-title" id="sub-title" style={styledInput}/>
                        </div>
                    </div>
                    <div className={styles.line_flex}>
                        <label htmlFor="img-user" className={styles.input_img}>Enviar Imagem <FileUploadIcon /></label>
                        <input type="file" name="img-user" id="img-user" onChange={(e) => setImage(e.target.files[0])} style={styledFile} />
                        {image ? <img src={URL.createObjectURL(image)} /> : <img src={emptyImg} />}
                    </div>
                    <div className={styles.line_flex}>
                        <Legend value="Texto" style={styledLegend}/>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {}}
                        />
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

export default RhNews