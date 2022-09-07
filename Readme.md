# Личный проект «Что посмотреть»

Развёрнутое приложение: http://wtw.kildim.space
Репозиторий с кодом приложения: https://github.com/kildim/what-to-watch

* Студент: [Дмитрий Килин](https://up.htmlacademy.ru/react/8/user/997093).
* Наставник: [Сергей Шрамко](https://htmlacademy.ru/profile/id852139).

Приложение «Что посмотреть» представляет из себя SPA, написанное на [TypeScript](https://www.typescriptlang.org). Приложение предоставляет возможности просмотра, фильтрации, комментирования, установки рейтинга кинофильму из фильмотеки.

Главный экран приложения отображает постер предлагаемого по умолчанию фильма и управляющие элементы для начала просмотра. 
Так же главный экран отображает коллекцию фильмов хранящихся на сервере, с возможностью фильтрации по жанрам. Изначально список 
фильмов отображает не более восьми фильмов, при нажатии на соответствующую кнопку интерфейса отображается следующая порция восьми 
карточек фильмов.

При выборе фильма пользователь переходит на экран, где он может прочитать обзор фильма, детальную информацию о нём, а так же
ознакомиться с отзывами других полюзователей и рейтингом фильма среди пользователей сервиса "what-to-watch".

Зарегистрированные пользователи получают возможность размещать свои отзывы о фильмах, а так же создавать собственные коллекции 
избранных фильмов для последующего просмотра.

Взаимодействие с API сервера реализовано с использованием библиотеки [Axios](https://axios-http.com/). Аутентификация проходит посредством
токена, сохраняемого в локальном хранилище браузера. Роутинг в приложении реализован на основе [ReactRouter](https://reactrouter.com/en/main).

---

<a href="https://htmlacademy.ru/intensive/react"><img align="left" width="50" height="50" title="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/react/logo-for-github.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[React. Разработка сложных клиентских приложений](https://htmlacademy.ru/intensive/react)» от [HTML Academy](https://htmlacademy.ru).
