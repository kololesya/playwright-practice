# Playwright in Node.js Fundamentals — practice

Личный репозиторий для практики по базовому курсу Playwright с Node.js. В нём собраны учебные примеры и тесты для локального демо-приложения Credit Association.

## Что здесь изучается

- основы Playwright Test: тесты, фикстуры, assertions и async/await;
- локаторы и фильтрация элементов;
- навигация, заполнение форм, клики, чекбоксы, select и другие действия;
- диалоги, события, cookies, browser storage, JavaScript в странице, загрузка файлов и скриншоты;
- возможности test runner: группировка, хуки, параметры, параллельный запуск и аннотации;
- конфигурация на уровне теста и группы;
- HTTP-запросы, перехват и проверка сетевого трафика, совместное применение API и UI тестов.

Примеры сгруппированы по модулям в `tests/m3-core-concepts` — `tests/m9-networking`. Приложение находится в `src`, а `playwright.config.ts` задаёт адрес `http://localhost:3000`, браузерные проекты Chromium и Firefox и запуск локального сервера.

## Запуск

Нужны Node.js и npm.

```bash
npm ci
npx playwright install
npx playwright test
```

Playwright поднимет приложение командой `npm start` перед запуском тестов и остановит его после завершения. Чтобы посмотреть приложение отдельно, запусти `npm start` и открой [http://localhost:3000](http://localhost:3000).

Полезные команды:

```bash
npx playwright test --project=chromium
npx playwright test tests/m5-basic-actions
npx playwright show-report
```

## Набор тестов

Сейчас в репозитории **55 объявлений тестов**: **53 запускаются**, ещё **2 помечены как пропускаемые** в учебных примерах по аннотациям. В конфигурации включены Chromium и Firefox; setup-проект отдельно проверяет доступность локального приложения.

GitHub Actions запускает установку зависимостей, браузеров и полный набор тестов при push и pull request в `main`.
