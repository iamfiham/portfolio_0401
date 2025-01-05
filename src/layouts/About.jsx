import AboutContent from '../components/AboutContent';

function About() {
    return (
        <div>
            <div className='grid grid-cols-[3fr_4fr] gap-12 items-start'>
                <div></div>
                <AboutContent />
            </div>
        </div>
    );
}

export default About;
