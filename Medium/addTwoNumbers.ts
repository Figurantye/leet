/*class node {
    val: number
    next: number | null
    constructor(val: number) {
        this.val = val
    }
}

class ListNode{
    first: node

    add(data:number): void{
        const celula = new node(data);
        this.first = celula
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null{
};

*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}   

class node {
    first:ListNode
    last:ListNode
    length:number

    constructor() {
    }

    add(data:number):void{
        const element = new ListNode(data)
        if (this.length =- 0) {
            this.first = element
        } else {
            this.last.next = element
        }
        this.length++
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): void {
    const response = new node();
    let arrl1:string = '';
    let arrl2:string = '';

    while (l1?.val != null) {
        console.log('next: ',l1.next);
        console.log("next: ", l2?.next);
        if (l1.val != null) {
            arrl1 = `${l1.val}${arrl1}`
            l1 = l1.next
            console.log(arrl1);
            
        }
        
        if (l2?.val != null) {
            arrl2 = `${l2.val}${arrl2}`
            l2 = l2.next
        }

        
    }

    console.log(arrl1, arrl2);
    
    let sum:any = parseInt(arrl1) + parseInt(arrl2)

    sum.toString().split("").map(Number)
    console.log(sum);
    

    for (let index = 0; index < sum.length; index++) {
        response.add(sum[index])
    }

    console.log(response.last);
    
}
const resp = new node()
resp.add(2)
resp.add(4)
resp.add(3)

const respo2 = new node()
respo2.add(5)
respo2.add(6)
respo2.add(4)

addTwoNumbers(resp.last, respo2.last)