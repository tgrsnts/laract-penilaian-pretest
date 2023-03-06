import React from 'react'
import Layout from './Main/Layout'
import { usePage } from '@inertiajs/inertia-react'
import '../../css/style.css'

const Home = () => {
    const { user } = usePage().props.auth;
    console.log("USER", user);
    return (
        
            <Layout>
                <center>
                    <b>
                        <br />
                        SELAMAT DATANG USER DENGAN AKSES MASUK {''}
                        {user?.kode_admin ?? user?.nis ?? user?.nip}
                    </b>
                </center>
            </Layout>
    
    )
}

export default Home