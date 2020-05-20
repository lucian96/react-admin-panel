import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

function About() {
    return(
        <div>
            <h1>Admin panel - Proiectul 1</h1>
            <Navbar>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </Navbar>
            <h4>Functionalitati</h4>
            <ul>
                <li> Preluare useri şi postări din API: useri şi postările sunt preluate prin intermediul unui request asincron către JSONPlaceHolder</li>

                <li> Informaţiile utilizatorilor şi postările preluare sunt prelucrate şi afişate pe ecran folosind componentele UserList şi UserItem, respectiv PostList si PostItem</li>

                <li> Click pe primul buton de tip color - va modifica culoarea de fundal</li>

                <li> Click pe al doilea buton de tip color - va modifica culoarea fontului</li>

                <li> Click pe  "Afisează postările" - va fi afișată lista postărilor</li>

                <li> Click inapoi pe "Afişează utilizatorii" - va fi afișată lista utilizatorilor</li>

                <li> Click pe butonul de ştergere al unui utilizator - va fi şters utilizatorul respectiv</li>

                <li> Introducere nume, email şi "Client GOLD" + click pe "Adaugă utilizator" - va fi adăugat un nou utilizator în listă</li>

                <li> Câmpurilor nume şi email le-a fost adăugată funcţionalitatea de validare a inputului astfel încât acestea sa nu fie lăsate necompletate, iar câmpul pentru email să conţină caracterele obligatorii</li>

                <li> Click pe "About" din bara de meniu - veti fi redirecţionat către pagina de About, click înapoi pe "Home", veţi fi redirecţionat la pagina principală</li>

                <li> La cererea unei resurse neexistente - veti fi redirecţionat către pagina-404</li>
            </ul>
        </div>
    )
}

export default About;