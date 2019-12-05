  import { Component } from '@angular/core';
  import { transactions } from '../../assets/transactions';
  import { TransformAmount } from './pipe.component'

  @Component({
      selector: 'group',
      templateUrl: './group.component.html',
      styleUrls: ['./group.component.css']
  })
  export class GroupComponent {
      transactions = transactions;
      transformer = new TransformAmount();

      group() {
          // group transactions by a given source like {"client A":["500", "500"]}
          const transactionMap = transactions.reduce((t, v) => {
              const key = v.source.toLowerCase();
              const amount = this.transformer.transform(v.amount);
              if (typeof t[key] === 'undefined') {
                  t[key] = [amount];
              }
              else {
                  t[key].push(amount);
              }
              return t;
          }, {});
          // reduce group of transactions to their sum like { source: "client A", sum: 1000 }
          let res = Object.keys(transactionMap).map(t => {
              return {
                  source: t,
                  sum: transactionMap[t].reduce((result, value) => { return Number(result) + Number(value); })
              };
          });
          //console.log(res);
          // create sum of all transactions (effective delta on bank account during a given period)
          const sumOfTransactions = res.map(t => t.sum)
                                      .reduce((result, value) => { return Number(result) + Number(value); });

          // round
          res = res.map(t => {
              return {
                  source: t.source,
                  sum: GroupComponent.round(t.sum, 2)
              };
          }).sort((a, b) => { // sort descendingly
              return a.sum < b.sum ? 1 : -1;
          }).concat({ // add sum
              source: 'sum of all transactions',
              sum: GroupComponent.round(sumOfTransactions, 2)
          });

          return res;
      }

      static round(value, precision) {
          let multiplier = Math.pow(10, precision || 0);
          return Math.round(value * multiplier) / multiplier;
      }
  }
