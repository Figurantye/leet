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
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var node = /** @class */ (function () {
    function node() {
    }
    node.prototype.add = function (data) {
        var element = new ListNode(data);
        if (this.length = -0) {
            this.first = element;
        }
        else {
            this.last.next = element;
        }
        this.length++;
    };
    return node;
}());
function addTwoNumbers(l1, l2) {
    var response = new node();
    var arrl1 = '';
    var arrl2 = '';
    while ((l1 === null || l1 === void 0 ? void 0 : l1.val) != null) {
        console.log('next: ', l1.next);
        console.log("next: ", l2 === null || l2 === void 0 ? void 0 : l2.next);
        if (l1.val != null) {
            arrl1 = "".concat(l1.val).concat(arrl1);
            l1 = l1.next;
            console.log(arrl1);
        }
        if ((l2 === null || l2 === void 0 ? void 0 : l2.val) != null) {
            arrl2 = "".concat(l2.val).concat(arrl2);
            l2 = l2.next;
        }
    }
    console.log(arrl1, arrl2);
    var sum = parseInt(arrl1) + parseInt(arrl2);
    sum.toString().split("").map(Number);
    console.log(sum);
    for (var index = 0; index < sum.length; index++) {
        response.add(sum[index]);
    }
    console.log(response.last);
}
var resp = new node();
resp.add(2);
resp.add(4);
resp.add(3);
var respo2 = new node();
respo2.add(5);
respo2.add(6);
respo2.add(4);
addTwoNumbers(resp.last, respo2.last);
