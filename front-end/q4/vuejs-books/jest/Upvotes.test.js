import { mount, shallowMount } from '@vue/test-utils';
import Upvotes from '../src/components/Upvotes';

describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Upvotes);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});

test('Upvotes', () => {
    const wrapper = shallowMount(Upvotes);

    wrapper.setData({ upvotes: '100', upvoted: true });
    expect(wrapper.find('b-button').text()).toEqual('Upvoted');
    expect(wrapper.find('.upvote-num').text()).toEqual('100');

    wrapper.setData({ upvotes: '10', upvoted: false });
    expect(wrapper.find('b-button').text()).toEqual('Upvote');
    expect(wrapper.find('.upvote-num').text()).toEqual('10');
});
