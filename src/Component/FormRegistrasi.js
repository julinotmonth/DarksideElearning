import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import kampusmerdeka from "../Aset/kampusmerdeka.png"
import Sidebar from "./Sidebar";
import { useState } from "react";

function FormRegistrasi (props) {
    const { username } = props
    const { nim } = props
    const { prodi } = props
    const { language } = props
    const { deskripsi_1 } = props
    const { deskripsi_2 } = props
    const { deskripsi_3 } = props
    const { deskripsi_4 } = props
    const { deskripsi_5 } = props
    const { deskripsi_6 } = props
    const { firstname } = props
    const { lastname } = props
    const { email } = props
    const { daftaras } = props
    const { nima } = props
    const { programs } = props
    const { regspada } = props

    return (
        <Row>
            <Col className="wadah_registrasi" xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="wadah_registrasii">
                    <Row>
                        <Col xl={11} lg={11} md={11} sm={11} xs={11}>
                            <h3 className="judul_registrasi">{language}</h3>
                        </Col>
                        <Col className="wadahx" xl={1} lg={1} md={1} sm={1} xs={1}>
                            <Link className="wadah_close">
                                <IoMdClose className="close" />
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="wadah_kampus_merdeka" xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Link>
                                <img src={kampusmerdeka} className="img_kampusmerdeka" />
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="wadah_deskripsi" xl={12} lg={12} md={12} sm={12} xs={12}>
                            <p className="deskripsi_registrasi">{deskripsi_1} <span className="nim_underline">{nim}@umsida.ac.id</span> {deskripsi_2} <Link className="spada_indo">{deskripsi_5}</Link> {deskripsi_3} <Link className="change">{deskripsi_4}</Link> {deskripsi_6}
                            </p>
                        </Col>
                    </Row>
                    <form>
                        <Row>
                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                <label>{firstname}</label>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                <input type="text" className="input_firstname" readOnly defaultValue={nim} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                <label>{lastname}</label>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                <input type="text" className="input_firstname" readOnly defaultValue={username} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                <label>{email}</label>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                <input type="email" className="input_firstname italicc" defaultValue={"Mohon untuk disi sendiri !!!"} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                <label>{daftaras}</label>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                <select>
                                    <option>Mahasiswa</option>
                                    <option>Dosen</option>
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                <label>{nima}</label>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                <input type="text" className="input_nim" />
                            </Col>
                        </Row>
                        <Row className="row_prog">
                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                <label>{programs}</label>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                <select value={prodi} readOnly>
                                    <option>D3 Fisioterapi</option>
                                    <option>D3 Kebidanan</option>
                                    <option>D4 Manajemen Informasi Kesehatan</option>
                                    <option>D4 Teknologi Laboratorium Medis</option>
                                    <option>S1 Administrasi Publik</option>
                                    <option>S1 Agroteknologi</option>
                                    <option>S1 Akuntansi</option>
                                    <option>S1 Bisnis Digital</option>
                                    <option>S1 Fisioterapi</option>
                                    <option>S1 Hukum</option>
                                    <option>S1 Ilmu Komunikasi</option>
                                    <option>S1 Informatika</option>
                                    <option>S1 Kebidanan</option>
                                    <option>S1 Kedokteran Gigi</option>
                                    <option>S1 Manajemen</option>
                                    <option>S1 Pendidikan Agama Islam</option>
                                    <option>S1 Pendidikan Bahasa Arab</option>
                                    <option>S1 Pendidikan Bahasa Inggris</option>
                                    <option>S1 Pendidikan Guru Madrasah Ibtidaiyah</option>
                                    <option>S1 Pendidikan Guru Pendidikan Anak Usia Dini</option>
                                    <option>S1 Perbankan Syariah</option>
                                    <option>S1 Psikologi</option>
                                    <option>S1 Teknik Elektro</option>
                                    <option>S1 Teknik Industri</option>
                                    <option>S1 Teknik Mesin</option>
                                    <option>S1 Teknik Sipil</option>
                                    <option>S1 Teknologi Pangan</option>
                                    <option>Profesi Pendidikan Profesi Bidan</option>
                                    <option>Profesi Pendidikan Profesi Dokter Gigi</option>
                                    <option>S2 Manajemen</option>
                                    <option>S2 Manajemen Pendidikan Islam</option>
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="wadah_button_spada">
                                    <button className="button_spada" type="submit">{regspada}</button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Col>
        </Row>
    );
}

export default FormRegistrasi;