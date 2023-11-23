import "./Home.scss"

export default function Home() {
  document.title = "HOME";
  
  if(sessionStorage.getItem("token-user")){
  return (

    <div className="conteudo-principal">
      <div className="texto1">
      <h1>O que é o Quick care?</h1>
      <p>O QuickCare é um aplicativo móvel que tem como objetivo facilitar o acesso a assistência médica, reduzindo o tempo de espera para consultas médicas e emergências. O aplicativo conta com as seguintes funcionalidades:</p>
      <br/>
      <ul>
        <li><p>Localização em Tempo Real: Permite que usuários compartilhem sua localização por satélite para encontrar médicos próximos.</p></li>
        <li><p>Agendamento Rápido: Facilita a marcação de consultas com médicos próximos, destacando tempos de espera estimados.</p></li>
        <li><p>Integração com HapVida: Vincula-se aos hospitais HapVida para fornecer informações sobre disponibilidade e especialidades.</p></li>
        <li><p>Chamada de Ambulância: Oferece opção de solicitar uma ambulância em situações emergenciais.</p></li>
      </ul>
      </div>

      <div className="texto">
        <h1>Objetivos</h1>
        <ul>
          <li><p>Melhorar o acesso a assistência médica: O QuickCare torna mais fácil para as pessoas encontrarem médicos próximos e marcarem consultas.</p></li>
          <li><p>Reduzir o tempo de espera para consultas: O QuickCare fornece informações sobre tempos de espera estimados, para que as pessoas possam planejar suas consultas com antecedência.</p></li>
          <li><p>Melhorar a qualidade do atendimento: O QuickCare fornece informações sobre disponibilidade e especialidades de médicos, para que as pessoas possam encontrar o médico certo para suas necessidades.</p></li>
        </ul>

        <div className="texto3">
          <h1>Gadget fornecido para idosos</h1>
          <p>Além do aplicativo, o QuickCare também oferece um gadget de queda para idosos clientes da HapVida. O gadget é um dispositivo que, ao detectar uma queda, emite um sinal sonoro para alertar outras pessoas sobre o acidente.</p>
          <p>O gadget de queda é uma ferramenta importante para a segurança de idosos, pois pode ajudar a evitar que eles fiquem sozinhos em caso de acidente.</p>
        </div>
        
      </div>

    </div>
  )}else{
    window.location = "/login";
    
  }
}
