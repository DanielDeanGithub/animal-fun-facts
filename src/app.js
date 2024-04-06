import { animals } from './animals';
import ocean from './images/ocean.jpg';

const background = <img src={ocean} className='background' alt='ocean' />

const title = '';
const animalFacts = (
    <div>
        {background}
        <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    </div>
);

const App = () => {
    return (
        animalFacts
    )
};

export default App;