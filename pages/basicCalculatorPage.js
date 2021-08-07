
exports.BasicCalculatorPage = class BasicCalculatorPage {
    constructor(page)
    {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }

    async chooseBuild(value) {
        const build = await this.page.$('#selectBuild');
        await build?.selectOption(value); 
    }

    async addNumbers(num1, num2) {    
        await this.page.fill('#number1Field', num1);
        await this.page.fill('#number2Field', num2);
    }
    async chooseOperation(operation) {
        const operations = await this.page.$("#selectOperationDropdown");
        await operations?.selectOption(operation);
    }

    async pressCalculateButton() {
        await this.page.click('#calculateButton');
    }
    
    async getAnswer() {
        return await this.page.textContent(answer);
    }
    async onlyIntegers() {
        await this.page.click('#integerSelect');
    }

    async clearAllFields() {
        await this.page.click('#clearButton');
    }
}