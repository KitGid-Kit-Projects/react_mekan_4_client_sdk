# Component Relation Diagram (CRD)

| No   | Tree                                           | Code Line Count    | Path                                       |
| ---- | ---------------------------------------------- | ------------------ | ------------------------------------------ |
| 1    | App.tsx                                        | 55                 | ./src/App.tsx                              |
| 2    | ├── Navbar                                     | 92                 | ./src/components/Navbar.tsx                |
| 3    | ├── ProtectedRoute                             | 41                 | ./src/context/ProtectedRoute.tsx           |
| 4    | └── (Outlet → Routed)                          |                    |                                            |
| 5    | ├── Home                                       | 35                 | ./src/pages/Home.tsx                       |
| 6    | │   ├── HomeContent                            | 93                 | ./src/components/HomeContent.tsx           |
| 7    | │   ├── useHome                                | 51                 | ./src/hooks/useHome.ts                     |
| 8    | │   └── useHomeContent                         | 41                 | ./src/hooks/useHomeContent.ts              |
| 9    | ├── Login                                      | 64                 | ./src/pages/Login.tsx                      |
| 10   | │   ├── LoginForm                              | 79                 | ./src/components/LoginForm.tsx             |
| 11   | │   └── useLogin                               | 65                 | ./src/hooks/useLogin.ts                    |
| 12   | ├── Register                                   | 71                 | ./src/pages/Register.tsx                   |
| 13   | │   ├── RegisterForm                           | 108                | ./src/components/RegisterForm.tsx          |
| 14   | │   └── useRegister                            | 66                 | ./src/hooks/useRegister.ts                 |
| 15   | ├── ForgotPassword                             | 103                | ./src/pages/ForgotPassword.tsx             |
| 16   | │   ├── ForgotPassWordEmail                    | 68                 | ./src/components/ForgotPassWordEmail.tsx   |
| 17   | │   └── useForgotPassword                      | 45                 | ./src/hooks/useForgotPassword.tsx          |
| 18   | ├── Dashboard                                  | 38                 | ./src/pages/Dashboard.tsx                  |
| 19   | │   ├── DashBoardContent                       | 107                | ./src/components/DashBoardContent.tsx      |
| 20   | │   └── useDashBoard                           | 55                 | ./src/hooks/useDashBoard.ts                |
| 21   | ├── AddUser                                    | 38                 | ./src/pages/AddUser.tsx                    |
| 22   | │   ├── AddUserContent                         | 105                | ./src/components/AddUserContent.tsx        |
| 23   | │   ├── useAddUser                             | 69                 | ./src/hooks/useAddUser.ts                  |
| 24   | │   └── columnsUserList                        | 114                | ./src/hooks/columnsUserList.tsx            |
| 25   | ├── UserList                                   | 110                | ./src/pages/UserList.tsx                   |
| 26   | │   └── useUserList                            | 163                | ./src/hooks/useUserList.tsx                |
| 27   | └── NotFoundPage                               | 41                 | ./src/pages/NotFound.tsx                   |
| 28   | context/                                       |                    |                                            |
| 29   | └── AuthContext                                | 173                | ./src/context/AuthContext.tsx              |
| 30   | lib/                                           |                    |                                            |
| 31   | └── utils                                      | 19                 | ./src/lib/utils.ts                         |
| 32   | firebase.ts                                    | 34                 | ./src/firebase.js                          |
| 33   | .env                                           | 9                  | ./.env                                     |
| ---- | ---------------------------------------------- | ------------------ | ------------------------------------------ |
|      | TOTAL CODE LINES                               | 2,221              |                                            |
| ---- | ---------------------------------------------- | ------------------ | ------------------------------------------ |
