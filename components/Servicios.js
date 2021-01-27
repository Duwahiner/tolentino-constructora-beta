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
import ArticleForCompany from '../components/view/Article-for-company'
import ArticleForServicesLeft from '../components/view/Article-for-services-left';
import ArticleForServicesRight from '../components/view/Article-for-services-right';
import MessageCompany from '../components/view/Message-company';

const styles = {
    containerSlider: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: auto;
        display: flex;
        justify-content: center;
    `,
    containerChildSlider: css`
        width: ${dimensions.containersChild.width}%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    containerChildSliderTitle: css`
        width: ${dimensions.containersChild.width}%;
        height: auto;
        background-color: ${colors.rgbAlette.rgb4(0)};
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    containerSliderSvg: css`
        width: 220px;
        height: auto;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
    `,
    sliderTitle: css`
    ${fonts.fontHeadingProBold()};
        width: auto;
        font-family: fontHeadingProBold, sans-serif;
        text-align: center;
        line-height: 50px;
        font-size: ${fonts.fontSize * 8}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
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
        &:active{
            background-color: ${colors.rgbAlette.rgb3(1)};
            color: ${colors.rgbAlette.rgb13Negro(1)};
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
    containerSliderGuide: css`
        width: ${dimensions.containersChild.width}%;
        height: 80px;
        background-color: ${colors.rgbAlette.rgb1(0)};
        flex: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    sliderGuide: css`
    ${fonts.fontAeonikLight()};
        width: auto;
        height: auto;
        flex: none;
        font-family: fontAeonikLight, sans-serif;
        text-align: center;
        line-height: 40px;
        font-size: ${fonts.fontSize*1.7}px;
        letter-spacing: 0px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
    `,
    sliderGuideflecha: css`
        width: 40px;
        height: 30px;
        background-color: ${colors.rgbAlette.rgb4(0)};
        flex: none;
        margin-bottom:  10px;
    `,

}

const Tolentino = (props) => {
    const data = <div css={styles.containerSlider}>
            <div css={styles.containerChildSlider}>
                <div css={styles.containerChildSliderTitle}>
                    {
                        //<div css={styles.containerSliderSvg}>
                            //<ReactSVG src={svg.svg$('isotipo')} />
                        //</div>
                    }
                    <h1 css={styles.sliderTitle} >
                        DISEÑOS DE RENDERS HERMOSOS
                    </h1>
                    <Link href='/contacto'>
                        <div css={styles.containerSliderBotton}>
                            <a>
                                <span css={styles.sliderBotton}> QUIERO CONTACTARLOS </span>
                            </a>
                        </div>
                    </Link>
                </div>
                
                <div css={styles.containerSliderGuide}>
                    <span css={styles.sliderGuide}> Mucho más sobre los servicios </span>
                <div css={styles.sliderGuideflecha} > <ReactSVG src={svg.svg$('icon-flecha')} /> </div>
                </div>
            </div>
        </div>
    return (
        <Layaut
            title='Servicios'
            activeFooter={false}
            setion='SERVICIOS'
            img={imgs.imgs$('servicios')}
            data={data}
        >
            {/* Articulo ARQUITECTURA */}
            <ArticleForCompany 
                backgroundColor={colors.rgbAlette.rgb12Blanco(1)}
                titleCompany='ARQUITECTURA'
                parrafoCompany='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del
                    texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                    distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo
                    "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer.
                    Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por
                    defecto.'
            />
            <ArticleForServicesLeft 
                arrayData={ [ 
                    'Levantamiento de planos',
                    'Elaboración de maquetas',
                    'Creación de renders'
                ] }
                backgroundImgs={imgs.imgs$('services/img-01')}
                svgIcon={svg.svg$('icon-chulo')}
                svgLogo={svg.svg$('isotipo')}
            />

            {/* Articulo INGENIERÍA CIVIL*/}
            <ArticleForCompany 
                backgroundColor={colors.rgbAlette.rgb12Blanco(1)}
                titleCompany='INGENIERÍA CIVIL'
                parrafoCompany='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del
                    texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                    distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo
                    "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer.
                    Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por
                    defecto.'
            />
            <ArticleForServicesRight 
                arrayData={ [ 
                    'Planificación de obra',
                    'Cálculo de costos',
                    'Gestión de licencias de construcción'
                ] }
                backgroundImgs={imgs.imgs$('services/img-02')}
                svgIcon={svg.svg$('icon-chulo')}
                svgLogo={svg.svg$('isotipo')}
            />

            <MessageCompany 
                backgroundColor={colors.rgbAlette.rgb12Blanco(1)}
                titleCompany='EL DESAFIO TE ESPERA'
                parrafoCompany='PARA ALCANZAR TUS SUEÑOS'
            />

            {/* Articulo CONSTRUCCIÓN DE ESPACIOS HABITABLES */}
            <ArticleForCompany 
                backgroundColor={colors.rgbAlette.rgb12Blanco(1)}
                titleCompany='CONSTRUCCIÓN DE ESPACIOS HABITABLES'
                parrafoCompany='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del
                    texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                    distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo
                    "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer.
                    Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por
                    defecto.'
            />
            <ArticleForServicesLeft 
                arrayData={ [ 
                    'Mampostería',
                    'Revoque',
                    'Enchapado',
                    'Promería',
                    'Drywall y pvc',
                    'Estuco y pintura',
                    'Electricidad',
                    'Electricidad e iluminación'
                ] }
                backgroundImgs={imgs.imgs$('services/img-03')}
                svgIcon={svg.svg$('icon-chulo')}
                svgLogo={svg.svg$('isotipo')}
            />
            
            {/* Articulo MOBILIARIO Y ADECUACIÓN */}
            <ArticleForCompany 
                backgroundColor={colors.rgbAlette.rgb12Blanco(1)}
                titleCompany='MOBILIARIO Y ADECUACIÓN'
                parrafoCompany='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del
                    texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                    distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo
                    "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer.
                    Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por
                    defecto.'
            />
            <ArticleForServicesRight 
                arrayData={ [ 
                    'Cocinas integrales',
                    'Closets',
                    'Repisas',
                    'Armarios',
                ] }
                backgroundImgs={imgs.imgs$('services/img-04')}
                svgIcon={svg.svg$('icon-chulo')}
                svgLogo={svg.svg$('isotipo')}
            />

            <MessageCompany 
                backgroundColor={colors.rgbAlette.rgb12Blanco(1)}
                titleCompany='EL DESAFIO TE ESPERA'
                parrafoCompany='PARA ALCANZAR TUS SUEÑOS'
            />

        </Layaut>
    )
}
export default Tolentino;