import Cabecalho from "./components/Cabecalho/Cabecalho";
import style from "./App.module.css";
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <>
      <div className={style.container}>
        {/* Iniciando a área do cabeçalho */}
        <Cabecalho />

          <Outlet/>
       
      </div>
    </>
  );
}
