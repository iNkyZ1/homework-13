# homework-13

# Описание

Это учебный проект, созданный для практики работы с формами, обработкой данных и разработкой собственных UI-компонентов.

В проекте реализованы две формы:

- **Signin** — форма входа
- **Signup** — форма регистрации

Обе формы используют кастомный компонент ввода **TextInput** и принимают проп `onSubmit`, в который передают собранные данные.

## Используемые технологии

- **Vite**
- **React 18**
- **JavaScript (ESM + JSX)**
- **CSS**
- **Функциональные компоненты + useState**

## Запуск проекта

```bash
npm install
npm run dev
```

## Структура проекта

```bash
src/
  App.jsx                  # Подключение форм, обработчики onSubmit
  main.jsx                 # Точка входа

  components/
    TextInput/
      TextInput.jsx        # Универсальный компонент поля ввода
      TextInput.css

    Signin/
      Signin.jsx           # Форма входа

    Signup/
      Signup.jsx           # Форма регистрации
```

## Компоненты

- TextInput

Кастомный компонент с поддержкой:

- label / description
- required
- icon (React-элемент)
- error
- disabled
- контролируемый ввод (value + onChange)

## Signin

Содержит поля:

- email
- password

Вызывает onSubmit(values) при отправке.

## Signup

Содержит поля:

- name
- nickname (с иконкой @)
- email
- gender (male / female)
- password
- passwordConfirm

Также вызывает onSubmit(values).

## Назначение проекта

Проект создан в учебных целях.
