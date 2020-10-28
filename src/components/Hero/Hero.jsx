import React from 'react';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import * as ScrollMagic from "scrollmagic";
import styles from './styles/hero.module.scss';
import Content from '../Content/content.jsx';
import { TweenMax, TimelineMax } from "gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const Hero = props => {

    const { banner, title, content } = props;

    return (
        <header>
            <div className={styles.container}>
                {banner}
                <Content title={title} content={content}/>
            </div>
        </header>
    );

}

export default Hero;