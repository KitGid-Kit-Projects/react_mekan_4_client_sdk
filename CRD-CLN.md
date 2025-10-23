| No   | Tree                                            | Code Lines STEP 1 | Code Lines STEP 2 | Path                                     |
| ---- | ----------------------------------------------- | ----------------- | ----------------- | ---------------------------------------- |
| 01   | App.tsx                                         | 17                | 29                | ./src/App.tsx                            |
| 02   | ├── firebase                                    | 25                | 34                | ./src/firebase.js                        |
| 03   | │   └── .env                                    | 9                 | 9                 | ./.env                                   |
| 04   | ├── Navbar                                      | 63                | 92                | ./src/components/Navbar.tsx              |
| 05   | ├── ProtectedRoute                              |                   | 41                | ./src/components/ProtectedRoute.tsx      |
| 06   | ├── AuthContext                                 |                   | 120               | ./src/context/AuthContext.tsx            |
| 07   | └── (Outlet → Routed)                           |                   |                   |                                          |
| 08   |     ├── Home                                    | 17                | 35                | ./src/pages/Home.tsx                     |
| 09   |     │   ├── HomeContent                         | 53                | 53                | ./src/components/HomeContent.tsx         |
| 10   |     │   └── useHome                             | 28                | 28                | ./src/hooks/useHome.ts                   |
| 11   |     ├── Login                                   |                   | 64                | ./src/pages/Login.tsx                    |
| 12   |     │   └── useLogin                            |                   | 45                | ./src/hooks/useLogin.ts                  |
| 13   |     ├── Register                                |                   | 46                | ./src/pages/Register.tsx                 |
| 14   |     │   ├── RegisterForm                        |                   | 52                | ./src/components/RegisterForm.tsx        |
| 15   |     │   └── useRegister                         |                   | 43                | ./src/hooks/useRegister.ts               |
| 16   |     └── ForgotPassword                          |                   | 44                | ./src/pages/ForgotPassword.tsx           |
| 17   |         ├── ForgotPasswordEmail                 |                   | 49                | ./src/components/ForgotPasswordEmail.tsx |
| 18   |         └── useForgotPassword                   |                   | 25                | ./src/hooks/useForgotPassword.ts         |
|------|-------------------------------------------------|-------------------|-------------------|------------------------------------------|
|      |                            TOTAL CODE LINES     | 212               | 817               |                                          |
|------|-------------------------------------------------|-------------------|-------------------|------------------------------------------|