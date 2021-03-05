import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../Navigation/ButtonAppBar';
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
import AboutMe from '../AboutMe/AboutMe'
import Contact from '../Contact/Contact'
import '../../sass/main.scss';
import '../../assets/domenico-gentile.jpg'

const App = () => {
  const [ isLoading, setIsLoading ] = useState(true)

  const cacheImages = async (assets) => {
    const promises = await assets.map(asset => {
      return new Promise(function (resolve, reject) {
        const img = new Image()

        img.asset = asset
        img.onload = resolve()
        img.onerror = reject()
      })
    })
    await Promise.all(promises)

    setIsLoading(false)
  }

  useEffect(() => {
    const images = ['../../assets/domenico-gentile.jpg', '../../assets/lienFlash-home.png'] 

    cacheImages(images)
  }, [isLoading])

  return (
    <main className="app">
      <ButtonAppBar />
      <Header id="header" isLoading={isLoading}/>
      <AboutMe id="about" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </main>
  );
}

export default App;
