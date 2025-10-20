# Component Relation Diagram (CRD)

| No | Tree                                      | Code Line Count | Path                                         |
|----|-------------------------------------------|-----------------|----------------------------------------------|
| 1  | App.tsx                                   | 44              | ./src/App.tsx                                |
| 2  |    |──AuthContext                         | 120             | ./src/context/AuthContext.tsx                |
| 3  |           └── firebase                    | 34              | ./src/firebase.js                            |
| 4  |                  └── .env                 | 9               | ./.env                                       |
| 5  |    ├──Navbar                              | 92              | ./src/components/Navbar.tsx                  |
| 6  |    ├──ProtectedRoute                      | 41              | ./src/components/ProtectedRoute.tsx          |
| 7  | (Outlet → Routed)                         |                 |                                              |
| 8  | ├── Home                                  | 35              | ./src/pages/Home.tsx                         |
| 9  | │   ├── HomeContent                       | 93              | ./src/components/HomeContent.tsx             |
| 10 | │   ├── useHome                           | 51              | ./src/hooks/useHome.ts                       |
| 11 | ├── Login                                 | 64              | ./src/pages/Login.tsx                        |
| 12 | │   ├── LoginForm                         | 79              | ./src/components/LoginForm.tsx               |
| 13 | │   └── useLogin                          | 65              | ./src/hooks/useLogin.ts                      |
| 14 | ├── Register                              | 71              | ./src/pages/Register.tsx                     |
| 15 | │   ├── RegisterForm                      | 108             | ./src/components/RegisterForm.tsx            |
| 16 | │   └── useRegister                       | 66              | ./src/hooks/useRegister.ts                   |
| 17 | ├── ForgotPassword                        | 103             | ./src/pages/ForgotPassword.tsx               |
| 18 | │   ├── ForgotPassWordEmail               | 68              | ./src/components/ForgotPassWordEmail.tsx     |
| 19 | │   └── useForgotPassword                 | 55              | ./src/hooks/useForgotPassword.ts             |
| 20 | ├── Dashboard                             | 22              | ./src/pages/Dashboard.tsx                    |
| 21 | │   ├── DashBoardContent                  | 68              | ./src/components/DashBoardContent.tsx        |
| 22 | │   └── useDashBoard                      | 38              | ./src/hooks/useDashBoard.ts                  |
| 23 | ├── AddUser                               | 19              | ./src/pages/AddUser.tsx                      |
| 24 | │   ├── AddUserContent                    | 62              | ./src/components/AddUserContent.tsx          |
| 25 | │   ├── useAddUser                        | 46              | ./src/hooks/useAddUser.ts                    |
| 26 | │   └── ColumnsUserList                   | 73              | ./src/hooks/ColumnsUserList.tsx              |
| 27 | ├── UserList                              | 95              | ./src/pages/UserList.tsx                     |
| 28 | │   └── useUserList                       | 132             | ./src/hooks/useUserList.tsx                  |
| 29 | ├── EditUser                              | 23              | ./src/pages/EditUser.tsx                     |
| 30 | │   ├── EditUserContent                   | 51              | ./src/components/EditUserContent.tsx         |
| 31 | │   └── useEditUser                       | 45              | ./src/hooks/useEditUser.ts                   |
| 32 | ├── Profile                               | 43              | ./src/pages/Profile.tsx                      |
| 33 | │   ├── ProfileContent                    | 49              | ./src/components/ProfileContent.tsx          |
| 34 | │   └── useProfile                        | 67              | ./src/hooks/useProfile.ts                    |
| 35 | └── NotFoundPage                          | 22              | ./src/pages/NotFound.tsx                     |
---|---------------------------------------------|-----------------|----------------------------------------------|
| TOTAL CODE LINES                               | 2,186           |                                              |

