import { animals } from './animals';
import ocean from './images/ocean.jpg';

const title = '';
const background = <img src={ocean} className='background' alt='ocean' />

const displayFacts = e => {
    const targetAnimal = animals[e.target.alt];
    const rng = Math.floor(Math.random() * targetAnimal['facts'].length);
    const fact = targetAnimal['facts'][rng];
    document.getElementById('fact').innerHTML = fact;
};

const images = [];
for (let animal in animals) {
    images.push(<img src={animals[animal].image} key={animal} className='animal' alt={animal} aria-label='animal' role='button' onClick={displayFacts} />)
};


const animalFacts = (
    <div>
        {background}
        <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
        <p id='fact'></p>
        <div className='animals'>
            {images}
        </div>
    </div>
);

const App = () => {
    return (
        animalFacts
    )
};

export default App;