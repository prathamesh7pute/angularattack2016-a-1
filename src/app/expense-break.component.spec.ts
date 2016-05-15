import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ExpenseBreakAppComponent } from '../app/expense-break.component';

beforeEachProviders(() => [ExpenseBreakAppComponent]);

describe('App: ExpenseBreak', () => {
  it('should create the app',
    inject([ExpenseBreakAppComponent], (app: ExpenseBreakAppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'expense-break works!\'',
    inject([ExpenseBreakAppComponent], (app: ExpenseBreakAppComponent) => {
      expect(app.title).toEqual('expense-break works!');
    }));
});
