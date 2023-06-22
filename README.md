# meSocial
Social Media Project
Project Tree

```
meSocial

├─ backend
    ├─ .sanity
    ├─ dist
    ├─ node_modules (sanity)
    ├─ schemas (sanity)
        ├─ comment.js
        ├─ index.js
        ├─ pin.js
        ├─ postedBy.js
        ├─ save.js
        ├─ user.js
    ├─ package.json (sanity)
    ├─ package.json (sanity)
    ├─ static (sanity)
    ├─ .eslintrc (sanity)
    ├─ package-lock.json (sanity)
    ├─ package.json (sanity)
    ├─ README.md
    ├─ sanity.cli.js (sanity)
    ├─ sanity.config.js (sanity)
    ├─ express
        ├─ bin
            ├─ www.js (creates http server, listens on port 3000, sanitizes port number, etc)
        ├─ config
            ├─ dbConfig.js
        ├─ controllers
            ├─authController.js
        ├─ models
            ├─ comment.js
            ├─ index.js (Sequelize instantiation and the models associations)
            ├─ like.js (formerly 'save' entity)
            ├─ pin.js
            ├─ user.js
        ├─ node_modules
        ├─ routes
            ├─ authRoutes.js
        ├─ .env (holds env vars for backend)
        ├─ app.js (set up express, use middleware, and import routes)
        ├─ package-lock.json (express)
        ├─ package.json (express)
├─ frontend
    ├─ dist
    ├─ node_modules
    ├─ public
    ├─ src
    ├─ .env
    ├─ index.html
    ├─ package-lock.json
    ├─ package.json
    ├─ postcss.config.cjs
    ├─ postcss.config.cjs
    ├─ tailwind.config.cjs
├─ .gitignore
├─ README.md

new backend:
├─ backend
    ├─ express
        ├─ bin
            ├─ www
        ├─ models
            ├─ index.js
            ├─ user.js
            ├─ post.js
            ├─ comment.js
            ├─ save.js
            └─ pin.js
        ├─ routes
            ├─ index.js
            ├─ users.js
            ├─ posts.js
            ├─ comments.js
            ├─ saves.js
            └─ pins.js
        ├─ middleware
            ├─ auth.js
        ├─ app.js
        └─ package.json