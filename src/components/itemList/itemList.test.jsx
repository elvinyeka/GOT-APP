import React from 'react';
import ItemList from './itemList';
import { mount } from 'enzyme';

import GotService from '../../services/gotSevice';

describe('Testing <ItemList/>', () => {
    const service = new GotService();
    const list = mount(<ItemList
        getData={service.getAllBooks}
        renderItem={({ name }) => name} />)

    it('Click on ItemList must render all list in 1 instance', () => {
        list.setState({ itemList: [{ name: 'wqw', id: 1 }, { name: 'wqs', id: 2 }] })
        list.find('.list-group-item:first-child').simulate('click');
        expect(list.find('ul')).toHaveLength(1);
    });
});
