/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, colors, fonts, svg } from '../../public/global.config';
import { ReactSVG } from 'react-svg';

const styles = {
    containerFooter: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb13Negro(1)};
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    containerFooterLogoDataContacto: css`
        width: ${dimensions.containersChild.width}%;
        height:auto;
        background-color: ${'colors.rgbAlette.rgb3(1)'};
        display: flex;
        padding-top: 40px;
        padding-bottom: 40px;
        box-sizing: border-box;
    `,
    containerFooterLogo: css`
        width: ${dimensions.containers.width}%;
        height:auto;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    footerLogoSpan: css`
        width: 170px;
        height: 138px;
        display: block;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        line-height: 30px;
    `,


    containerFooterEmpresa: css`
        width: ${dimensions.containers.width}%;
        height:auto;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: auto;
    `,
    containerFooterEmpresaSpan: css`
        width: ${dimensions.containers.width}%;
        height:50px;
        background-color: ${'colors.rgbAlette.rgb3(1)'};
        flex auto;
    `,
    footerEmpresaSpan: css`
        ${fonts.fontAeonikRegular()};
        width: auto;
        height: 50px;
        display: block;
        font-family: fontAeonikRegular, serif, sans-serif;
        text-align: left;
        font-size: ${fonts.fontSize*2.3}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        line-height: 50px;
    `,
    containerFooterEmpresaContacto: css`
        width: ${dimensions.containers.width}%;
        height:auto;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: auto;
        border-left: solid 2px ${colors.rgbAlette.rgb12Blanco(1)};
        box-sizing: content-box;
        padding-left: 20px;
        box-sizing: border-box;
    `,
    footerEmpresaContactoSpan: css`
        ${fonts.fontAeonikLight()};
        width: auto;
        height: 30px;
        display: block;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: left;
        font-size: ${fonts.fontSize*1.5}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        line-height: 30px;
    `,
    containerFooterEmpresaContactoRedesSpan: css`
        width: ${dimensions.containers.width}%;
        height: 60px;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: auto;
        box-sizing: border-box;
    `,
    footerEmpresaContactoRedesSpan: css`
        ${fonts.fontAeonikRegular()};
        width: auto;
        height: auto;
        display: inline-block;
        font-family: fontAeonikRegular, serif, sans-serif;
        text-align: left;
        font-size: ${fonts.fontSize*1.2}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        background-color: ${colors.rgbAlette.rgb24(1)};
        line-height: 0px;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 2px;
        cursor: pointer;
        transition: all 0.3s linear;
        &:hover{
            background-color: ${colors.rgbAlette.rgb20(1)};
        }
    `,
    spacySpan: css`
        width: 20px;
        height: 30px;
        display: inline-block;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: auto;
        box-sizing: border-box;
    `,
    
    containerFooterServicios: css`
        width: ${dimensions.containers.width}%;
        height:auto;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: auto;
    `,
    containerFooterServiciosSpanTitle: css`
        width: ${dimensions.containers.width}%;
        height:50px;
        background-color: ${'colors.rgbAlette.rgb3(1)'};
        flex: auto;
    `,
    footerServiciosSpanTitle: css`
        ${fonts.fontAeonikRegular()};
        width: auto;
        height: 50px;
        display: block;
        font-family: fontAeonikRegular, serif, sans-serif;
        text-align: left;
        font-size: ${fonts.fontSize*2.3}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        line-height: 50px;
    `,
    containerFooterServiciosSpan: css`
        width: ${dimensions.containers.width}%;
        height:auto;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: auto;
        border-left: solid 2px ${colors.rgbAlette.rgb12Blanco(1)};
        box-sizing: content-box;
        padding-left: 20px;
        padding-bottom: 20px;
        box-sizing: border-box;
    `,
    footerServiciosSpan: css`
        ${fonts.fontAeonikLight()};
        width: auto;
        height: 30px;
        display: block;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: left;
        font-size: ${fonts.fontSize*1.5}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        line-height: 30px;
    `,


    
    containerfooterCorpringSpan: css`
        width: ${dimensions.containers.width}%;
        height: 50px;
        background-color: ${colors.rgbAlette.rgb24(1)};
        flex: none;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    corpringSpan: css`
        ${fonts.fontAeonikRegular()};
        width: auto;
        height: 50px;
        display: block;
        font-family: fontAeonikRegular, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*1.6}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        line-height: 50px;
    `,

}


const Footer = (props) => {
    return (
        <div css={styles.containerFooter}>
            <div css={styles.containerFooterLogoDataContacto} > 
                <div css={styles.containerFooterLogo} >
                    <span css={styles.footerLogoSpan} >
                        <ReactSVG src={svg.svg$('isotipo')} />
                    </span>
                </div>
                <div css={styles.containerFooterEmpresa} >
                    <div css={styles.containerFooterEmpresaSpan}>
                        <span css={styles.footerEmpresaSpan}> Tolentino Constructora </span>
                    </div>
                    <div css={styles.containerFooterEmpresaContacto} >
                        <span css={styles.footerEmpresaContactoSpan}> Tolentino Const. una empresa de Toribar </span>
                        <span css={styles.footerEmpresaContactoSpan}> Correo electronico: info@tolentinoconstrutora.com </span>
                        <span css={styles.footerEmpresaContactoSpan}> Teléfono: +57 311 300 5678 </span>
                        <span css={styles.footerEmpresaContactoSpan}> Dirección: Cra. 56 # 56 - 78 </span>
                        <span css={styles.footerEmpresaContactoSpan}> Siguenos: Tolentino Constructora </span>
                        <div css={styles.containerFooterEmpresaContactoRedesSpan}>
                            <span css={styles.footerEmpresaContactoRedesSpan}> FACEBOOK </span>
                            <span css={styles.spacySpan} > </span>
                            <span css={styles.footerEmpresaContactoRedesSpan}> TWITTER </span>
                        </div>
                    </div>
                </div>
                <div css={styles.containerFooterServicios} >
                    <div css={styles.containerFooterServiciosSpanTitle}>
                        <span css={styles.footerServiciosSpanTitle}> Servicios Tolentino Constructora </span>
                    </div>
                    <div css={styles.containerFooterServiciosSpan} >
                        <span css={styles.footerServiciosSpan}> Arquitectura </span>
                        <span css={styles.footerServiciosSpan}> Ingeniería civil </span>
                        <span css={styles.footerServiciosSpan}> Construcción de espacios habitables </span>
                        <span css={styles.footerServiciosSpan}> Mobiliario y adecuación </span>
                        <span css={styles.footerServiciosSpan}> Etre otros... </span>
                    </div>
                </div>
            </div>
            <div css={styles.containerfooterCorpringSpan} >
                <span css={styles.corpringSpan}> Copyright © 2019 - Tolentino Constructora | Diseñado y desarrollado por Ghobbit. </span>
            </div>
        </div>
    )
}

export default Footer;