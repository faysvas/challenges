import { mount, shallowMount } from '@vue/test-utils';
import Rating from '../src/components/Rating';

describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Rating);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});

test('Rating', () => {
    const wrapper = shallowMount(Rating);
    wrapper.setData({ rating: '9' });
    expect(wrapper.find('.rating-num').text()).toEqual('9');
});
