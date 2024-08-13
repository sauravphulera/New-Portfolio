import CommandPanel from '../CommandPanel/CommandPanel';
import './Landing.css';

function Landing() {
  return (
    <div className="landing flex justify-center align-center">
        <div className='container flex'>

          {/* phone container */}
            <div className='flex align-end phone-container'>
              <div className='phone'>
                  <div className='inner-screen flex align-center flex-col'>
                    <div className='speaker'></div>
                    <div className='phone-content text-center'>
                        <h1 className='title title-font'>Hello! I am a Frontend Developer</h1>
                        <div className='mt-2'>
                          <img className='programmer-icon' src='/programmer.png' alt='programmer logo' />
                        </div>
                        <h2 className='subtitle title-font mt-2'>
                          Want to build Something?
                        </h2>
                        <button className='mt-2 primary-button'>
                          Lets Connect
                        </button>
                    </div>
                  </div>
              </div>
            </div>

            {/* command side */}
            <div className='p'>
            <div className='text text-white'>Recruitment Status</div>

              <div className='flex align-center'>
                <div className='circle text-safe-glow blink mr'></div>
                <div className='text-white recruitment-notifier'>Still Looking</div>
              </div>
                <CommandPanel />
            </div>
        </div>
    </div>
  );
}

export default Landing;