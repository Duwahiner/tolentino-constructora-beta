/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import { jsx, css } from '@emotion/core';
import { ReactSVG } from 'react-svg';
import { dimensions, colors, fonts, svg, } from '../../public/global.config';

const styles = {
    containerArticleForServicesRight: css`
        width: ${dimensions.containers.width}%;
        height: 600px;
        flex: none;
        display: flex;
        margin-top: 40px;
        margin-bottom: 40px;
    `,
    containerArticleForServicesRightData: css`
        width: 50%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(1)};
        flex: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    containerArticleForServicesRightDataSvg: css`
        width: 200px;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
    `,


    containerArticleForServicesRightDataCopy: css`
        width: 50%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb2(0)};
        flex: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    `,
    containerArticleForServicesRightSpan: css`
        width: 80%;
        height: 40px;
        background-color: ${colors.rgbAlette.rgb2(0)};
        flex: none;
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 40px;
    `,
    containerArticleForServicesRightIcon: css`
    width: 40px;
    height: 40px;
    background-color: ${colors.rgbAlette.rgb2(0)};
    flex: none;
    border: solid 3px ${colors.rgbAlette.rgb13Negro(1)};
    border-radius: 10px;
    box-sizing: border-box;
`,

    
    articleForServicesRightSpan: css`
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
            <div key={index} css={styles.containerArticleForServicesRightSpan}>
                <div css={styles.containerArticleForServicesRightIcon}>
                    < ReactSVG src={props.svgIcon} />
                </div>
                <span css={styles.articleForServicesRightSpan} > {value} </span>
            </div>
        )
    })
    return (
        <div css={ styles.containerArticleForServicesRight} >
            <div css={styles.containerArticleForServicesRightDataCopy} >
                { elementDiv }
            </div>
            <div css={styles.containerArticleForServicesRightData}
                css={
                    css`
                        ${styles.containerArticleForServicesRightData}
                        background: ${colors.rgbAlette.rgb13Negro(1)} url(${props.backgroundImgs}) center center no-repeat;
                        background-size: cover;
                    `
                }
            >
                <div css={styles.containerArticleForServicesRightDataSvg}>
                    <ReactSVG src={props.svgLogo} />
                </div>
            </div>
        </div>
    )
}

export default ArticleForCompany;