import logo from './logo.svg';
import './App.css';

/*<!-- ce que je fais-->*/
function App() {
  return (
    <div className="App">
        <section className="herosection">
    <header>
      <div className="logotype">
        <span id="logo"> HB </span>
      </div>

      <nav className="navigation">
        <ul>
          <li><a href="#hassane"> moi</a></li>
          <li><a href="#competence"> competences</a></li>
          <li><a href="#performance"> performance</a></li>
          <li className="pc" ><a href="mailto:badamahassane@gmail.com?subject=rembrouser%20dette%20body"> contact</a></li>

        </ul>
      </nav>
    </header>
    <div id="hassane" className="corpus">
      <img src="assets/images/img1.jpg" alt=""/>
      <div className="description">
        <h1> Nom: Hassane</h1>
        <h2> Prenom: Badama </h2>
        <p>  Date et lieu de naissance:10/01/1998 a N’Djamena (TCHAD) </p>
        <p>   Situation matrimoniale: Célibataire </p>
        <p>   Tel 658874912 </p>
        <p>   Profession: Étudiant </p>
        <p>   E-mail: badamahassane@gmail.com </p>

            <p className="motcle"> Études effectuées: </p>
        <p>  •	2005 à 2011: L'école primaire centre B de Bongor(TCHAD)  </p>
        <p>  •	2011-2016: Collège Moderne de BONGOR </p>
        <p>•	2016-2019: Lycée Moderne de BONGOR </p>
        <p>•	2019-2020: Étudiant à l'université de YAOUNDE I </p>
            <p className="motcle">Diplômes obtenus:</p>
        <p> •	2005: Certificat d'Étude Primaire </p>
        <p>   •	2016: Brevet d'Étude du Premier Cycle (BEF/T) </p>
        <p>   •	2019: Baccalauréat de l'Enseignement Supérieure (BAC/D) </p>
        <p>   •	2021: Licence1 à la Faculté des Sciences de Ngoa-Ekélé (YAOUNDE I) </p>

        <p> </p>
         <a id="pccomponent" className="calltoactionbuton" href="mailto:badamahassane@gmail.com?subject=rembrouser%20dette%20body "> me joindre </a>
         <a id="mobcomponent" className="calltoactionbuton" href="tel:+237658874912"> me joindre </a>

      </div>

    </div>
  </section>


  <section id="competence" className="skillsection">
     <h2 className="titresection"> Competences </h2>
     <div className="listecompetence">
       <ul className="mescompetencesactuel">
         <li className="carte">
           <a href="#">
             <div className="imageur">

             </div>
             <h3 className="titreur"> Disign d'application </h3>
             <p className="descripteur"> capable de designer une application</p>
             <div className="progresseur">
               <div className="progression">
                 <span className="valeur"> 90% </span>

               </div>

             </div>
           </a>
         </li>

         <li className="carte">
           <a href="#menu2">
             <div className="imageur">

             </div>
             <h3 className="titreur"> Design graphique </h3>
             <p className="descripteur"> capable de faire design des sites web.</p>
             <div className="progresseur">
               <div className="progression">
                 <span className="valeur"> 90% </span>

               </div>

             </div>
           </a>
         </li>

         <li className="carte">
           <a href="#">
             <div className="imageur">

             </div>
             <h3 className="titreur"> frontEnd Developpeur </h3>
             <p className="descripteur"> capable de créer et de mettre en ligne site web</p>
             <div className="progresseur">
               <div className="progression">
                 <span className="valeur"> 90% </span>

               </div>

             </div>
           </a>
         </li>

         <li className="carte">
           <a href="#">
             <div className="imageur">

             </div>
             <h3 className="titreur"> BackEned Developpeur </h3>
             <p className="descripteur"> capable de créer une application </p>
             <div className="progresseur">
               <div className="progression">
                 <span className="valeur"> 90% </span>

               </div>

             </div>
           </a>
         </li>

         <li className="carte">
           <a href="#">
             <div className="imageur">

             </div>
             <h3 className="titreur"> Developpeur mobile</h3>
             <p className="descripteur"> capable de créer une application mobile</p>
             <div className="progresseur">
               <div className="progression">
                 <span className="valeur"> 90% </span>

               </div>

             </div>
           </a>
         </li>


       </ul>

     </div>
    {/**<!--je maitrise -->**/}

  </section>
  <section id="performance" className="projetsection">
    <h2 className="titresection"> Mes realisations</h2>
   <ol className="listeprojet">
      <li className="miniature"> <a href="#">
          <div className="imageprojet">
            <img src="assets/images/real4.PNG" alt=""/>
          </div>

          <div className="dettailleprojet">
             <h4 className="titreprojet"> Charte graphique</h4>
             <pan className="prixprojet"> XAF 130 000</pan>
             <a href="#" className="boutonprojet"> voir le projet</a>
          </div>
       </a></li>

       <li className="miniature"> <a href="#">
           <div className="imageprojet">
             <img src="assets/images/real1.jpg"alt=""/>
           </div>

           <div className="dettailleprojet">
              <h4 className="titreprojet"> Charte graphique</h4>
              <pan className="prixprojet"> XAF 130 000</pan>
              <a href="#" className="boutonprojet"> voir le projet</a>
           </div>
        </a></li>

        <li className="miniature"> <a href="#">
            <div className="imageprojet">
              <img src="assets/images/real2.jpg" alt=""/>
            </div>

            <div className="dettailleprojet">
               <h4 className="titreprojet"> Charte graphique</h4>
               <pan className="prixprojet"> XAF 130 000</pan>
               <a href="#" className="boutonprojet"> voir le projet</a>
            </div>
         </a></li>

         <li className="miniature"> <a href="#">
             <div className="imageprojet">
               <img src="assets/images/capable3.jpg" alt=""/>
             </div>

             <div className="dettailleprojet">
                <h4 className="titreprojet"> Charte graphique</h4>
                <pan className="prixprojet"> XAF 130 000</pan>
                <a href="#" className="boutonprojet"> voir le projet</a>
             </div>
          </a></li>

          <li className="miniature"> <a href="#">
              <div className="imageprojet">
                <img src="assets/images/capable2.png" alt=""/>
              </div>

              <div className="dettailleprojet">
                 <h4 className="titreprojet"> Charte graphique</h4>
                 <pan className="prixprojet"> XAF 130 000</pan>
                 <a href="#" className="boutonprojet"> voir le projet</a>
              </div>
           </a></li>

           <li className="miniature"> <a href="#">
               <div className="imageprojet">
                 <img src="assets/images/capable.png" alt=""/>
               </div>

               <div className="dettailleprojet">
                  <h4 className="titreprojet"> Charte graphique</h4>
                  <pan className="prixprojet"> XAF 130 000</pan>
                  <a href="#" className="boutonprojet"> voir le projet</a>
               </div>
            </a></li>

            <li className="miniature"> <a href="#">
                <div className="imageprojet">
                  <img src="assets/images/real3.png" alt=""/>
                </div>

                <div className="dettailleprojet">
                   <h4 className="titreprojet"> Charte graphique</h4>
                   <pan className="prixprojet"> XAF 130 000</pan>
                   <a href="#" className="boutonprojet"> voir le projet</a>
                </div>
             </a></li>

             <li className="miniature"> <a href="#">
                 <div className="imageprojet">
                   <img src="assets/images/capable1.png" alt=""/>
                 </div>

                 <div className="dettailleprojet">
                    <h4 className="titreprojet"> Charte graphique</h4>
                    <pan className="prixprojet"> XAF 130 000</pan>
                    <a href="#" className="boutonprojet"> voir le projet</a>
                 </div>
              </a></li>
   </ol>
   {/** <!-- ce que je fais-->¨  **/}
  </section>

  <section className="contactsection">
    <div className="commentairecontact">
      <h2 className="titresection"> Comment me joindre !</h2>
      <div className="youtub">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HWXQVU1tL4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </div>
    <form className="formulairecontact" action="index.html" method="post">
      <div className="carte">
       <label for="nameUser">Votre Nom</label>
       <input id="nameUser" type="text" votre name="nameUser" placeholder="votre"value=""/>
     </div>
     <div className="carte">
      <label for="mailUser"> Mail</label>
      <input id="mailUser" type="text" name="mailUser" placeholder="Votre adresss mail"value=""/>
    </div>
    <div className="carte">
     <label for="phoneUser">Telephone</label>
     <input id="phoneUser" type="text" name="phneUser" placeholder="Votre numero Telephne"value=""/>
   </div>
   <div className="carte">
    <label for="commentUser">commentaire /Avis</label>
    <textarea id="commentUser" name="commentUser" placeholder="Entrez votre message ici" rows="5" cols="40"></textarea>
  </div>
  <button type="submit" name="button"> Envoyer le message </button>

    </form>
    {/*<!-- commentme j'ajoind -->*/}
  </section>

  <footer>
  <footer className="footer">
    <div className="media">

      <div className="mediainterne">
        <ul className="apropos1">
          <h5 className="mestitre">Media</h5>
          <div className="">
            <li> <a href="http://t.me/+237658874912">
              <svg className="telegram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> {/*<!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->  /*/} <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>

               <label for="" className="message"> telegram</label>
            </a> </li>
            <li> <a href="http://wa.me/+237658874912">
                <svg className="telegram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> {/*<!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->*/} <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"/></svg>
              <label for="" className="message">whatsapp</label>
            </a> </li>
            <li> <a href="https://fb.me/orange/tout%20profite">

            </a> </li>

          </div>
        </ul>
        <div className="apropos2">
          <h5  className="mestitre"> A propos</h5>
          <p>mon premier paragraphe</p>
          <p>mon deuxieme paragraphe</p>
          <p>mon premier paragraphe</p>
          <p>mon premier paragraphe</p>

        </div>
      </div>

    </div>

    <div className="map">
     <h5 className="mestitre"> Map</h5>
   {/*   <!-- commentme j'ajoind --> */}
  {/* <!--    <iframe width="500" height="300" src="https://www.youtube.com/embed/U0f4zs_mSM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   --> */}

      <iframe src="https://www.google.com/maps/d/embed?mid=1kSxwK0qlf4YcyXU5of1Dstc5eG8&ehbc=2E312F" width="500" height="300"></iframe>
    </div>

  </footer>

</footer>

  

      
    </div>
  );
}

export default App;
