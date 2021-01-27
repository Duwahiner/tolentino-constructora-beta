/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { jsx, css } from '@emotion/core';
import { dimensions, colors, fonts, svg } from '../../../public/global.config';


const styles = {
    containerNavRight: css`
        width: ${dimensions.containers.width}%;
        height: 100vh;
        position: fixed;
        top: 0%;
        right: -100%;
        background-color: ${colors.rgbAlette.rgb24(0.9)}
    `,
    containerNavRightLink: css`
        width: 40%;
        height: 100%;
        position: absolute;
        top: 0%;
        right: -100%;
        background: ${colors.rgbAlette.rgb12Blanco(1)};
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

const NavbarRight = (props) => {
    const elementDOM = {};
    useEffect( () => {
        Object.assign(elementDOM, {
            contenedorNavbar: document.getElementById('contenedorNavbar'),
            contenedorLink: document.getElementById('contenedorLink'),
        }) 
    })
   
    const handleClose = () => {
        // Aplicano clases contenedor.
        elementDOM.contenedorNavbar.classList.remove('fadeLeft')
        elementDOM.contenedorNavbar.classList.add('fadeRight')

        // Aplicano clases al hijo del contenedor.
        elementDOM.contenedorLink.classList.remove('fadeLeftClone')
        elementDOM.contenedorLink.classList.add('rightClone')
    }

    return (
        <div id='contenedorNavbar' css={styles.containerNavRight} >
            <div id='contenedorLink' css={styles.containerNavRightLink}>
                <div id='bottonClose' css={styles.containerNavRightBottonClose} onClick={handleClose}>
                    <ReactSVG src={svg.svg$('icon-close')} />
                </div>
                <div css={styles.containerNavRightLinkData} >
                    
                        {/* Aqui titulo de navbar*/}
                    <h2 css={styles.navRightLinkTitle}> {props.title} </h2>

                    {/* Aqui empieza el menu de navegacion */}
                    <div css={styles.containerNavRightLinkBottons} >
                        <div css={styles.navRightLinkBottons} >
                            <Link href={props.href.home}>
                                <a css={styles.navRightLinkA}>
                                    <span css={styles.navRightLinkASpan}> {props.nameRouter.home} </span>
                                </a>
                            </Link> 
                        </div>
                        <div css={styles.navRightLinkBottons} >
                            <Link href={props.href.company}>
                                <a css={styles.navRightLinkA}>
                                    <span css={styles.navRightLinkASpan}> {props.nameRouter.company} </span>
                                </a>
                            </Link>
                        </div>
                        <div css={styles.navRightLinkBottons} >
                            <Link href={props.href.services}>
                                <a css={styles.navRightLinkA}>
                                    <span css={styles.navRightLinkASpan}> {props.nameRouter.services} </span>
                                </a>
                            </Link>
                        </div>
                        <div css={styles.navRightLinkBottons} >
                            <Link href={props.href.projects}>
                                <a css={styles.navRightLinkA}>
                                    <span css={styles.navRightLinkASpan}> {props.nameRouter.projects} </span>
                                </a>
                            </Link>
                        </div>
                        <div css={styles.navRightLinkBottons} >
                            <Link href={props.href.contact}>
                                <a css={styles.navRightLinkA}>
                                    <span css={styles.navRightLinkASpan}> {props.nameRouter.contact} </span>
                                </a>
                            </Link>
                        </div>
                    </div>

                        {/* Aqui empieza bottones redes sociales */}
                    <div css={styles.containerNavRightLinkRedes}>
                        <div css={styles.containerNavRighSvg}> <ReactSVG src={svg.svg$('redes-01')} /> </div>
                            <div css={styles.separador}> </div>
                        <div css={styles.containerNavRighSvg}> <ReactSVG src={svg.svg$('redes-02')} /> </div>
                            <div css={styles.separador}> </div>
                        <div css={styles.containerNavRighSvg}> <ReactSVG src={svg.svg$('redes-03')} /> </div>
                            <div css={styles.separador}> </div>
                        <div css={styles.containerNavRighSvg}> <ReactSVG src={svg.svg$('redes-04')} /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavbarRight;