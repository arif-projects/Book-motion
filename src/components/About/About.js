import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'

import './About.css'

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="about">
                <h1 className="about-title">About us</h1>
                <div className=" d-flex image-about">
                    <div className="img1">
                        <img className="w-50" src={img1} alt="" />
                    </div>
                    <div className="img2">
                        <img className="w-50" src={img2} alt="" />
                    </div>
                </div>

                <div className="about-text">
                    <h6>The <span className="name">Book Motion Library</span> is a collection of materials, books or media that are easily accessible for use and not just for display purposes. It is responsible for housing updated information in order to meet the user's needs on a daily basis. The <span className="name">Book Motion Library</span> provides physical (hard copies documents) or digital access (soft copies) materials, and may be a physical location or a virtual space, or both. The <span className="name">Book Motion Library</span> collection can include printed materials and other physical resources in many formats such as DVDs, CDs and Cassette as well as access to information, music or other content held on bibliographic databases.

                        The <span className="name">Book Motion Library</span>, which may vary widely in size, may be organized for use and maintained by a public body such as a government, an institution/ schools, a corporation, or a private individual. In addition to providing materials, libraries also provide the services of librarians who are trained and experts at finding, selecting, circulating and organizing information and at interpreting information needs, navigating and analyzing very large amounts of information with a variety of resources.

                        Library buildings often provide quiet and conducive areas for studying, as well as common areas for group study and collaboration, and may provide public facilities for access to their electronic resources; for instance: computers and access to the Internet. The library's clientele and therefore the services offered vary depending on its type: users of a public library have different needs from those of a special library, for example. Libraries may also be community hubs, where programs are delivered and people engage in lifelong learning. Modern libraries extend their services beyond the physical walls of a building by providing material accessible by electronic means, including from home via the Internet. Hence managing information in an information world has become very easy simply because information can be provided or being accessed virtually by people who are in remote areas and other places away from the library.

                        The services the library offers are variously described as library services, information services, or the combination "library and information services", although different institutions and sources define such terminology differently.</h6>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;