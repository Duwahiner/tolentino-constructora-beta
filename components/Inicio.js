/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import Layaut from './Layaut';
import { dimensions, colors, imgs, svg, fonts } from '../public/global.config';

const styles = {
    containerSlider: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    containerChildSlider: css`
        width: ${dimensions.containersChild.width}%;
        height: 66px;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    containerSliderSvg: css`
        width: 150px;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
    `,
    sliderTitle: css`
    ${fonts.fontHeadingProBold()};
        width: auto;
        height: 100px;
        font-family: fontHeadingProBold, sans-serif;
        text-align: center;
        display: inline-block;
        line-height: 100px;
        font-size: ${fonts.fontSize * 10}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        background-color: ${colors.rgbAlette.rgb1(0)};
        letter-spacing: 0px;
        margin-bottom: 0px;
        margin-top: 30px;
        box-sizing: border-box;
    `,
    containerSliderBotton: css`
        width: 350px;
        height: 60px;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        border: 2px solid ${colors.rgbAlette.rgb12Blanco(1)};
        border-radius: 8px;
        margin-top: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        transition: all 0.5s ease;
        &:hover{
            background-color: ${colors.rgbAlette.rgb1(1)};
            color: ${colors.rgbAlette.rgb12Blanco(1)};
            border-radius: 5px; border-radius: 30px;
            border: 2px solid ${colors.rgbAlette.rgb1(1)};
        }
    `,
    sliderBotton: css`
    ${fonts.fontAeonikMedium()};
        width: auto;
        font-family: fontAeonikMedium, sans-serif;
        text-align: center;
        line-height: 60px;
        font-size: ${fonts.fontSize*2}px;
        letter-spacing: 0px;
    `,

}

const Inicio = (props) => {
    const data = <div css={styles.containerSlider}>
            <div css={styles.containerChildSlider}>
                <div css={styles.containerSliderSvg}>
                    <ReactSVG src={svg.svg$('isotipo')} />
                </div>
                <h1 css={styles.sliderTitle} >
                    CONSTRUIMOS TUS SUEÑOS
                </h1>
                <Link href='/contacto'>
                    <div css={styles.containerSliderBotton}>
                        <a>
                            <span css={styles.sliderBotton}> QUIERO CONTACTARLOS </span>
                        </a>
                    </div>
                </Link>
            </div>
        </div>
    return (
        <Layaut
            title='Inicio'
            activeFooter={true}
            setion='INICIO'
            img={imgs.imgs$('inicio-2')}
            data={data}
        >
        </Layaut>
    )
}
export default Inicio;