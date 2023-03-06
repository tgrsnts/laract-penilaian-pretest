import { React, useState } from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import '../../css/style.css'


const Login = () => {
    const { error } = usePage().props.errors;
    const [idAdmin, setIdAdmin] = useState();
    const [nis, setNis] = useState();
    const [nip, setNip] = useState();
    const [password, setPassword] = useState();

    const [formAdminVisible, setFormAdminVisible] = useState(false);
    const [formSiswaVisible, setFormSiswaVisible] = useState(false);
    const [formGuruVisible, setFormGuruVisible] = useState(false);

    const handleLoginAdmin = () => {
        Inertia.post('/login/admin', {
            idAdmin,
            password
        })
    }

    const handleLoginSiswa = () => {
        Inertia.post('/login/siswa', {
            nis,
            password
        })
    }

    const handleLoginGuru = () => {
        Inertia.post('/login/guru', {
            nip,
            password
        })
    }
    return (
        <div>
            <Head title='Login' />

            <div className='header'>
                <img src="/gambar/header.jpg" alt="" width="100%" height="40%" />
            </div>

            <div className='menu'>
                <a href="/" className='active'>Home</a>
            </div>

            <div className='kiri-atas'>
                
                <center>
                    <button className='button-primary' type='button' onClick={() => {
                        setFormAdminVisible(!formAdminVisible);
                        setFormSiswaVisible(false);
                        setFormGuruVisible(false);
                    }}>Admin</button>
                    <button className='button-primary' type='button' onClick={() => {
                        setFormAdminVisible(false);
                        setFormSiswaVisible(!formSiswaVisible);
                        setFormGuruVisible(false);
                    }}>Siswa</button>
                    <button className='button-primary' type='button' onClick={() => {
                        setFormAdminVisible(false);
                        setFormSiswaVisible(false);
                        setFormGuruVisible(!formGuruVisible);
                    }}>Guru</button>
                </center>

                <div style={{ display: formAdminVisible ? 'block' : 'none' }}>
                    <center>Login Admin</center>
                    <p>{error}</p>

                    <table>
                        <tr>
                            <td width="25%">Kode Admin</td>
                            <td width="25%"><input type="text" onChange={(e) => {setIdAdmin(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td width="25%">Password</td>
                            <td width="25%"><input type="password" onChange={(e) => {setPassword(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <center>
                                    <button className='button-primary' type='button' onClick={() => {handleLoginAdmin()}}>
                                        Login
                                    </button>
                                </center>
                            </td>
                        </tr>
                    </table>
                </div>

                <div style={{ display: formSiswaVisible ? 'block' : 'none' }}>
                    <center>Login Siswa</center>
                    <p>{error}</p>

                    <table>
                        <tr>
                            <td width="25%">NIS</td>
                            <td width="25%"><input type="text" onChange={(e) => {setNis(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td width="25%">Password</td>
                            <td width="25%"><input type="password" onChange={(e) => {setPassword(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <center>
                                    <button className='button-primary' type='button' onClick={() => {handleLoginSiswa()}}>
                                        Login
                                    </button>
                                </center>
                            </td>
                        </tr>
                    </table>
                </div>

                <div style={{ display: formGuruVisible ? 'block' : 'none' }}>
                    <center>Login Guru</center>
                    <p>{error}</p>

                    <table>
                        <tr>
                            <td width="25%">NIP</td>
                            <td width="25%"><input type="text" onChange={(e) => {setNip(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td width="25%">Password</td>
                            <td width="25%"><input type="password" onChange={(e) => {setPassword(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <center>
                                    <button className='button-primary' type='button' onClick={() => {handleLoginGuru()}}>
                                        Login
                                    </button>
                                </center>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='kanan'>
                <center>
                    <h1>SELAMAT DATANG DI WEB PENILAIAN</h1>
                </center>
            </div>

            <div className='kiri-bawah'>
                <p className='mar'>Gallery</p>
                <img src="/gambar/g2.jpg" alt="" />
                <div className="deskripsi">SMK BISA</div>
            </div>
        </div>
    )
}

export default Login