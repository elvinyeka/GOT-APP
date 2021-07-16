import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest-extended');

configure({ adapter: new Adapter });

const config = {
    "jest": {
        "setupFilesAfterEnv": ["jest-extended"]
    }
}

export default config;