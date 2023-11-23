import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss"

export default function Login() {

    //Criando o Redirecionador!
    const navigate = useNavigate();

    //USE-STATE QUE VAI ARMAZENAR OS DADOS DO FORM.
    const [usuario,setUsuario] = useState({
        email: "",
        senha: ""
    })

        //Gerar um msg de feedBack para o usuário:
        const [msgStatus, setMsgStatus] = useState("");

    //PREENCHIMENTO DO FORM
    const handleChange = (e)=>{
        //DESTRUCTURING NOS CAMPOS DO FORM(NAME,INPUT).
        const {name,value} = e.target;
        //PREENCHENDO O USE-STATE COM OS VALORES DA DESESTRUTURAÇÃO, UTILIZANDO O OPERADOR SPREAD.
        setUsuario({...usuario,[name]:value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        let users;
        let user;
        try {
            const response = await fetch("http://localhost:5000/usuarios");
            users = await response.json();
            
        } catch (error) {
            setMsgStatus("Ocorreu um erro ao logar.");    
        }

        //REALIZANDO A VALIDAÇÃO DO USUÁRIO.
        for (let x = 0; x < users.length; x++) {
                user = users[x];
            //REALIZANDO A COMPARAÇÃO DE FATO!
            if(user.email == usuario.email && user.senha == usuario.senha){
                setMsgStatus("Login realizado com sucesso!"); 

                //Criando a autenticação:
                //Criando o token do usuário
                const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
                console.log(tokenUser);
                
                //Criando o SessionStorage
                sessionStorage.setItem("token-user",tokenUser);
                //Adicionando os dados do Usuário na sessão:
                sessionStorage.setItem("data-user", JSON.stringify(user));

                //REDIRECIONANDO O USUÁRIO PARA A PÁGINA HOME!
                navigate("/");
                return; 
            }
        }

        setMsgStatus("Credenciais incorretas."); 
        setUsuario({
            email:"",
            senha:""
        });
    }

  return (
    <div>

        <div className="form-login">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Dados de Identificação:</legend>
                    <div>
                        <label htmlFor="idEmail">Email:</label>
                        {/*Para o prenchimento é obrigatório adicionar o atributo value e o evento onChange */}
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu email." value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>LOGIN</button>
                        <p align="center">{msgStatus}</p>
                    </div>
                    <div>
                        <p>Se você ainda não é registrado. <Link to="/cadastrar">CLIQUE AQUI</Link></p>
                    </div>
                </fieldset>
            </form>
        </div>

    </div>
  )
}
