import {
  it,
  describe,
  injectAsync,
  TestComponentBuilder,
  expect
} from 'angular2/testing';

import {CmpWithClassDep} from './cmp_with_class_dep.js';

describe('cmp_with_class_dep', () => {
  it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithClassDep).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled).toBeDefined();
    });
  }));

  it('should have the right value for the prop', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithClassDep).then((fixture) => {
      fixture.detectChanges();

      let instance = fixture.debugElement.componentInstance;

      expect(instance.someDep.info).toEqual('some-info');
    });
  }));
});
