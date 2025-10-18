| No   | Tree                                            | Code Lines STEP 1 | Code Lines STEP 2 | Code Lines STEP 3 | Path                                     |
| ---- | ----------------------------------------------- | ----------------- | ----------------- | ----------------- | ---------------------------------------- |
| 01   | App.tsx                                         | 17                | 29                | 39                | ./src/App.tsx                            |
| 02   | ├── firebase                                    | 25                | 34                | 34                | ./src/firebase.js                        |
| 03   | │   └── .env                                    | 9                 | 9                 | 9                 | ./.env                                   |
| 04   | ├── Navbar                                      | 63                | 92                | 92                | ./src/components/Navbar.tsx              |
| 05   | ├── ProtectedRoute                              |                   | 41                | 41                | ./src/components/ProtectedRoute.tsx      |
| 06   | ├── AuthContext                                 |                   | 120               | 120               | ./src/context/AuthContext.tsx            |
| 07   | ├── (Outlet → Routed)                           |                   |                   |                   |                                          |
| 08   | │   ├── Home                                    | 17                | 35                | 35                | ./src/pages/Home.tsx                     |
| 09   | │   │   ├── HomeContent                         | 53                | 53                | 93                | ./src/components/HomeContent.tsx         |
| 10   | │   │   ├── useHome                             | 28                | 28                | 51                | ./src/hooks/useHome.ts                   |
| 11   | │   │   ├── useHomeContent                      |                   | 24                | 24                | ./src/hooks/useHomeContent.ts            |
| 12   | │   ├── Login                                   |                   | 64                | 64                | ./src/pages/Login.tsx                    |
| 13   | │   │   ├── LoginForm                           |                   |                   | 79                | ./src/components/LoginForm.tsx           |
| 14   | │   │   ├── useLogin                            |                   | 45                | 65                | ./src/hooks/useLogin.ts                  |
| 15   | │   ├── Register                                |                   | 46                | 71                | ./src/pages/Register.tsx                 |
| 16   | │   │   ├── RegisterForm                        |                   | 52                | 108               | ./src/components/RegisterForm.tsx        |
| 17   | │   │   ├── useRegister                         |                   | 43                | 66                | ./src/hooks/useRegister.ts               |
| 18   | │   ├── ForgotPassword                          |                   | 44                | 73                | ./src/pages/ForgotPassword.tsx           |
| 19   | │   │   ├── ForgotPasswordEmail                 |                   | 49                | 68                | ./src/components/ForgotPasswordEmail.tsx |
| 20   | │   │   ├── useForgotPassword                   |                   | 25                | 55                | ./src/hooks/useForgotPassword.ts         |
| 21   | │   ├── Dashboard                               |                   |                   | 73                | ./src/pages/Dashboard.tsx                |
| 22   | │   │   ├── DashboardContent                    |                   |                   | 68                | ./src/components/DashboardContent.tsx    |
| 23   | │   │   ├── useDashboard                        |                   |                   | 38                | ./src/hooks/useDashboard.ts              |
| 24   | │   ├── AddUser                                 |                   |                   | 73                | ./src/pages/AddUser.tsx                  |
| 25   | │   │   ├── AddUserContent                      |                   |                   | 62                | ./src/components/AddUserContent.tsx      |
| 26   | │   │   ├── useAddUser                          |                   |                   | 46                | ./src/hooks/useAddUser.ts                |
| 27   | │   │   ├── ColumnsUserList                     |                   |                   | 73                | ./src/hooks/ColumnsUserList.tsx          |
| 28   | │   ├── UserList                                |                   |                   | 95                | ./src/pages/UserList.tsx                 |
| 29   | │   │   ├── useUserList                         |                   |                   | 132               | ./src/hooks/useUserList.ts               |
| 30   | │   ├── NotFoundPage                            |                   | 22                | 22                | ./src/pages/NotFound.tsx                 |
| ---- | ----------------------------------------------- | ---------------   | ---------------   | ---------------   | -----------------------------            |
|      | TOTAL CODE LINES                                | 212               | 863               | 1791              |                                          |
