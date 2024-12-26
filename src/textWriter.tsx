import { useEffect, useState} from 'react'

const TypewriterText = () => {
    const titles = ['Software Engineer', 'AI Engineer', 'Full-stack Developer']
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (isTyping) {
            if (displayText === titles[currentIndex]) {
                setTimeout(() => {
                    setIsTyping(false);
                }, 2000);
            } else {
                setTimeout(() => {
                    setDisplayText(titles[currentIndex].slice(0, displayText.length + 1));
                }, 100);
            }
        } else {
            if (displayText === '') {
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % titles.length);
                    setIsTyping(true);
                }, 200);
            } else {
                setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50);
            }
        }
        
    }, [displayText, isTyping, currentIndex]);

    return (
        <span className='inline-block overflow-hidden whitespace-nowrap'>
        {displayText}<span className="ml-2 -translate-y-1 animate-blink">_</span>
      </span>
    );
};

export default TypewriterText;