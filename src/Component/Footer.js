import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
    return (
        <div className="kotak">
            <div className="wadah_footer">
                <div className="not_login">
                    <span className="are_not">You are not logged in.</span>
                    <Link className="home_link space">Home</Link>
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

export default Footer;