import { animals } from './animals';

const background = <img src='../images/ocean.jpg' className='background' alt='ocean' />

const title = '';
const animalFacts = <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>;

const App = () => {
    return (
        animalFacts
    )
};

export default App;