// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import style from './App.module.css'

export default function App() {

  return (
    <>
          <header>
        <h1 className={style.m}>M</h1>
        <div className={style.row}>
            <a  href="#home"><h2 className={style.options} >Home</h2></a>
            <a href="#social"><h2>Social</h2></a>   
            <a href="#profesional"><h2>Profesional</h2></a>
            <a href="#projects"><h2>Projects</h2></a>
            <form>
                <a href="https://wa.me/5541991576895" target='_blank'><input type="button" name="Botao" value="Contact"/></a>
            </form>
        </div>
    </header>

    <main>
        <div id='home' className={style.pai2}>
            <div className={style.filho1}>
                <p>L</p>
                <p>T</p>
                <p> </p>
                <p>T</p>
                <p>L</p>
            </div>
            <div className={style.filho2}>
                <p>E</p>
                <p>S</p>
                <p> </p>
                <p>A</p>
                <p>K</p>
            </div>
            <img className={style.image} src="./src/assets/my_photo.jpeg" alt=""/>
        </div>

        <div id='profesional' className={style.second}>
            <h1>My name is Matias Andres de Oliveira Zuniga</h1>
            <div className={style.projects}>
            <h2>College:</h2>
                    <div>
                        <h2>I am currently studying computer.</h2>
                        <br/>
                        <h2>engineering at PUCPR, on the fourth</h2>
                        <br/>
                        <h2>semester.</h2>
                    </div>
                    <img  src="./src/assets/curso.jpg"/>
            </div>

            <div className={style.projects}>
            <h2>Work:</h2>
                    <div>
                        <h2>I am an apprentice at Robert Bosch.</h2>
                        <br/>
                        <h2>On the first year of two. Learning about</h2>
                        <br/>
                        <h2> different languages and programming skills.</h2>
                    </div>
                    <img  src="./src/assets/turma_bosch.jpg"/>
            </div>
        </div>

        <div className={style.second}>
            <h1>Languages </h1>
            <div className={style.specifics} >
                <img className={style.languages} src="./src/assets/python-icon-512x509-pb65l7gl.png"/>
                <img className={style.languages} src="./src/assets/C_Logo.png"/>
                <img className={style.languages} src="./src/assets/java-svgrepo-com.svg"/>
                <img className={style.languages} src="./src/assets/sql.png"/>
                <img className={style.languages} src="./src/assets/vba_bom.png"/>
            </div>
        </div>

        <div id='projects' className={style.third}>
            <h1>My projects</h1>
            <div className={style.projects}>
                <a href="https://github.com/CrCardd/PokeVoice" target='_blank' ><h2>PokeVoice:</h2></a>
                <div>
                    <h2>Final project of program logic on Senai.</h2>
                    <br/>
                    <h2>It was made with C and python, and took</h2>
                    <br/>
                    <h2>about 8 days to be finished!</h2>   
                </div>
               <img src="./src/assets/pokemon.jpg"/>
            </div>

            <div className={style.projects}>
                <img src="./src/assets/cat_feeder.PNG"/>
                <a href="https://github.com/matiaszo/projeto_web" target='_blank' ><h2>CatFeeder:</h2></a>
                <div>
                    <h2>Final project of IOT at Bosch.</h2>
                    <br/>
                    <h2>Took 9 days to be made.It was</h2>
                    <br/>
                    <h2> made with python, Sql server</h2>
                    <br/>
                    <h2>and an esp32!</h2>
                </div>
            </div>
        </div>


        <div id='social' className={style.second}>
            <h1>Social</h1>
            <div className={style.specifics}>
                <a href="https://www.instagram.com/"><img className={style.languages} src="./src/assets/Instagram_logo.png"/></a>
                <a href="https://br.linkedin.com/"><img className={style.languages} src="./src/assets/linkedin.png"/></a>
                <a href="https://www.threads.net/?hl=pt-br"><img className={style.languages} src="./src/assets/twitter.png"/></a>
            </div>
        </div>
    </main>
    </>
  )
}


