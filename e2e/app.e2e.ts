import { ExpenseBreakPage } from './app.po';

describe('expense-break App', function() {
  let page: ExpenseBreakPage;

  beforeEach(() => {
    page = new ExpenseBreakPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('expense-break works!');
  });
});
