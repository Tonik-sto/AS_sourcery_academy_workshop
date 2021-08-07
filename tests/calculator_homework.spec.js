const { test, expect } = require('@playwright/test');
const {BasicCalculatorPage} = require('../pages/basicCalculatorPage');

test.describe('', () => {
    let page;
  
    test.beforeAll(async ({ browser }) => {
      page = await browser.newPage();
      calculatorPage = new BasicCalculatorPage(page);
    });
  
    test.beforeEach(async () => {
      await calculatorPage.goto();
    });
  

    test.only('Test that both numbers fields are visible', async () => {
        await calculatorPage.chooseBuild('0');
        const firstNumberField = await page.isVisible('#number1Field');
        expect(firstNumberField).toBe(true);
        const secondNumberField = await page.isVisible('#number2Field');
        expect(secondNumberField).toBe(true);
    });


    test.only('Test that "Integers only" is not displayed then Operation-Concatenate is chosen ', async () => {
        await calculatorPage.chooseBuild('0');
        await calculatorPage.chooseOperation('4');
        const integerLineIsHidden = await page.isHidden('id=integerSelect');
        expect(integerLineIsHidden).toBe(true);
    });

    test.only('Test Add operation is correct', async () => {
        await calculatorPage.chooseBuild('0');
        await calculatorPage.addNumbers('2', '2')
        await calculatorPage.chooseOperation('0');
        await calculatorPage.pressCalculateButton();
        const answer = await calculatorPage.getAnswer();
        expect(answer).toBe('4');
    });

    test.only('Test Clear button to clear Answer field', async () => {
        await calculatorPage.chooseBuild('0');
        await calculatorPage.addNumbers('2', '3')
        await calculatorPage.chooseOperation('0');
        await calculatorPage.pressCalculateButton();
        await calculatorPage.getAnswer();
        await calculatorPage.clearAnswerField();
        expect(calculatorPage.getAnswer()).toBeNaN;
    });
    
    test.only('Test error message is displayed if letter is typed in 1st number field', async () => {
      await calculatorPage.chooseBuild('0');
      await calculatorPage.addNumbers('a', '3')
      await calculatorPage.chooseOperation('0');
      await calculatorPage.pressCalculateButton();
      const errorMessage = await calculatorPage.errorMessage();
      expect(errorMessage).toContain('Number 1 is not a number');
    });
});
