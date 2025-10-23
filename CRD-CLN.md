# Component Relation Diagram (CRD) — Code Line Navigation Table
| ---- | ----------------------------------------------------|-------------------|-------------------| ------------------|-------------------|------------------------------------------|
| ---- | ----------------------------------------------------|-------------------|-------------------| ------------------|-------------------|------------------------------------------|
| No   | Tree                                                | Code Lines STEP 1 | Code Lines STEP 2 | Code Lines STEP 3 | Code Lines STEP 4 | Path                                     |
| ---- | ----------------------------------------------------|------------------ | ----------------- | ----------------- | ------------------|------------------------------------------|
| 01   |     App.tsx                                         | 17                | 29                | 39                | 44                | ./src/App.tsx                            |
| 02   |     ├── firebase                                    | 25                | 34                | 34                | 34                | ./src/firebase.js                        |
| 03   |     │       └── .env                                | 9                 | 9                 | 9                 | 9                 | ./.env                                   |
| 04   |     ├── Navbar                                      | 63                | 92                | 92                | 92                | ./src/components/Navbar.tsx              |
| 05   |     ├── ProtectedRoute                              |                   | 41                | 41                | 41                | ./src/components/ProtectedRoute.tsx      |
| 06   |     ├── AuthContext                                 |                   | 120               | 120               | 120               | ./src/context/AuthContext.tsx            |
| 07   |     └── (Outlet → Routed)                           |                   |                   |                   |                   |                                          |
| 08   |             ├── Home                                | 17                | 35                | 35                | 35                | ./src/pages/Home.tsx                     |
| 09   |             │   ├── HomeContent                     | 53                | 53                | 93                | 93                | ./src/components/HomeContent.tsx         |
| 10   |             │   └── useHome                         | 28                | 28                | 51                | 51                | ./src/hooks/useHome.ts                   |
| 11   |             ├── Login                               |                   | 64                | 64                | 64                | ./src/pages/Login.tsx                    |
| 12   |             │   ├── LoginForm                       |                   |                   | 79                | 79                | ./src/components/LoginForm.tsx           |
| 13   |             │   └── useLogin                        |                   | 45                | 65                | 65                | ./src/hooks/useLogin.ts                  |
| 14   |             ├── Register                            |                   | 46                | 71                | 71                | ./src/pages/Register.tsx                 |
| 15   |             │   ├── RegisterForm                    |                   | 52                | 108               | 108               | ./src/components/RegisterForm.tsx        |
| 16   |             │   └── useRegister                     |                   | 43                | 66                | 66                | ./src/hooks/useRegister.ts               |
| 17   |             ├── ForgotPassword                      |                   | 44                | 73                | 73                | ./src/pages/ForgotPassword.tsx           |
| 18   |             │   ├── ForgotPasswordEmail             |                   | 49                | 68                | 68                | ./src/components/ForgotPasswordEmail.tsx |
| 19   |             │   └── useForgotPassword               |                   | 25                | 55                | 55                | ./src/hooks/useForgotPassword.ts         |
| 20   |             ├── Dashboard                           |                   |                   | 73                | 73                | ./src/pages/Dashboard.tsx                |
| 21   |             │   ├── DashboardContent                |                   |                   | 68                | 68                | ./src/components/DashboardContent.tsx    |
| 22   |             │   └── useDashboard                    |                   |                   | 38                | 38                | ./src/hooks/useDashboard.ts              |
| 23   |             ├── AddUser                             |                   |                   | 73                | 73                | ./src/pages/AddUser.tsx                  |
| 24   |             │   ├── AddUserContent                  |                   |                   | 62                | 62                | ./src/components/AddUserContent.tsx      |
| 25   |             │   ├── useAddUser                      |                   |                   | 46                | 46                | ./src/hooks/useAddUser.ts                |
| 26   |             │   └── ColumnsUserList                 |                   |                   | 73                | 73                | ./src/hooks/ColumnsUserList.tsx          |
| 27   |             ├── UserList                            |                   |                   | 95                | 95                | ./src/pages/UserList.tsx                 |
| 28   |             │   └── useUserList                     |                   |                   | 132               | 132               | ./src/hooks/useUserList.ts               |
| 29   |             ├── EditUser                            |                   |                   |                   | 23                | ./src/pages/EditUser.tsx                 |
| 30   |             │   ├── EditUserContent                 |                   |                   |                   | 45                | ./src/components/EditUserContent.tsx     |
| 31   |             │   └── useEditUser                     |                   |                   |                   | 51                | ./src/hooks/useEditUser.ts               |
| 32   |             ├── Profile                             |                   |                   |                   | 43                | ./src/pages/Profile.tsx                  |
| 33   |             │   ├── ProfileContent                  |                   |                   |                   | 49                | ./src/components/ProfileContent.tsx      |
| 34   |             │   └── useProfile                      |                   |                   |                   | 67                | ./src/hooks/useProfile.ts                |
| 35   |             └── NotFoundPage                        |                   |                   |                   | 22                | ./src/pages/NotFound.tsx                 |
| -----|-----------------------------------------------------|-------------------|-------------------|-------------------|-------------------|------------------------------------------|
|      |                            TOTAL CODE LINES         | 212               | 841               | 1647              | 2,186             |                                          |
| ---- | ----------------------------------------------------|-------------------|-------------------| ------------------|-------------------|------------------------------------------|
