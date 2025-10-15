# Component Relation Diagram (CRD)

| No | Tree                    | Code Line Count | Path                                      |
|----|--------------------------|-----------------|-------------------------------------------|
| 1  | App.tsx                  | 55              | ./src/App.tsx                             |
| 2  | └── (Outlet → Routed)    |                 |                                           |
| 3  |     ├── Login            | 144             | ./src/pages/Login.tsx                     |
| 4  |     ├── Register         | 168             | ./src/pages/Register.tsx                  |
| 5  |     ├── ForgotPassword   | 110             | ./src/pages/ForgotPassword.tsx            |
| 6  |     ├── Dashboard        | 150             | ./src/pages/users/Dashboard.tsx           |
| 7  |     └── users/           |                 |                                           |
| 8  |         ├── AddUser      | 154             | ./src/pages/users/AddUser.tsx             |
| 9  |         └── UserList     | 284             | ./src/pages/users/UserList.tsx            |
|----|--------------------------|-----------------|-------------------------------------------|
|    | TOTAL CODE LINES         | 1,065           |                                           |
|----|--------------------------|-----------------|-------------------------------------------|
