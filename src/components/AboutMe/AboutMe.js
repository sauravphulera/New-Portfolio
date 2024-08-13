import './AboutMe.css';
import { ABOUT } from '../../data';



const AboutMe = () => {
    const { links } = ABOUT;
    return (
        <div scoped>
            <section className='about p-6 m__aboutMe-text-classes'>
                <div className='flex justify-center m__about-me-container'>
                    {/* profile pic */}
                    <div className='px-4 py-2 w-40 flex flex-col justify-center align-center m__profile-container'>
                            <img className='circle-image w-100' src={ABOUT.image} alt='profile pic' />
                        <div className='flex space-around mt w-60'>
                            <div title='Linkedin Profile'>
                                <a  rel="noreferrer" target="_blank" href={links.linkedin.url}><img alt='linkedin icon' className='icons' src={ABOUT.links.linkedin.icon} /></a>
                            </div>
                            <div title='Github Profile'>
                                <a  rel="noreferrer" target="_blank" href={links.github.url}><img alt='github icon' className='icons icon-git' src={links.github.icon} /></a>
                            </div>
                            <div title='Facebook: This may not work'>
                                <a  rel="noreferrer" target="_blank" href={links.facebook.url}><img alt='facebook icon' className='icons icon-git' src={links.facebook.icon} /></a>
                            </div>
                        </div>
                    </div>

                    {/* about me */}
                    <div className='px-4 py-2 w-60 m__w-100'>
                        <h1>About Me</h1>
                        <p className='mt'>
                            {ABOUT.p1.en}
                        </p>
                        <p className='mt'>
                            {ABOUT.p2.en}
                        </p>
                    </div>
                </div>

                {/* line */}
                <div className='hr-line'>
                </div>

                <div className='flex p-2 space-around'>
                    <div className='p text-center'>
                        <h4 className='data'>{ABOUT.loc}</h4>
                        <div className='label'>lines of code</div>
                    </div>
                    <div className='p text-center'>
                        <h4 className='data'>{ABOUT.pixelsRendered}</h4>
                        <div className='label'>pixels rendered</div>
                    </div>
                    <div className='p text-center'>
                        <h4 className='data'>{ABOUT.numOfProjects}</h4>
                        <div className='label'>number of projects</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;