/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React, { useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import { ReactSVG } from 'react-svg';
import { dimensions, colors, svg , fonts } from '../../../public/global.config';

const styles = {
    containerNavTop: css`
        width: ${dimensions.containers.width}%;
        height: 70px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        display: flex;
        justify-content: center;
    `,
    containerChildNavTop: css`
        width: ${dimensions.containersChild.width}%;
        height: 70px;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: none;
        display: flex;
    `,
    containerNavTopLogo: css`
        width: auto;
        height: 70px;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: auto;
        display: flex;
        align-items:  center;
    `,
    containerNavTopLogoSvg: css`
        width: 174px;;
        height: 50px;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: none;
        cursor: pointer;
    `,
    containerNavTopSetion: css`
        width: auto;
        height: 50px;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: none;
        margin-left: 30px;
        border-left: 3px solid ${colors.rgbAlette.rgb12Blanco(1)};
    `,
    containerNavTopSpan: css`
    ${fonts.fontAeonikLight()};
        width: auto;
        font-family: fontAeonikLight, sans-serif;
        text-align: center;
        line-height: 50px;
        font-size: ${fonts.fontSize*1.7}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        letter-spacing: 1px;
        margin-bottom: 0px;
        padding-left: 20px;
        box-sizing: border-box;
    `,
    containerNavTopMenuSvg: css`
        width: 70px;
        height: 70px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        flex: none;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    containerIconMenuSvg: css`
        width: 40px;
        height: 35px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        flex: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${colors.rgbAlette.rgb12Blanco(0)};
        border-radius: 4px;
        box-sizing: content-box;
        cursor:  pointer;
        transition: all 0.5s ease;
        &:hover{
            border: 2px solid ${colors.rgbAlette.rgb12Blanco(1)};
        }
    `,
    iconMenuSvg: css`
        width: 28px;
        height: 22px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        flex: none;
    `,
}

const NavTop = (props) => {
    const elementDOM = {};
    useEffect( () => {
        Object.assign(elementDOM, {
            contenedorNavbar: document.getElementById('contenedorNavbar'),
            contenedorLink: document.getElementById('contenedorLink'),
        }) 
    })
    
    const handleOpen = () => {
        // Aplicano clases contenedor.
        elementDOM.contenedorNavbar.classList.remove('fadeRight')
        elementDOM.contenedorNavbar.classList.add('fadeLeft')

        // Aplicano clases al hijo del contenedor.
        console.log( elementDOM.contenedorLink )
        elementDOM.contenedorLink.classList.remove('rightClone')
        elementDOM.contenedorLink.classList.add('fadeLeftClone')
    }
    return (
        <div css={styles.containerNavTop}>
            <div css={styles.containerChildNavTop}>
                <div css={styles.containerNavTopLogo}>
                    <div css={styles.containerNavTopLogoSvg} > <ReactSVG src={svg.svg$('logo_top')} /> </div>
                    <div css={styles.containerNavTopSetion}>
                        <span css={styles.containerNavTopSpan}> {props.setion} </span>
                    </div>
                </div>
                <div css={styles.containerNavTopMenuSvg}>
                    <div id='bottonOpen' css={styles.containerIconMenuSvg} onClick={handleOpen} >
                        <div css={styles.iconMenuSvg}> <ReactSVG src={svg.svg$('menu_open')} />  </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTop;