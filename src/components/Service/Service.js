import React, { useEffect, useState } from 'react';
import ServiceInfo from '../serviceInfo/ServiceInfo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Service.css'

const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('./FakeDB.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <Header />
            <h1 className="text-center m-2 p-2">Read Your Favourite one!!</h1>

            <div className="row">

                {
                    service.map(pd => <ServiceInfo
                        key={pd.key}
                        pd={pd}
                    />)
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Service;