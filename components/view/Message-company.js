/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { dimensions, colors, fonts } from '../../public/global.config';

const styles = {
    containerArticleForCompany: css`
        width: ${dimensions.containers.width}%;
        height: 500px;
        flex: none;
        display: flex;
        justify-content: center;
        aling-items: center;
    `,
    containerArticleForCompanyData: css`
        width: 70%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    containerArticleForCompanyTitle: css`
        width: 100%;
        height: 60px;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        display: flex;
        justify-content: center;
        border-bottom: solid 3px ${colors.rgbAlette.rgb13Negro(0)};
        margin-bottom: 20px;
    `,
    articleForCompanyTitle: css`
    ${fonts.fontHeadingProBold()};
        width: auto;
        height: auto;
        font-family: fontHeadingProBold, sans-serif;
        text-align: center;
        line-height: 60px;
        font-size: ${fonts.fontSize * 8}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 0px;
        margin-bottom: 0px;
        margin-top: 0px;
        box-sizing: border-box;
    `,
    containerArticleForCompanyParrafo: css`
        width: 85%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        display: flex;
        justify-content: center;
    `,
    articleForCompanyParrafo: css`
    ${fonts.fontAeonikLight()};
        width: auto;
        height: auto;
        font-family: fontAeonikLight, sans-serif;
        text-align: justify;
        line-height: auto;
        font-size: ${fonts.fontSize * 2.3}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 0px;
        margin-bottom: 0px;
        margin-top: 0px;
        box-sizing: border-box;
    `,

    containerSliderBotton: css`
        width: 350px;
        height: 60px;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        border: 2px solid ${colors.rgbAlette.rgb1(1)};
        border-radius: 8px;
        margin-top: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        color: ${colors.rgbAlette.rgb1(1)};
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

const MessageCompany = (props) => {
    return (
        <div
            css={
                css`
                    ${styles.containerArticleForCompany};
                    background-color: ${props.backgroundColor};
                `
            }
        >
            <div css={styles.containerArticleForCompanyData} >
                <div css={styles.containerArticleForCompanyTitle} >
                    <h2 css={styles.articleForCompanyTitle} > {props.titleCompany} </h2>
                </div>
                <div css={styles.containerArticleForCompanyParrafo} >
                    <p css={styles.articleForCompanyParrafo}> {props.parrafoCompany} </p>
                </div>
                <Link href='/contacto'>
                    <div css={styles.containerSliderBotton}>
                        <a>
                            <span css={styles.sliderBotton}> QUIERO CONTACTARLOS </span>
                        </a>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default MessageCompany;