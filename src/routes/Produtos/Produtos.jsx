import { Link } from "react-router-dom";
import style from "./Produtos.module.css";
import {AiTwotoneEdit as Editar} from "react-icons/ai"
import { useEffect, useState } from "react";
import ModalAction from "../../components/ModalAction/ModalAction";

export default function Produtos() {
  document.title = "Lista de Produtos";

  const[listaProdutosApi,setListaProdutosApi] = useState([]);

  useEffect(()=>{

    //Realizando o Request
    fetch("http://localhost:5000/produtos")
    //Recebendo o Response e transformando em json
    .then((response)=> response.json())
    //Exibindo os dados no console
    .then((response)=> setListaProdutosApi(response))
    //Exibindo caso ocorra algum erro.
    .catch(error=> console.log(error));

  },[]);
  
  const [open, setOpen] = useState(false);

  if(sessionStorage.getItem("token-user")){
  return (
    <div>
      <h1>Produtos</h1>

      <ModalAction open={open} setClose={setOpen}/>

      <button className={style.btnInsProd} onClick={()=> setOpen(true)}>INSERIR PRODUTO</button>

      <table className={style.tblEstilo}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>EDITAR</th>
          </tr>
        </thead>

        <tbody>
          {listaProdutosApi.map((item, indice) => (
            <tr key={indice} className={style.lineTbl}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.desc}</td>
              <td>{item.preco}</td>
              <td><Link to={`/editar/produtos/${item.id}`}> <Editar/> </Link> </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              PRODUTOS INFORMÁTICOS - QTD = {listaProdutosApi.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
          }else{
            window.location = "/login";
            
          }
}
