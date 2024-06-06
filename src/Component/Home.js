import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

function Home(props) {
    useEffect(() => {
        document.title = 'E-Learning UMSIDA: Log in to the site';
      }, []);

      const navigate = useNavigate();
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [ror, setError] = useState('')
      const { setUsername } = props
      const { setNim } = props
      const { setProdi } = props
      const [tes1, setTes1] = useState('')
      

      axios.get('http://localhost:2000/api/bootcamp')
      .then(res => {
        setTes1(res.data)
      })

      .catch(err => {
        console.log(err)
      })
      
      
      const handlingSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:2000/api/bootcamp', {email, password})
        .then(res => {
            console.log(res)
            if(res.data == "Login Successfully") {
                const user = tes1.find((item) => item.email == email)
                console.log(user)
                if (user) {
                    setUsername(user.nama)
                    localStorage.setItem('username', user.nama)
                    setNim(user.email)
                    localStorage.setItem('nima', user.email)
                    setProdi(user.prodi)
                    localStorage.setItem('prodii', user.prodi)
                    navigate('/my') 
                }

                else {
                    console.log("Shitt")
                }
            }

            else {
                setError(res.data)
                console.log(res.data)
                console.log('Username and Password tidak cocok')
            }
        })

        .catch(err => {
            console.log(err)
        })
      }
    return(
        <div className="wadah">
            <Helmet>
                <style>{'body { background-color: #778ca3 }'}</style>
            </Helmet>
                <div className="wadah1" style={{border: '1px solid red'}}>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={8} xs={10} style={{margin: '0px auto'}}>
                            <Row>
                                <Col className="title" xl={12} lg={12} md={12} sm={12} xs={12} style={{margin: '0px auto'}}>
                                    <h1 className="title_umsida">E-Learning UMSIDA</h1>
                                </Col>
                            </Row>
                            <Row className={ror ? 'displaytrue' : 'displayfalse'}> 
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <div className="wadah-validation">
                                        <div className="wadah2-validation">
                                            <div className="bckgrnd-validation">
                                                <p className="content-validation">Invalid login, please try again</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="background_input" xl={6} lg={6} md={12}>
                                    <Row>
                                        <Col xl={3}></Col>
                                        <Col xl={9}>
                                            <form onSubmit={handlingSubmit} className="form_input">
                                                <div className="wadah_text">
                                                    <input onChange={e => setEmail(e.target.value)} className="input_text spasi" type="text" name="email" placeholder="Username"></input>
                                                    <input onChange={e => setPassword(e.target.value)} className="input_text" type="password" name="password" placeholder="Password"></input>

                                                </div>
                                                <div className="wadah_remember">
                                                    <input className="input_radio" type="checkbox" name="remember" id="remember" />
                                                    <label htmlFor="remember">Remember username</label>
                                                </div>
                                                <div className="button_login">
                                                    <button type="submit" className="buton">Log in</button>
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="background_forgot" xl={6} lg={6} md={12}>
                                    <div className="wadah_linkforget">
                                        <Link className="link_forget">Forgotten your username or password?</Link>
                                    </div>
                                    <div className="wadah_cookies">
                                        <span className="cookies">Cookies must be enabled in your browser</span>
                                        <FaQuestionCircle title="icon sampah" className="question" />
                                    </div>
                                    <div className="wadah_Courses">
                                        <span className="courses">Some courses may allow guest access</span>
                                    </div>
                                    <div className="button_guest">
                                        <button className="guest">Log in as a guest</button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                    <div className="kotak">
                <div className={ror ? 'wadah_footer' : 'wadah_footer_false'}>
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
        </div>
    );
}

export default Home;