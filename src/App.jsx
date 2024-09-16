// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import style from './App.module.css'

export default function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
          <header>
        <h1 className={style.m}>M</h1>
        <div className={style.row}>
            <h2>Home</h2>
            <a href="#social"><h2>Social</h2></a>
            <form>
                <a href="https://gmail.com/"><input type="button" name="Botao" value="Contact"/></a>
            </form>
        </div>
    </header>

    <main>
        <div className={style.pai2}>
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

        <div className={style.third}>
            <h1>My projects</h1>
            <div className={style.projects}>
                <h2>PokeVoice:</h2>
                <div>
                    <h2>Final project of program logic on Senai.</h2>
                    <br/>
                    <h2>It was made with C and python, and took</h2>
                    <br/>
                    <h2>about 8 days to be finished!</h2>
                </div>
                <img  src="./src/assets/pokemon.jpg"/>
            </div>

            <div className={style.projects}>
                <img  src="./src/assets/cat_feeder.PNG"/>
                <h2>CatFeeder:</h2>
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
        <div className={style.second}>
            <h1>Social</h1>
            <div className={style.specifics}>
                <img className={style.languages} src="./src/assets/Instagram_logo.png"/>
                <img className={style.languages} src="./src/assets/linkedin.png"/>
                <img className={style.languages} src="./src/assets/twitter.png"/>
            </div>
        </div>
    </main>
    </>
  )
}


