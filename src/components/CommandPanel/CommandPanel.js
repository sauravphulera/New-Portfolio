import './CommandPanel.css';

function CommandPanel() { 

    return (
        <div className='terminal-container' scoped>
            <header className='terminal-header mt'>
                <div className='flex terminal-header-buttons'>
                    <div className='terminal-button close flex align-center justify-center'></div>
                    <div className='terminal-button minimise'></div>
                    <div className='terminal-button expand'></div>
                </div>
            </header>
            <div className='terminal-body'>
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

                </div>
                <div className='terminal-control mt-2'>
                    <div className='control has-icons-left'>
                        <span className='icon is-left'>{'>'}</span>
                        <input className='input' type='text' autoComplete='off' autoFocus placeholder='Type commands' />
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