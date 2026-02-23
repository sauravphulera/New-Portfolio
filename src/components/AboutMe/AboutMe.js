import './AboutMe.css';
import { ABOUT } from '../../data';



const AboutMe = () => {
    const { links } = ABOUT;
    return (
        <div id="about" scoped>
            <section className='about'>
                <div className='about-inner'>
                    <div className='about-profile'>
                        <div className='profile-image-wrap'>
                            <img className='circle-image' src={ABOUT.image} alt='Saurav' />
                        </div>
                        <div className='social-links'>
                            <a rel="noreferrer" target="_blank" href={links.linkedin.url} title='LinkedIn' aria-label='LinkedIn'>
                                <img alt='' className='icon' src={links.linkedin.icon} />
                            </a>
                            <a rel="noreferrer" target="_blank" href={links.github.url} title='GitHub' aria-label='GitHub'>
                                <img alt='' className='icon' src={links.github.icon} />
                            </a>
                            <a rel="noreferrer" target="_blank" href={links.facebook.url} title='Facebook' aria-label='Facebook'>
                                <img alt='' className='icon' src={links.facebook.icon} />
                            </a>
                            <a href={`mailto:${links.gmail}`} title='Email' aria-label='Email'>
                                <span className='icon-email'>✉</span>
                            </a>
                        </div>
                    </div>

                    <div className='about-text'>
                        <h1>About Me</h1>
                        <p>{ABOUT.p1.en}</p>
                        {ABOUT.p2.en && <p>{ABOUT.p2.en}</p>}
                    </div>
                </div>

                <div className='about-stats'>
                    <div className='stat'>
                        <span className='stat-value'>{ABOUT.loc}</span>
                        <span className='stat-label'>lines of code</span>
                    </div>
                    <div className='stat'>
                        <span className='stat-value'>{ABOUT.pixelsRendered}</span>
                        <span className='stat-label'>pixels rendered</span>
                    </div>
                    <div className='stat'>
                        <span className='stat-value'>{ABOUT.numOfProjects}</span>
                        <span className='stat-label'>projects</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;