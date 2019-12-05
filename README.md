# General
This project is dependent on [bank-account-checker](https://github.com/tomreineke/bank-account-checker) in that it uses the generated transactions.ts file as an input for the [transactions.ts](https://github.com/tomreineke/account-app/blob/master/src/assets/transactions.ts) file in this project.

# Usage
After updating the transactions.ts file with the one created by [bank-account-checker](https://github.com/tomreineke/bank-account-checker) just start the Angular application with

```
ng serve --open
```
If you are new to Angular, check out the short [local setup](https://angular.io/guide/setup-local) description.

A browser window will open, and you should see an overview like this:

<img src="https://github.com/tomreineke/account-app/blob/master/src/assets/account_app.png" style="zoom:50%;" />

