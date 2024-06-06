import { useEffect, useState } from "react";
import Carousels from "../Component/Carousels";
import NavbarMy from "../Component/NavbarMy";
import NimNam from "../Component/NimNam";
import FormRegistrasi from "../Component/FormRegistrasi";
import FormEnroll from "../Component/FormEnroll";
import Menu from "../Component/Menu";
import CoursesRecently from "../Component/CoursesRecently";
import CourseOverview from "../Component/CourseOverview";
import Sidebar from "../Component/Sidebar";
import { Col, Row } from "react-bootstrap";
import Footer from "../Component/Footer";
import { useTranslation } from "react-i18next";

function MyCourses (props) {
    const { username } = props
    const { nim } = props
    const { prodi } = props

    const { t } = useTranslation(); // Initialize useTranslation hook

    // State to hold the selected language
    const [language, setLanguage] = useState("");
    const [deskripsi_1, setDeskripsi_1] = useState("");
    const [deskripsi_2, setDeskripsi_2] = useState("");
    const [deskripsi_3, setDeskripsi_3] = useState("");
    const [deskripsi_4, setDeskripsi_4] = useState("");
    const [deskripsi_5, setDeskripsi_5] = useState("");
    const [deskripsi_6, setDeskripsi_6] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [daftaras, setDaftaras] = useState("");
    const [nima, setNim] = useState("");
    const [programs, setPrograms] = useState("");
    const [regspada, setRegspada] = useState("");
    const [enrolcode, setEnrolcode] = useState("");
    const [enroll, setEnroll] = useState("");
    const [dashboard, setDashboard] = useState("");
    const [calendar, setCalendar] = useState("");
    const [badges, setBadges] = useState("");
    const [courses, setallCourses] = useState("");
    useEffect(() => {
        document.title = 'Dashboard';
      }, []);

      useEffect(() => {
        const storedformspada = localStorage.getItem('formspada');
        const storedDeskripsi_1 = localStorage.getItem('deskripsi_1');
        const storedDeskripsi_2 = localStorage.getItem('deskripsi_2');
        const storedDeskripsi_3 = localStorage.getItem('deskripsi_3');
        const storedDeskripsi_4 = localStorage.getItem('deskripsi_4');
        const storedDeskripsi_5 = localStorage.getItem('deskripsi_5');
        const storedFirstname = localStorage.getItem('firstname');
        const storedLastname = localStorage.getItem('lastname');
        const storedEmail = localStorage.getItem('email');
        const storedDaftaras = localStorage.getItem('daftaras');
        const storedNim = localStorage.getItem('nim');
        const storedPrograms = localStorage.getItem('programs');
        const storedDeskripsi_6 = localStorage.getItem('deskripsi_6');
        const storedRegspada = localStorage.getItem('regspada');
        const storedEnrolcode = localStorage.getItem('enrolcode');
        const storedEnroll = localStorage.getItem('enroll');
        const storedDashboard = localStorage.getItem('dashboard');
        const storedCalendar = localStorage.getItem('calendar');
        const storedBadges = localStorage.getItem('badges');
        const storedallCourses = localStorage.getItem('allcourses');
        if (storedformspada && storedDeskripsi_1 && storedDeskripsi_2 && storedDeskripsi_3 && storedDeskripsi_4 && storedDeskripsi_5 && storedDeskripsi_6 && storedFirstname && storedLastname && storedEmail && storedDaftaras && storedNim && storedPrograms && storedRegspada && storedEnrolcode && storedEnroll && storedDashboard && storedCalendar && storedBadges && storedallCourses) {
          setLanguage(storedformspada)
          setDeskripsi_1(storedDeskripsi_1)
          setDeskripsi_2(storedDeskripsi_2)
          setDeskripsi_3(storedDeskripsi_3)
          setDeskripsi_4(storedDeskripsi_4)
          setDeskripsi_5(storedDeskripsi_5)
          setDeskripsi_6(storedDeskripsi_6)
          setFirstname(storedFirstname)
          setLastname(storedLastname)
          setEmail(storedEmail)
          setDaftaras(storedDaftaras)
          setNim(storedNim)
          setPrograms(storedPrograms)
          setRegspada(storedRegspada)
          setEnrolcode(storedEnrolcode)
          setEnroll(storedEnroll)
          setDashboard(storedDashboard)
          setCalendar(storedCalendar)
          setBadges(storedBadges)
          setallCourses(storedallCourses)
        }
      }, []);
    return (
        <>
            <NavbarMy nim={nim} username={username} setLanguage={setLanguage} setDeskripsi_1={setDeskripsi_1} setDeskripsi_2={setDeskripsi_2} setDeskripsi_3={setDeskripsi_3} setDeskripsi_4={setDeskripsi_4} setDeskripsi_5={setDeskripsi_5} setDeskripsi_6={setDeskripsi_6} setFirstname={setFirstname} setLastname={setLastname} setEmail={setEmail} setDaftaras={setDaftaras} setNim={setNim} setPrograms={setPrograms} setRegspada={setRegspada} setEnrolcode={setEnrolcode} setEnroll={setEnroll} setDashboard={setDashboard} setCalendar={setCalendar} setBadges={setBadges} setallCourses={setallCourses} />
            <Carousels />
            <NimNam nim={nim} username={username} />
            <div className="bawah">
                <Row>
                    <Col xl={10} lg={12} md={12} sm={12} xs={12}>
                        <FormRegistrasi prodi={prodi} nim={nim} username={username} language={language} deskripsi_1={deskripsi_1} deskripsi_2={deskripsi_2} deskripsi_3={deskripsi_3} deskripsi_4={deskripsi_4} deskripsi_5={deskripsi_5} deskripsi_6={deskripsi_6} firstname={firstname} lastname={lastname} email={email} daftaras={daftaras} nima={nima} programs={programs} regspada={regspada} />
                        <FormEnroll enrolcode={enrolcode} enroll={enroll} />
                        <Menu dashboard={dashboard} calendar={calendar} badges={badges} courses={courses} />
                        <CoursesRecently /> 
                        <CourseOverview />
                    </Col>
                    <Col xl={2} lg={12} md={12} sm={12} xs={12}>
                        <Sidebar />
                    </Col>
                </Row>
            </div>
            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div style={{position:'relative'}}>
                        <Footer />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default MyCourses;