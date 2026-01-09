import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutUs from '../components/AboutUs';
import Calculator from '../components/Calculator';
import Sahyog from '../components/SahyogCard';
import SkillUdaan from '../components/SkillUdaan';
import ContactUs from '../components/ContactUs';

import Membership from '../components/Membership';
import Deposits from '../components/Deposites';
import Loans from '../components/Loan';
import SHG from '../components/SHG';
import Gifts from '../components/Gifts';
import Testimonials from '../components/Testimonials';
import Gallery from "../components/Gallery";



const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="AboutUs" element={<AboutUs />} />
                            <Route path="Calculator" element={<Calculator />} />
                            <Route path="Sahyog" element={<Sahyog />} />
                            <Route path="skilludaan" element={<SkillUdaan />} />
                            <Route path="contact" element={<ContactUs />} />
                            <Route path="membership" element={<Membership/>} />
                            <Route path="deposits" element={<Deposits/>} />
                            <Route path="loans" element={<Loans/>} />
                            <Route path="shg" element={<SHG/>} />
                             <Route path="gifts" element={<Gifts/>} />
                             <Route path="testimonials" element={<Testimonials/>} />
                             <Route path="gallery" element={<Gallery/>}/>

                        </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;