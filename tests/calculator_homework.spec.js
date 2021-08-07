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
        //await calculatorPage.chooseBuild('0');
        //await calculatorPage.addNumbers('2', '2')
        //await calculatorPage.chooseOperation('0');
        //await calculatorPage.pressCalculateButton();
        //await calculatorPage.getAnswer().isVisible();
        //expect('4').toBe(true);   
    });

    test('2', async () => {

    });
    test('3', async () => {

    });
});
