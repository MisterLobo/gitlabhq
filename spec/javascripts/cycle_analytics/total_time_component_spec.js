import Vue from 'vue';
import component from '~/cycle_analytics/components/total_time_component.vue';
import mountComponent from '../helpers/vue_mount_component_helper';

describe('Total time component', () => {
  let vm;
  let Component;

  beforeEach(() => {
    Component = Vue.extend(component);
  });

  afterEach(() => {
    vm.$destroy();
  });

  describe('With data', () => {
    it('should render information for days and hours', () => {
      vm = mountComponent(Component, {
        time: {
          days: 3,
          hours: 4,
        },
      });

      expect(vm.$el.textContent.trim()).toEqual('3 days 4 hrs');
    });

    it('should render information for hours and minutes', () => {
      vm = mountComponent(Component, {
        time: {
          hours: 4,
          mins: 35,
        },
      });

      expect(vm.$el.textContent.trim()).toEqual('4 hrs 35 mins');
    });

    it('should render information for seconds', () => {
      vm = mountComponent(Component, {
        time: {
          seconds: 45,
        },
      });

      expect(vm.$el.textContent.trim()).toEqual('45 s');
    });
  });

  describe('Without data', () => {
    it('should render no information', () => {
      vm = mountComponent(Component);

      expect(vm.$el.textContent.trim()).toEqual('--');
    });
  });
});
