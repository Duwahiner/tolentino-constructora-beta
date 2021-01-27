/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React, { Component } from 'react';
import Head from 'next/head';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, colors, fonts, svg } from '../public/global.config';
import Footer from '../components/view/Footer'
import NavTop from '../components/view/header/Nav-top';
import NavbarRight from '../components/view/header/Navbar-right';

const styles = {
    containerApp: css`
        width: 100%;
        height: 100vh;
        position: absolute;
    `,
    containerChildApp: css`
        width: auto;
        height: auto;
    `,
    containerHeader: css`
        width: ${dimensions.containers.width}%;
        height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    `,
    containerNavRight: css`
        width: ${dimensions.containers.width}%;
        height: 100vh;
        position: absolute;
        top: 0%;
        right: 0%;
        background-color: ${colors.rgbAlette.rgb24(0.95)}
    `,
    containerNavRightLink: css`
        width: 40%;
        height: 100%;
        position: absolute;
        top: 0px;
        right: 0px;
        background: ${colors.rgbAlette.rgb24(0)} url(${svg.svg$('fondo-nav')}) center center no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    containerNavRightBottonClose: css`
        width: 40px;
        height: 40px;
        position: absolute;
        top: 40px;
        right: 40px;
        cursor: pointer;
        border-radius: 10px;
        background-color: ${colors.rgbAlette.rgb13Negro(1)};
        transition: all 1s ease;
        &:hover{
            background-color: ${colors.rgbAlette.rgb24(1)};
        }
    `,
    containerNavRightLinkData: css`
        width: auto;
        height: auto;
        flex: none;
        margin-left: 20px;
    `,
    navRightLinkTitle: css`
        ${fonts.fontAeonikBlack()};
        width: auto;
        height: auto;
        font-family: fontAeonikBlack, serif, sans-serif;
        text-align: left;
        font-size: ${fonts.fontSize*3.7}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        line-height: 50px;
    `,
    containerNavRightLinkRedes: css`
        width: 100%;
        height: 30px;
        flex: none;
        display: flex;
        margin-top: 40px;
    `,
    containerNavRighSvg: css`
        width: 30px;
        height: 30px;
        flex: none;
        background-color: ${colors.rgbAlette.rgb13Negro(1)};
        border-radius: 50%;
        transition: all 1s ease;
        cursor: pointer;
        &:hover{
            background-color: ${colors.rgbAlette.rgb24(1)};
        }
    `,
    containerNavRightLinkBottons: css`
        width: 100%;
        height: auto;
        flex: none;
    `,
    navRightLinkBottons: css`
        width: 100%;
        height: auto;
        flex: none;
    `,
    navRightLinkA: css`
        width: auto;
        height: auto;
        display: block;
        text-decoration: none;
    `,
    navRightLinkASpan: css`
        ${fonts.fontAeonikLight()};
        width: auto;
        height: 45px;
        display: block;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: left;
        font-size: ${fonts.fontSize*2.4}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        line-height: 45px;
        text-transform: 'uppercase';
        padding-left: 0px;
        box-sizing: border-box;
        transition: all 1s ease;
        cursor: pointer;
        &:hover{
            color: ${colors.rgbAlette.rgb24(1)};
        }
    `,

    separador: css`
        width: 10px;
        height: 30px;
        flex: none;
    `,
    
}
class Layaut extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div  id='containerApp' css={styles.containerApp} >
                        
                    <div css={ css `${styles.containerChildApp}` }>
                        <Global 
                            styles={
                                css`
                                    ::-webkit-scrollbar {
                                        width: 5px;
                                        display: block;
                                        background-color: ${colors.rgbAlette.rgb12Blanco(0)};
                                    }
                                    ::-webkit-scrollbar-thumb {
                                        width: 5px;
                                        background-color: ${colors.rgbAlette.rgb24(1)};
                                    }
                                    ::-webkit-scrollbar-thumb:hover {
                                        background-color: ${colors.rgbAlette.rgb13Negro(1)};
                                    }
                                    ::-webkit-scrollbar-track{
                                        background-color: ${colors.rgbAlette.rgb12Blanco(0)};
                                    }
                                   
                                `
                            }
                        />
                        {/*>>>>>>> Head datos claves que definiran la pagina;*/}
                        <Head>
                            <title> {this.props.title} </title>
                            <meta name="description" content="alette, peluqueria, salon de belleza, spas" />
                        </Head>

                        {/*>>>>>>> Header menu de navegacion, slider y entre otro datos de entra de la pagina;*/}
                        <header id='$header'
                            css={
                                css`
                                    ${styles.containerHeader};
                                    background: ${colors.rgbAlette.rgb24(1)} url(${this.props.img}) center center no-repeat;
                                    background-size: cover;
                                `
                            } 
                        >
                            <NavbarRight 
                                title='HOLA GANADOR'
                                href={{
                                    home: '/',
                                    company: '/tolentino',
                                    services: '/servicios',
                                    projects: '/portafolio',
                                    contact: '/contacto'
                                }}
                                nameRouter={{
                                    home: 'Inicio',
                                    company: 'Tolentino Constructora',
                                    services: 'Servicios',
                                    projects: 'Portafolio',
                                    contact: 'Contacto'
                                }}
                                
                            />
                            <NavTop setion={this.props.setion} />
                            {this.props.data}
                        </header>

                        {/*>>>>>>> Main informacion importante de la pagina;*/}
                        <main id='containerMain' css={styles.containerMain}>
                            {  this.props.children }
                        </main>

                        {/*>>>>>>> Footer datos de contacto de la pagina;*/}
                        {
                            this.props.activeFooter ?  <> </> : <footer css={styles.containerFooter}> <Footer /> </footer>
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Layaut;