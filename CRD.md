# Component Relation Diagram (CRD)

|----|-------------------------------------------|-----------------|----------------------------------------------|
| No | Tree                                      | Code Line Count | Path                                         |
|----|-------------------------------------------|-----------------|----------------------------------------------|
| 1  | App.tsx                                   | 39              | ./src/App.tsx                                |
| 2  |    |──AuthContext                         | 34              | ./src/context/AuthContext.tsx                |
| 3  |    |      └── firebase                    | 9               | ./src/firebase.js                            |
| 4  |    |             └── .env                 | 63              | ./.env                                       |
| 5  |    ├──Navbar                              | 41              | ./src/components/Navbar.tsx                  |
| 6  |    ├──ProtectedRoute                      | 120             | ./src/components/ProtectedRoute.tsx          |
| 7  |    └──(Outlet → Routed)                   |                 |                                              |
| 8  |          ├── Home                         | 35              | ./src/pages/Home.tsx                         |
| 9  |          │    ├── HomeContent             | 53              | ./src/components/HomeContent.tsx             |
| 10 |          │    └── useHome                 | 28              | ./src/hooks/useHome.ts                       |
| 12 |          ├── Login                        | 64              | ./src/pages/Login.tsx                        |
| 13 |          │    ├── LoginForm               | 79              | ./src/components/LoginForm.tsx               |
| 14 |          │    └── useLogin                | 45              | ./src/hooks/useLogin.ts                      |
| 15 |          ├── Register                     | 46              | ./src/pages/Register.tsx                     |
| 16 |          │    ├── RegisterForm            | 52              | ./src/components/RegisterForm.tsx            |
| 17 |          │    └── useRegister             | 43              | ./src/hooks/useRegister.ts                   |
| 18 |          ├── ForgotPassword               | 44              | ./src/pages/ForgotPassword.tsx               |
| 19 |          │    ├── ForgotPassWordEmail     | 49              | ./src/components/ForgotPassWordEmail.tsx     |
| 20 |          │    └── useForgotPassword       | 25              | ./src/hooks/useForgotPassword.tsx            |
| 21 |          ├── Dashboard                    | 22              | ./src/pages/Dashboard.tsx                    |
| 22 |          │    ├── DashBoardContent        | 68              | ./src/components/DashBoardContent.tsx        |
| 23 |          │    └── useDashBoard            | 38              | ./src/hooks/useDashBoard.tsx                 |
| 24 |          ├── AddUser                      | 19              | ./src/pages/AddUser.tsx                      |
| 25 |          │    ├── AddUserContent          | 62              | ./src/components/AddUserContent.tsx          |
| 26 |          │    ├── useAddUser              | 46              | ./src/hooks/useAddUser.ts                    |
| 27 |          │    └── ColumnsUserList         | 73              | ./src/hooks/ColumnsUserList.tsx              |
| 28 |          └── UserList                     | 95              | ./src/pages/UserList.tsx                     |
| 29 |               └── useUserList             | 132             | ./src/hooks/useUserList.tsx                  |
|----|-------------------------------------------|-----------------|----------------------------------------------|
| TOTAL CODE LINES                               | 1647            |                                              |
|----|-------------------------------------------|-----------------|----------------------------------------------|
