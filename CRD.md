# Component Relation Diagram (CRD)

| No | Tree                                        | Code Line Count | Path                                      |
|----|---------------------------------------------|------------------|-------------------------------------------|
| 1  | App.tsx                                     | 48               | ./src/App.tsx                             |
| 2  | └── (Outlet → Routed)                       |                  |                                           |
| 3  |     ├── Home                                | 35               | ./src/pages/Home.tsx                      |
| 4  |     ├── Login                               | 64               | ./src/pages/Login.tsx                     |
| 5  |     ├── Register                            | 71               | ./src/pages/Register.tsx                  |
| 6  |     ├── ForgotPassword                      | 103              | ./src/pages/ForgotPassword.tsx            |
| 7  |     └── NotFound                            | 41               | ./src/pages/NotFound.tsx                  |
|----|---------------------------------------------|------------------|-------------------------------------------|
| 8  | components/                                 |                  |                                           |
| 9  | ├── HomeContent                             | 93               | ./src/components/HomeContent.tsx          |
| 10 | ├── LoginForm                               | 79               | ./src/components/LoginForm.tsx            |
| 11 | ├── Navbar                                  | 92               | ./src/components/Navbar.tsx               |
| 12 | └── RegisterForm                            | 108              | ./src/components/RegisterForm.tsx         |
|----|---------------------------------------------|------------------|-------------------------------------------|
| 13 | hooks/                                      |                  |                                           |
| 14 | ├── useForgot                               | 45               | ./src/hooks/useForgot.ts                  |
| 15 | ├── useHome                                 | 51               | ./src/hooks/useHome.ts                    |
| 16 | ├── useLogin                                | 65               | ./src/hooks/useLogin.ts                   |
| 17 | └── useRegister                             | 66               | ./src/hooks/useRegister.ts                |
|----|---------------------------------------------|------------------|-------------------------------------------|
| 18 | firebase.js                                 | 34               | ./src/firebase.js                         |
| 19 | .env                                        | 9                | ./.env                                    |
|----|---------------------------------------------|------------------|-------------------------------------------|
|    | TOTAL CODE LINES                            | 1004             |                                           |
|----|---------------------------------------------|------------------|-------------------------------------------|
