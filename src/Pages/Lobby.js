import { useEffect } from "react";
import Navbar from "../Component/Navbar";
import Carousels from "../Component/Carousels";
import Card from "../Component/Card";
import Search from "../Component/Search";
import Categories from "../Component/Categories";
import FooterLobby from "../Component/FooterLobby";

function Lobby () {
    useEffect(() => {
        document.title = 'E-Learning UMSIDA';
      }, []);
    return(
        <>
            <Navbar />
            <Carousels />
            <Card />
            <Search />
            <Categories />
            <FooterLobby />
        </>
    );
}

export default Lobby;