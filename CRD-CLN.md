|------|-------------------------------------------------|-------------------|-------------------|-------------------|------------------------------------------|
| No   | Tree                                            | Code Lines STEP 1 | Code Lines STEP 2 | Code Lines STEP 3 | Path                                     |
| ---- | ----------------------------------------------- | ----------------- | ----------------- | ----------------- | ---------------------------------------- |
| 01   | App.tsx                                         | 17                | 29                | 39                | ./src/App.tsx                            |
| 02   |    ├── firebase                                 | 25                | 34                | 34                | ./src/firebase.js                        |
| 03   |    │   └── .env                                 | 9                 | 9                 | 9                 | ./.env                                   |
| 04   |    ├── Navbar                                   | 63                | 63                | 63                | ./src/components/Navbar.tsx              |
| 05   |    ├── ProtectedRoute                           |                   | 41                | 41                | ./src/components/ProtectedRoute.tsx      |
| 06   |    ├── AuthContext                              |                   | 120               | 120               | ./src/context/AuthContext.tsx            |
| 07   |    └── (Outlet → Routed)                        |                   |                   |                   |                                          |
| 08   |        ├── Home                                 | 17                | 35                | 35                | ./src/pages/Home.tsx                     |
| 09   |        │   ├── HomeContent                      | 53                | 53                | 53                | ./src/components/HomeContent.tsx         |
| 10   |        │   └── useHome                          | 28                | 28                | 28                | ./src/hooks/useHome.ts                   |
| 11   |        ├── Login                                |                   | 64                | 64                | ./src/pages/Login.tsx                    |
| 12   |        │   ├── LoginForm                        |                   | 79                | 79                | ./src/components/LoginForm.tsx           |
| 13   |        │   └── useLogin                         |                   | 45                | 45                | ./src/hooks/useLogin.tsx                 |
| 14   |        ├── Register                             |                   | 46                | 46                | ./src/pages/Register.tsx                 |
| 15   |        │   ├── RegisterForm                     |                   | 52                | 52                | ./src/components/RegisterForm.tsx        |
| 16   |        │   └── useRegister                      |                   | 43                | 43                | ./src/hooks/useRegister.tsx              |
| 17   |        ├── ForgotPassword                       |                   | 44                | 44                | ./src/pages/ForgotPassword.tsx           |
| 18   |        │   ├── ForgotPasswordEmail              |                   | 49                | 49                | ./src/components/ForgotPasswordEmail.tsx |
| 19   |        │   └── useForgotPassword                |                   | 25                | 25                | ./src/hooks/useForgotPassword.tsx        |
| 20   |        ├── Dashboard                            |                   |                   | 73                | ./src/pages/Dashboard.tsx                |
| 21   |        │   ├── DashboardContent                 |                   |                   | 68                | ./src/components/DashboardContent.tsx    |
| 22   |        │   └── useDashboard                     |                   |                   | 38                | ./src/hooks/useDashboard.tsx             |
| 23   |        ├── AddUser                              |                   |                   | 73                | ./src/pages/AddUser.tsx                  |
| 24   |        │   ├── AddUserContent                   |                   |                   | 62                | ./src/components/AddUserContent.tsx      |
| 25   |        │   ├── useAddUser                       |                   |                   | 46                | ./src/hooks/useAddUser.ts                |
| 26   |        │   └── ColumnsUserList                  |                   |                   | 73                | ./src/hooks/ColumnsUserList.tsx          |
| 27   |        └── UserList                             |                   |                   | 95                | ./src/pages/UserList.tsx                 |
| 28   |            └── useUserList                      |                   |                   | 132               | ./src/hooks/useUserList.tsx              |
|------|-------------------------------------------------|-------------------|-------------------|-------------------|------------------------------------------|
|      | TOTAL CODE LINES                                | 212               | 859               | 1647              |                                          |
|------|-------------------------------------------------|-------------------|-------------------|-------------------|------------------------------------------|
