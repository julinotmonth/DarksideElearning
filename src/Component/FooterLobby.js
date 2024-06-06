import { Link } from "react-router-dom";
import moodlelogo from '../Aset/moodlelogo.png'

function FooterLobby () {
    return (
        <div className="kotak_footer">
            <div className="wadah_footer_lobby">
                <div className="not_login">
                    <span className="are_not">You are not logged in. (<Link className="join_login">Log in</Link>)</span>
                    <Link className="home_link space">
                        <img className="foto_moodle" src={moodlelogo} />
                    </Link>
                    <div className="wadah_language">
                        <Link className="language top">English ‎(en)‎</Link>
                    </div>
                    <div className="wadah_language">
                        <Link className="language left">English ‎(en)‎</Link>
                    </div>
                    <div className="wadah_language">
                        <Link className="language left">Indonesian ‎(id)‎</Link>
                    </div>
                    <div className="wadah_language">
                        <Link className="language left bottom">عربي ‎(ar)‎</Link>
                    </div>
                    <div className="wadah_data">
                        <Link className="data_link">Data retention summary</Link>
                    </div>
                    <div className="wadah_mobile">
                        <Link className="mobile_link">Get the mobile app</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterLobby;