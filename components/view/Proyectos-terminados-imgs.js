/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import { jsx, css } from '@emotion/core';
import { ReactSVG } from 'react-svg';
import { dimensions, colors, fonts, imgs } from '../../public/global.config';

const styles = {
    containerPortafolio: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        flex: none;
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        margin-bottom: 0px;
    `,
    containerPortafolioData: css`
        width: 50%;
        height: 600px;
        position: relative;
        flex: none;
        cursor: pointer;
        overFlow: hidden;
        &:hover > div {
            opacity: 0;
            left: -100%;
        }
    `,
    containerPortafolioDataSvg: css`
        width: 100%;
        height: 600px;
        position: absolute;
        top: 0px;
        left: 0px;
        flex: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.rgbAlette.rgb24(0.8)};
        cursor: pointer;
        opacity: 1;
        transition: all 0.5s ease;
    `,
    portafolioLeftDataSvg: css`
        width: 200px;
        height: auto;
        background-color: ${colors.rgbAlette.rgb3(0)};
        flex: none;
    `,
}

const ArticleForCompany = (props) => {
    //const data = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
    const elementDiv = props.arrayData.map( (images, index ) => {
        return (
            <div key={index}
                css={
                    css`
                        ${styles.containerPortafolioData}
                        background: ${colors.rgbAlette.rgb13Negro(1)} url(${imgs.imgs$(images)}) center center no-repeat;
                        background-size: cover;
                    `
                }>
                <div css={styles.containerPortafolioDataSvg}>
                    <div css={styles.portafolioLeftDataSvg} >
                        <ReactSVG src={props.svgLogo} />
                    </div>
                    
                </div>
            </div>
        )
    })
    return (
        <div css={ styles.containerPortafolio} >
            { elementDiv }
        </div>
    )
}

export default ArticleForCompany;