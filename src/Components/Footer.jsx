//FOOTER CREADO PARA HACER UN APARTADO DE CONTACTO
//PUNTO 4
import React from 'react';
import logoAmazon from '../Amazon-Logo.png';
//Import al formulario
import Formulario from './formContact';
//
import "../App.css";
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox, CDBContainer } from 'cdbreact';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <CDBFooter className="shadow footerBackground">
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            <img alt="logo" src={logoAmazon} width="150px" />
                        </a>
                        <p className="my-3" style={{ width: '250px' }}>
                            Work Hard, Have Fun, Make History
                        </p>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Meet us
                        </p>
                        <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href={"./Formulario"}>Contact us</CDBFooterLink>
                            <CDBFooterLink href="https://www.amazon.com" target="_blank">Original website</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Help
                        </p>
                        <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Support</CDBFooterLink>
                            <CDBFooterLink href="/">Sign Up</CDBFooterLink>
                            <CDBFooterLink href="/">Sign In</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Products
                        </p>
                        <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Windframe</CDBFooterLink>
                            <CDBFooterLink href="/">Loop</CDBFooterLink>
                            <CDBFooterLink href="/">Contrast</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <CDBBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ width: '100%' }}
                    className="mx-auto mt-4"
                >
                    <small className="text-center" style={{ width: '50%' }}>
                        &copy; Amazon, 2022. All rights reserved.
                    </small>
                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );
};

export default Footer;