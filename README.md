# В репозитории  академии https://github.com/htmlacademy/vscode-profile-htmlacademy - установить настройки vs code

1. Скопировать ссылку на файл профиля

   ```
   https://raw.githubusercontent.com/htmlacademy/vscode-profile-htmlacademy/main/ha-vs.code-profile
   ```

2. В VS Code выбрать меню `File` → `Preferences` → `Profiles` → `Import Profile`

   !["File → Preferences → Profiles → Import Profile"](assets/install.png)

3. В выпадающее поле ввода ввести скопированную ссылку на файл профиля и нажать `Enter`

   !["Select profile"](assets/select-profile.png)

4. Создать профиль, нажав "Create profile"

   !["Создание профиля"](assets/create-profile.png)

5. Принять конфигурационный файл, нажав "Create"

   !["Принять настройки профиля"](assets/apply.png)

6. Немного, меньше минуты, подождать пока загрузятся все расширения

7. Пользуйтесь



# favicons - папка для фавиконок

favicons - здесь должны находиться все необходимые варианты фавиконок, кроме `favicon.ico`, которые должен быть в главном каталоге`.

```shell
    └── favicons/
        ├── 180.png   # для старых iPhone
        ├── 192.png
        ├── 512.png
        └── icon.svg
```

# fonts - все шрифтовые файлы лежат в папке

```shell
    └── fonts/
        ├──  open-sans.woff2
        └──  open-sans-bold.woff2

```

# icons - папка для векторных иконок (для спрайта)

```shell
    └── icons/
        ├── tg.svg
        ├── vk.svg
        └── ....svg
```
# images - папка для контентной векторной графики  (логотип, графики, иллюстрации)

```shell
└── raw/
    └── images/

```
# scripts - папка для скриптов

Простые сценарии можно написать в `index.js`, а также есть возможность создать модульную систему для несколько сценариев:

```shell
    └── scripts/
        ├── index.js
        ├── modal.js
        └── nav.js
```
