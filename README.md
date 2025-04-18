## Getting Started

Для запуска дев-сервера:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) с помощью браузера.

Структура проекта, представленная на изображении, выглядит как типичный проект на **React** (или похожей библиотеке/фреймворке) с разделением на компоненты, страницы, стили и другие ресурсы. Вот подробное описание:

---

### 1. **Папка `public`**
Содержит статические файлы, которые используются в проекте:
- **`fonts`**: Шрифты.
- **`icons`**: Иконки.
- **`imgs`**: Изображения.
- **`favicon.ico`**: Фавикон проекта.

---

### 2. **Папка `src`**
Основная папка с исходным кодом проекта. Внутри неё:

#### 2.1. **Папка `app`**
Содержит основные модули приложения, разделённые по функциональности:

- **`(no-layout)`**:
  - **`form`**:
    - **`components`**: Компоненты, связанные с формами.
      - `FormCardComponent.js`
      - `FormComponent.js`
    - **`page.js`**: Страница, связанная с формой.

- **`(studying)`**:
  - **`components`**: Компоненты, связанные с разделом "изучение".
    - **`sections`**: Подразделы компонентов.
      - `HeaderSection.js`
      - `SearchSection.js`
      - `CardComponent.js`
    - **`studying`**:
      - **`page.js`**: Страница, связанная с изучением.

  - **`layout`**:
    - **`components`**: Компоненты, связанные с макетом.
      - `AsideComponent.js`
      - `FooterComponent.js`
    - **`sections`**: Подразделы макета.
      - `ButtonsSection.js`
      - `HeaderButtons.js`
      - `HeaderSection.js`
      - `QuizSection.js`
      - `TextSection.js`
    - **`layout.js`**: Основной файл макета.
    - **`page.js`**: Страница, связанная с макетом.

  - **`ui`**:
    - **`components`**: UI-компоненты.
      - `ButtonComponent.js`
      - `CheckboxComponent.js`
      - `DropdownButton.js`
      - `InputComponent.js`
      - `LinkButton.js`

---

### 3. **Папка `styles`**
Содержит файлы стилей:
- **`fonts.css`**: Стили для шрифтов.
- **`globals.css`**: Глобальные стили.

---

### 4. **Файл `editorconfig`**
Конфигурационный файл для настройки редактора кода (например, форматирования).

---
