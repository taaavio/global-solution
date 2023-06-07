import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MainScreen} />
        <Route path="/destinations" component={MainScreen} />
        {/* Adicione outras rotas aqui, se necessário */}
      </div>
    </Router>
  )
}

function MainScreen() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/about">Dados Agrícola</a>
            </li>
            <li>
              <a href="/contact">Monitoramento de Pragas</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" style={{ backgroundImage: 'url(fundo.jpg)' }}>
          <h1 className="nome">Bem-vindo à Deméter</h1>
          <p>
            Explore a inovação na agricultura com o uso da IA para otimizar
            processos e aumentar a produtividade.
          </p>
          <button className="btn-primary">Navegar pelos Recursos</button>
        </section>

        <section className="features">
          <div className="additional-content-item">
            <img className="abelha" src="abelha.png" alt="Imagem 1" />
            <h3>Polinização Autônoma</h3>
          </div>
          <div className="caixa">
            <h2 className="texto">Polinização Autônoma</h2>
            <p>
              A polinização autônoma por IA generativa é um conceito inovador
              que propõe a utilização de algoritmos de inteligência artificial
              generativa para realizar a polinização de plantas de forma
              autônoma, sem a necessidade da intervenção humana ou da presença
              de polinizadores naturais, como abelhas ou pássaros. Essa
              abordagem envolveria a criação de agentes virtuais, baseados em
              IA, capazes de simular o comportamento de polinizadores naturais.
              Esses agentes seriam programados para reconhecer flores e realizar
              uma transferência de pólen entre elas, de maneira semelhante ao
              que ocorre na polinização tradicional. A IA generativa cumpriria
              um papel fundamental nesse processo, pois permitiria que os
              agentes virtuais aprendessem e evoluíssem sua habilidade de
              polinização ao longo do tempo. Por meio de algoritmos de
              aprendizado de máquina, esses agentes eram treinados em diferentes
              cenários e condições, aprimorando sua eficiência e adaptabilidade.
              Essa abordagem poderia ser especialmente útil em situações em que
              a disponibilidade de polinizadores naturais é limitada, como em
              áreas urbanas densamente povoadas ou em regiões protegidas por
              desequilíbrios ecológicos. No entanto, é importante destacar que a
              polinização autônoma por IA generativa ainda é um conceito teórico
              e requer mais pesquisa e desenvolvimento antes de se tornar uma
              realidade prática.
            </p>
          </div>
        </section>

        <section className="additional-content">
          <div className="additional-content-item">
            <img src="logo512.png" alt="Imagem 2" />
            <h3>Drones</h3>
          </div>
          <div className="caixa">
            <h2>Drones Automatizados</h2>
            <p>
              Drones: O uso de drones equipados com câmeras e sensores avançados
              tem se mostrado uma solução eficiente para o monitoramento de
              saúde das plantas na agricultura. Através da captura de imagens de
              alta resolução, esses drones permitem uma análise detalhada das
              plantações. A IA generativa entra em cena ao analisar essas
              imagens em tempo real, detectando sinais de estresse ou doenças
              nas plantas. Isso possibilita uma resposta rápida e direcionada
              por parte dos agricultores. Além disso, os algoritmos de IA
              generativa podem ser treinados para identificar pragas e doenças
              nas plantas com base em imagens ou dados coletados por sensores.
              Essa detecção precoce facilita o controle mais eficaz desses
              problemas, reduzindo as perdas nas colheitas. Outra aplicação
              relevante é o monitoramento da qualidade do solo em tempo real.
              Através de sensores inteligentes e algoritmos de IA generativa, é
              possível obter informações contínuas sobre nutrientes, pH, umidade
              e outros parâmetros importantes do solo. Com base nesses dados, os
              agricultores podem ajustar as práticas de manejo do solo de forma
              mais precisa, maximizando a produtividade e minimizando os
              impactos ambientais. Em resumo, o uso de drones equipados com
              sensores e câmeras, combinado com a análise em tempo real por meio
              da IA generativa, oferece um monitoramento avançado da saúde das
              plantas, detecção de pragas e doenças, além do controle mais
              eficaz, resultando em uma agricultura mais sustentável e
              produtiva.
            </p>
          </div>
        </section>

        <section className="additional-content">
          <div className="additional-content-item">
            <img src="rede.png" alt="Imagem 3" />
            <h3>Apollo</h3>
          </div>
          <div className="caixa">
            <h2>Agricultura Colaborativa</h2>
            <p>
              A agricultura colaborativa é um conceito inovador que busca
              promover a troca de conhecimento, experiências e recursos entre
              agricultores, por meio de uma plataforma online paga. Essa
              abordagem permite que os agricultores se conectem virtualmente e
              compartilhem informações valiosas sobre técnicas agrícolas, manejo
              de culturas, práticas de sustentabilidade, entre outros temas
              relevantes. A rede social paga oferece um ambiente seguro e
              exclusivo, no qual os agricultores podem interagir de maneira mais
              profunda e direcionada. Ao se tornarem membros pagantes dessa rede
              social, os agricultores têm acesso a recursos adicionais, como
              webinars exclusivos, guias técnicos especializados e análises de
              dados agrícolas. Além disso, a plataforma permite a criação de
              grupos de interesse específicos, nos quais os agricultores podem
              discutir desafios comuns, compartilhar soluções e até mesmo
              colaborar em projetos conjuntos. A agricultura colaborativa tem o
              potencial de melhorar significativamente a eficiência e a
              sustentabilidade da agricultura, ao promover o compartilhamento de
              conhecimento e recursos entre os agricultores. Essa abordagem
              fortalece a comunidade agrícola e facilita a adoção de práticas
              inovadoras, resultando em melhores resultados econômicos e
              ambientais. No entanto, é importante ressaltar que a adesão a essa
              rede social paga requer investimento financeiro por parte dos
              agricultores. Portanto, a viabilidade e aceitação dessa abordagem
              dependerão da percepção de valor e dos benefícios tangíveis que os
              agricultores obtêm ao se juntarem a essa comunidade colaborativa.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <p>&copy; 2023 Inovação</p>
          </div>
          <div className="footer-right">
            <ul>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos e Condições</a>
              </li>
              <li>
                <a href="#">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainScreen
