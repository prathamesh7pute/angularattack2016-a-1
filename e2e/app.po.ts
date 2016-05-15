export class ExpenseBreakPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('expense-break-app h1')).getText();
  }
}
