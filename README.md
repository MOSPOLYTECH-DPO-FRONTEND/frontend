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
    - **`page.js`**: Страница формы.

- **`(studying)`**:
  - **`components`**: Компоненты, списка карточек.
    - **`sections`**: секции.
      - `HeaderSection.js`
      - `SearchSection.js`
      - `CardComponent.js`
    - **`studying`**:
      - **`page.js`**: Страницас карточками курсов.

  - **`layout`**:
    - **`components`**: Компоненты, связанные с основным лейаутом.
      - `AsideComponent.js`
      - `FooterComponent.js`
    - **`sections`**: секции макета.
      - `ButtonsSection.js`
      - `HeaderButtons.js`
      - `HeaderSection.js`
      - `QuizSection.js`
      - `TextSection.js`
    - **`layout.js`**: Основной файл лейаута.
    - **`page.js`**: главная страница.

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
