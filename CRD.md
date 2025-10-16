# Component Relation Diagram (CRD)

| No   | Tree                                           | Code Line Count    | Path                                      |
| ---- | ---------------------------------------------- | ------------------ | ----------------------------------------- |
| 1    | App.tsx                                        | 55                 | ./src/App.tsx                             |
| 2    | ├── Navbar                                     | 92                 | ./src/components/Navbar.tsx               |
| 3    | ├── ProtectedRoute                             | 41                 | ./src/context/ProtectedRoute.tsx          |
| 4    | └── (Outlet → Routed)                          |                    |                                           |
| 5    | ├── Home                                       | 35                 | ./src/pages/Home.tsx                      |
| 6    | │   ├── HomeContent                            | 93                 | ./src/components/HomeContent.tsx          |
| 7    | │   └── useHome                                | 51                 | ./src/hooks/useHome.ts                    |
| 8    | ├── Login                                      | 64                 | ./src/pages/Login.tsx                     |
| 9    | │   ├── LoginForm                              | 79                 | ./src/components/LoginForm.tsx            |
| 10   | │   └── useLogin                               | 65                 | ./src/hooks/useLogin.ts                   |
| 11   | ├── Register                                   | 71                 | ./src/pages/Register.tsx                  |
| 12   | │   ├── RegisterForm                           | 108                | ./src/components/RegisterForm.tsx         |
| 13   | │   └── useRegister                            | 66                 | ./src/hooks/useRegister.ts                |
| 14   | ├── ForgotPassword                             | 103                | ./src/pages/ForgotPassword.tsx            |
| 15   | │   ├── ForgotPassWordEmail                    | 68                 | ./src/components/ForgotPassWordEmail.tsx  |
| 16   | │   └── useForgotPassword                      | 45                 | ./src/hooks/useForgotPassword.tsx         |
| 17   | ├── Dashboard                                  | 38                 | ./src/pages/Dashboard.tsx                 |
| 18   | │   ├── DashBoardContent                       | 107                | ./src/components/DashBoardContent.tsx     |
| 19   | │   └── useDashBoard                           | 55                 | ./src/hooks/useDashBoard.ts               |
| 20   | ├── AddUser                                    | 38                 | ./src/pages/AddUser.tsx                   |
| 21   | │   ├── AddUserContent                         | 105                | ./src/components/AddUserContent.tsx       |
| 22   | │   └── useAddUser                             | 69                 | ./src/hooks/useAddUser.ts                 |
| 23   | ├── EditUser                                   | 49                 | ./src/pages/EditUser.tsx                  |
| 24   | │   ├── EditUserContent                        | 100                | ./src/components/EditUserContent.tsx      |
| 25   | │   └── useEditUser                            | 94                 | ./src/hooks/useEditUser.ts                |
| 26   | ├── UserList                                   | 110                | ./src/pages/UserList.tsx                  |
| 27   | │   ├── columnsUserList                        | 114                | ./src/hooks/columnsUserList.tsx           |
| 28   | │   └── useUserList                            | 163                | ./src/hooks/useUserList.tsx               |
| 29   | ├── Profile                                    | 79                 | ./src/pages/Profile.tsx                   |
| 30   | │   ├── ProfileContent                         | 111                | ./src/components/ProfileContent.tsx       |
| 31   | │   └── useProfile                             | 145                | ./src/hooks/useProfile.tsx                |
| 32   | ├── Index                                      | 26                 | ./src/pages/Index.tsx                     |
| 33   | └── NotFoundPage                               | 41                 | ./src/pages/NotFound.tsx                  |
| 34   | context/                                       |                    |                                           |
| 35   | └── AuthContext                                | 173                | ./src/context/AuthContext.tsx             |
| 36   | lib/                                           |                    |                                           |
| 37   | └── utils                                      | 19                 | ./src/lib/utils.ts                        |
| 38   | firebase.js                                    | 34                 | ./src/firebase.js                         |
| 39   | .env                                           | 9                  | ./.env                                    |
| ---- | ---------------------------------------------- | ------------------ | ----------------------------------------- |
|      | TOTAL CODE LINES                               | 2,680              |                                           |
| ---- | ---------------------------------------------- | ------------------ | ----------------------------------------- |
