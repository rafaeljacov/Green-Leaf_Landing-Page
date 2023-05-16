import './Hero.css';
import arrowRight from './assets/arrow-right.svg';
export default function Hero() {
    return (
            <div id="Hero">
                <div id="content">
                    <h1>
                        Welcome to <span id="green">Green Leaf,</span>
                    </h1>
                    <p>
                        <span>Inspiring, educating, and empowering</span> people
                        to make positive changes in their daily lives that will
                        benefit both the environment and themselves.
                    </p>
                </div>
                <button>
                    Volunteer <img src={arrowRight} alt="arror-right" />
                </button>
            </div>
    );
}
