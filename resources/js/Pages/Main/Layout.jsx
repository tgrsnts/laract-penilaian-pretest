import React from 'react'
import "../../../css/style.css"
// import HeaderImage from "../../../src/images/header.jpg"
import {Link, usePage} from "@inertiajs/inertia-react"
import {inertia} from "@inertiajs/inertia"
const Layout = (children) => {
  return (
    <div>
        <div className='header'>
            {/* <img src={HeaderImage} alt="" /> */}
        </div>

        <div className='menu'>
            <b>
                {/* {user?.role == 'admin' ? ( */}
                    <div>
                        <a href="/guru">Guru</a>
                        <a href="/jurusan">Jurusan</a>
                        <a href="/kelas">Kelas</a>
                        <a href="/siswa">Siswa</a>
                        <a href="/mapel">Mapel</a>
                        <a href="/mengajar">Mengajar</a>
                    </div>
                {/* ) : ( <div> */}
                    <a href="/nilai">Nilai</a>
                {/* </div>)} */}
                <a href="/logout">Logout</a>
            </b>
        </div>

        {/* <div className='content'>
            {children}
        </div> */}

        <div className='footer'>
            <b>
                <p className='mar'>2023 - Pretest</p>
            </b>
        </div>

    </div>
  )
}

export default Layout
