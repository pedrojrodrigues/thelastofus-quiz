import styled from 'styled-components';
import Head from 'next/head';
import React from 'react';
import { Router, useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import FogAnimation from '../src/components/FogAnimation';


/*const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;*/

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - The Last Of Us</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The Last of Us</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste os seus conhecimentos sobre The last of us e descubra se você sabe tudo sobre o melhor jogo de 2020! 
            </p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Digite o seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React fez:</p>
            <ul>
              <li>
                <a href="https://aluraquiz-css.omariosouto.vercel.app/">omariosouto/aluraquiz-css</a>
              </li>
              <li>
                <a href="https://aluraquiz-css.omariosouto.vercel.app/quiz/aluraquiz-base___alura-challenges">alura-challenges/aluraquiz-base</a>
              </li>
              <li>
                <a href="https://aluraquiz-css.omariosouto.vercel.app/quiz/aluraquiz-devsoutinho___omariosouto">omariosouto/aluraquiz-devsoutinho</a>
              </li>
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pedrojrodrigues" />
    </QuizBackground>
    
  );
}
