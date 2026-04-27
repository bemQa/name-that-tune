# name-that-tune

Локальная браузерная игра с сеткой 5x5:
- `index.html` — версия «Угадай мелодию» (аудио).
- `video.html` — версия «Магия кино» (файлы + YouTube).

## Быстрый старт

1. Клонируйте репозиторий.
2. Запустите любой статический сервер из корня проекта:
   - `npx serve .`
   - или `python -m http.server 8080`
3. Откройте:
   - `http://localhost:3000/index.html` (аудио)
   - `http://localhost:3000/video.html` (видео)

## Структура

- `index.html` — аудио-игра.
- `video.html` — видео-игра.
- `js/core/game-core.js` — общие утилиты игры (sanitize, формат времени, players parse, debounce, disabled-семантика).
- `js/media/youtube-utils.js` — утилиты YouTube API (парсинг id, загрузка API с таймаутом).
- `music/` — локальные аудио-треки.
- `videos/` — локальные видео-файлы.

## Данные и сохранение

- Состояние игры хранится в `localStorage`.
- Используются отдельные ключи для аудио/видео режимов:
  - `guessTheMelodyGameState_v8`
  - `magicCinemaGameState_v2`

## Ограничения и заметки

- Для YouTube в `video.html` требуется доступ к `youtube.com` и `s.ytimg.com`.
- Рекомендуется запускать через HTTP-сервер, а не через `file://`.
- Если меняете список участников во время партии, приложение предупреждает о сбросе счета.

## Проверки качества

- Линт:
  - `npm run lint`
- Smoke-тест:
  - `npm run test:smoke`

## Пакеты для видео
Советские мультики
Бременские музыканты https://www.youtube.com/watch?v=NF1nwGEf7aY
Приключения капитана Врунгеля https://www.youtube.com/watch?v=9KxZDFIy2n4
Остров сокровищ "Песня о вреде пьянства" https://www.youtube.com/watch?v=9eDkKMXkLJw
Приключения поросёнка Фунтика https://www.youtube.com/watch?v=1cBCmfY-tTk
Трям! Здравствуйте! https://www.youtube.com/watch?v=q4cj5zssOcU
По дороге с облаками https://www.youtube.com/watch?v=IOFPlyMKtm4
Крошка Енот https://www.youtube.com/watch?v=Qtv5worqJcQ
Летучий корабль https://www.youtube.com/watch?v=60yIZWZKx0I
В синем море, в белой пене... https://www.youtube.com/watch?v=LxoQbVhXmkw
Подарок для слона https://www.youtube.com/watch?v=lHlv3yYOvA8

Мультики
Утиные истории https://www.youtube.com/watch?v=kamhYmPVdVA
Тимон и Пумба https://www.youtube.com/watch?v=6-Wfk6TKC7o
Ким пять с плюсом https://www.youtube.com/watch?v=-uTMTvrmW5M
Охотники за привидениями https://www.youtube.com/watch?v=NTrXIv6guE4
Жизнь с Луи https://www.youtube.com/watch?v=DjtCBheQ3zA
Чип и Дейл спешат на помощь https://www.youtube.com/watch?v=oMFY8gnKij0
Котопёс https://www.youtube.com/watch?v=7iINTXpxLsQ
Что с Энди? https://www.youtube.com/watch?v=zHdwLEAS0nk
Фриказоид https://www.youtube.com/watch?v=ddbaLjYq5A8
Чокнутый https://www.youtube.com/watch?v=i7hzcnisZYI
Винкс https://www.youtube.com/watch?v=fm52dfeCDrc
Чародейки https://www.youtube.com/watch?v=7SQDK9alC5o

Аниме
Шаман кинг https://www.youtube.com/watch?v=9wUCmq5v_oQ
Покемон https://www.youtube.com/watch?v=MyCnrWd7vVY
Сейлор Мун https://www.youtube.com/watch?v=vGOTm-EAoqw
Ван Пис https://www.youtube.com/watch?v=oib4RwKaYsI
Дораэмон https://www.youtube.com/watch?v=VViP5wgIBu8
Наруто https://www.youtube.com/watch?v=GBE1VkrL8b0
Тетрадь смерти https://www.youtube.com/watch?v=kqpO8g3zDQY
Токийский гуль https://www.youtube.com/watch?v=7aMOurgDB-o
Евангелион https://www.youtube.com/watch?v=nU21rCWkuJw
Эльфийская песнь https://www.youtube.com/watch?v=IPxvMjJ9ywI

Сериалы
Улицы разбитых фонарей https://www.youtube.com/watch?v=iEWvd70Ugys
Не родись красивой https://www.youtube.com/watch?v=tdkghtfRSa4
Клиника https://www.youtube.com/watch?v=k31yhdgn6RU
Остаться в живых https://www.youtube.com/watch?v=5jPPAU1svCo
Отчаянные домохозяйки https://www.youtube.com/watch?v=vcCT_4Umufc
Во все тяжкие https://www.youtube.com/watch?v=5br8v-PYWcQ
Офис https://www.youtube.com/watch?v=JGorPb_jk5E
Как я встретил вашу маму https://www.youtube.com/watch?v=QFEA-onh6aw
Бригада https://www.youtube.com/watch?v=18IcxrvRd-g
Доктор Кто https://www.youtube.com/watch?v=orVPpNv_uek

Фильмы
Большой куш https://www.youtube.com/watch?v=dv0ip7GVS_0 или https://www.youtube.com/watch?v=RrrBj0R509g
Властелин колец https://www.youtube.com/watch?v=4pc4P2RCWWQ
Люди в черном 2 https://www.youtube.com/watch?v=PL53KOrW9C4
8 миля https://www.youtube.com/watch?v=xxtmxGApOKg
Убить Билла https://www.youtube.com/watch?v=-n7Qa1eHXEQ
Евротур https://www.youtube.com/watch?v=o5afVq8hgJI
Темный рыцарь: возрождение легенды https://www.youtube.com/watch?v=nUT2uU8BAMc
Реквием по мечте https://www.youtube.com/watch?v=rgmriPFK2-I
Город грехов https://www.youtube.com/watch?v=bEypn7PzF_I
Железный человек https://www.youtube.com/watch?v=YFFu-QZNiGA
Мстители: Финал https://www.youtube.com/watch?v=rSDbxQMFmHk
