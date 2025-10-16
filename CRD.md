# Component Relation Diagram (CRD)

| No | Tree                                         | Code Line Count | Path                                    |
|----|----------------------------------------------|------------------|-----------------------------------------|
| 1  | App.tsx                                      | 48               | ./src/App.tsx                           |
| 2  | ├── Navbar                                   | 92               | ./src/components/Navbar.tsx             |
| 3  | └── (Outlet → Routed)                        |                  |                                         |
| 4  |     ├── Home                                 | 35               | ./src/pages/Home.tsx                    |
| 5  |     │   ├── HomeContent                      | 93               | ./src/components/HomeContent.tsx        |
| 6  |     │   └── useHome                          | 51               | ./src/hooks/useHome.ts                  |
| 7  |     ├── Login                                | 64               | ./src/pages/Login.tsx                   |
| 8  |     │   ├── LoginForm                        | 79               | ./src/components/LoginForm.tsx          |
| 9  |     │   └── useLogin                         | 65               | ./src/hooks/useLogin.ts                 |
| 10 |     ├── Register                             | 71               | ./src/pages/Register.tsx                |
| 11 |     │   ├── RegisterForm                     | 108              | ./src/components/RegisterForm.tsx       |
| 12 |     │   └── useRegister                      | 66               | ./src/hooks/useRegister.ts              |
| 13 |     ├── ForgotPassword                       | 103              | ./src/pages/ForgotPassword.tsx          |
| 14 |     │   └── useForgot                        | 45               | ./src/hooks/useForgot.ts                |
| 15 |     └── NotFoundPage                         | 41               | ./src/pages/NotFound.tsx                |
| 16 | firebase.js                                  | 34               | ./src/firebase.js                       |
| 17 | .env                                         | 9                | ./.env                                  |
|----|----------------------------------------------|------------------|-----------------------------------------|
|    | TOTAL CODE LINES                             | 1004             |                                         |
|----|----------------------------------------------|------------------|-----------------------------------------|
