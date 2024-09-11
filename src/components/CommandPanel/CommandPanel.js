import { useState, useRef, useEffect } from 'react';
import './CommandPanel.css';

let commandResponses = {
    'hey' : 'Hi I am a command panel! nice to meet you',
    'commands': 'hey, commands, about, skills',
    'about': 'I am a front end developer with 5+ years of relevant work experience including demonstrated experience in designing data visualization and analytical interfaces or applications.I have built all aspects of the user experience and user interface for client-facing landing pages. Specializes in using html, css , javascript, React (functional and class components), Vue2 and vue3, Nextjs, Graphql, Angular (all versions from js to 17+), and some advanced javascript libraries like D3.js, highcharts to build user friendly UI for product based organizations.',
    'skills': 'My primary skills are React, next, Angular, Html, css and javascript',
    // '': ''
}

function CommandPanel() { 

    const [commandRes, setCommandRes] = useState('');
    const commandPanelRef = useRef();
    const formRef = useRef();

    useEffect(() => {
        
        commandPanelRef.current.scrollTop = commandPanelRef.current.scrollHeight;
    }, [commandRes]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let command =  e.target[0].value;

        formRef.current.reset();

        if(commandResponses[command] === undefined) {
            setCommandRes("Ooops! Invalid Command, type 'commands' for valid commands")
        } else {
            setCommandRes(commandResponses[command])
        }
    }

    return (
        <div className='terminal-container' scoped>
            <header className='terminal-header mt'>
                <div className='flex terminal-header-buttons'>
                    <div className='terminal-button close flex align-center justify-center'></div>
                    <div className='terminal-button minimise'></div>
                    <div className='terminal-button expand'></div>
                </div>
            </header>
            <div className='terminal-body scroll-y' ref={commandPanelRef}>
                <div>
                    <p className='has-text-weight-bold'>
                        Hello! I'm Saurav 
                    </p>
                    <br></br>
                    <p>Here's some facts about me:</p>
                    <ul>
                        <li className='is-rainbow-red'>✅ HTML and CSS Developer</li>
                        <li className='is-rainbow-orange'>✅ React Developer</li>
                        <li className='is-rainbow-yellow'>✅ TypeScript Expert</li>
                        <li className='is-rainbow-green'>✅ Angular Developer</li>
                        <li className='is-rainbow-blue'>✅ Vue Developer</li>
                        <li className='is-rainbow-violet'>✅ Chess Fan</li>
                    </ul>
                    <li className='is-rainbow-yellow mt-2'>{commandRes}</li>
                    

                </div>
                <div className='terminal-control mt-2'>
                    <div className='control has-icons-left flex align-center'>
                        <span className='icon is-left'>{'>'}</span>
                        <form onSubmit={handleSubmit} ref={formRef}>
                            <input className='input' type='text' autoComplete='off' autoFocus placeholder='Type commands'/>
                        </form>
                        <span className='cursor'></span>
                    </div>
                </div>
            </div>
            <nav className='terminal-tmux-bar'>
                <div className='screen'>0</div>
                <div className='bar'>zsh</div>
                <div className='battery'>98%</div>
                <div className='name'>Saurav's Laptop</div>
            </nav>
        </div>
    )
}

export default CommandPanel;