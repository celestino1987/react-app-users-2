
Array.prototype.sortColumn = function (column, order) {
       function compare(a, b) {
              const userA = typeof (a[column]) === 'string' ? a[column].toLowerCase() : a[column]
              const userB = typeof (b[column]) === 'string' ? b[column].toLowerCase() : b[column]

              let comparison = 0;

              if (userA > userB) {
                     comparison = order === 'asc' ? 1 : -1 ;

              } else if (userA < userB) {
                     comparison = order === 'asc' ? -1 : 1;

              }
              return comparison
       }
       return this.sort(compare)
}

export function getSort(users, column, order = 'asc') {
       return users?.sortColumn(column, order)
}


