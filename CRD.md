No | Tree                                      | Code Line Count | Path                                         |
---|-------------------------------------------|-----------------|----------------------------------------------|
1  | App.tsx                                   | 29              | ./src/App.tsx                                |    
2  |    |──AuthContext                         | 120             | ./src/context/AuthContext.tsx                |
3  |           └── firebase                    | 34              | ./src/firebase.js                            |
4  |                  └── .env                 | 9               | ./.env                                       |
5  |    ├──Navbar                              | 92              | ./src/components/Navbar.tsx                  |
6  |    ├──ProtectedRoute                      | 41              | ./src/components/ProtectedRoute.tsx          |
7  | (Outlet → Routed)                         |                 |                                              |
8  | ├── Home                                  | 35              | ./src/pages/Home.tsx                         |
9  | │   ├── HomeContent                       | 53              | ./src/components/HomeContent.tsx             |
10 | │   ├── useHome                           | 28              | ./src/hooks/useHome.ts                       |
11 | │   └── useHomeContent                    | 24              | ./src/hooks/useHomeContent.ts                |
12 | ├── Login                                 | 64              | ./src/pages/Login.tsx                        |
14 | │   └── useLogin                          | 43              | ./src/hooks/useLogin.ts                      |
15 | ├── Register                              | 46              | ./src/pages/Register.tsx                     |
16 | │   ├── RegisterForm                      | 52              | ./src/components/RegisterForm.tsx            |
17 | │   └── useRegister                       | 43              | ./src/hooks/useRegister.ts                   |
18 | ├── ForgotPassword                        | 44              | ./src/pages/ForgotPassword.tsx               |
19 | │   ├── ForgotPassWordEmail               | 49              | ./src/components/ForgotPassWordEmail.tsx     |
20 | │   └── useForgotPassword                 | 25              | ./src/hooks/useForgotPassword.ts             |
---|-------------------------------------------|-----------------|-----------------------------------------------
TOTAL CODE LINES                               | 841             |
