# AS_sourcery_academy_workshop

My first test, checking that everything is working

npm init --yes
npm i -d @playwright/test
npx playwright install

npm i experimental-allure-playwright
npm install -g allure-commandline
npx playwright test --reporter=line,experimental-allure-playwright
allure generate allure-results –clean
allure open allure-report