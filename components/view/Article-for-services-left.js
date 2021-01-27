/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import { jsx, css } from '@emotion/core';
import { ReactSVG } from 'react-svg';
import { dimensions, colors, fonts, svg, imgs } from '../../public/global.config';

const styles = {
    containerArticleForServicesLeft: css`
        width: ${dimensions.containers.width}%;
        height: 600px;
        flex: none;
        display: flex;
        margin-top: 40px;
        margin-bottom: 40px;
    `,
    containerArticleForServicesLeftData: css`
        width: 50%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(1)};
        flex: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    containerArticleForServicesLeftDataSvg: css`
        width: 200px;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
    `,


    containerArticleForServicesLeftDataCopy: css`
        width: 50%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb2(0)};
        flex: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    `,
    containerArticleForServicesLeftSpan: css`
        width: 80%;
        height: 40px;
        background-color: ${colors.rgbAlette.rgb2(0)};
        flex: none;
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 40px;
    `,
    containerArticleForServicesLeftIcon: css`
    width: 40px;
    height: 40px;
    background-color: ${colors.rgbAlette.rgb2(0)};
    flex: none;
    border: solid 3px ${colors.rgbAlette.rgb13Negro(1)};
    border-radius: 10px;
    box-sizing: border-box;
`,

    
    articleForServicesLeftSpan: css`
    ${fonts.fontAeonikBold()};
        width: auto;
        height: auto;
        font-family: fontAeonikBold, sans-serif;
        text-align: justify;
        line-height: 40px;
        font-size: ${fonts.fontSize * 2}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 0px;
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 20px;
        box-sizing: border-box;
    `,

}

const ArticleForCompany = (props) => {
    //const data = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
    const elementDiv = props.arrayData.map( (value, index ) => {
        return (
            <div key={index} css={styles.containerArticleForServicesLeftSpan}>
                <div css={styles.containerArticleForServicesLeftIcon}>
                    < ReactSVG src={props.svgIcon} />
                </div>
                <span css={styles.articleForServicesLeftSpan} > {value} </span>
            </div>
        )
    })
    return (
        <div css={ styles.containerArticleForServicesLeft} >
            <div css={styles.containerArticleForServicesLeftData}
                css={
                    css`
                        ${styles.containerArticleForServicesLeftData}
                        background: ${colors.rgbAlette.rgb13Negro(1)} url(${props.backgroundImgs}) center center no-repeat;
                        background-size: cover;
                    `
                }
            >
                <div css={styles.containerArticleForServicesLeftDataSvg}>
                    <ReactSVG src={props.svgLogo} />
                </div>
            </div>
            <div css={styles.containerArticleForServicesLeftDataCopy} >
                { elementDiv }
            </div>
        </div>
    )
}

export default ArticleForCompany;