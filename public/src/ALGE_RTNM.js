/**
 * Created by Coder on 17.03.2017.
 */
// 1       1       4       Oncourse Bib         R            xx44
// 2       5       20      Oncourse Name        L
// 3       25      3       Oncourse Team        L
// 4       28      11      Oncourse Time        R         xx:xx:xx.xx
// 5       39      8       Oncourse ±           L           +1.11.11
// 6       47      10      unused
// 7       57      20      Leader Name          L
// 8       77      11      Time to Beat         R         xx:xx:xx.xx
// 9       88      4       Rank                 R             xxx1
// 10      92      5       Class                L
const template = [
    //from, to, label
     [1  ,     4  ,     "Bib" ]
    ,[5  ,     20 ,     "Name"]
    ,[25 ,     3  ,     "Team"]
    ,[28 ,     11 ,     "Time"]
    ,[39 ,     8  ,     "±" ]
    ,[47 ,     10 ,     "unuse"]
    ,[57 ,     20 ,     "Leader"]
    ,[77 ,     11 ,     "Time"  ]
    ,[88 ,     4  ,     "Rank"  ]
    ,[92 ,     5  ,     "Class" ]
]

const parser = {
    parse: (data)=>{
        console.log(data);

        let res = [];
        let r   = {};
        let len = data.length

        while (len > 2) {//2 - length of '\r'
            template.forEach((el)=>{
                len -= el[1];
                r[el[2]] = data.slice(el[0]-1, el[0]-1 + el[1])
            })

            res.push(r)
        }

        return res;
    }
}