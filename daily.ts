//merge two arrays alternatively
function mergeArray(arr1: number[], arr2: number[]): number[] {
    let i = 0, j = 0, k = 0;
    let newArr: number[] = []
    while (i < arr1.length && j < arr2.length) {
        newArr[k] = arr1[i]
        k++;
        i++;

        newArr[k] = arr2[j]
        k++;
        j++
    }

    while (i < arr1.length) {
        newArr[k] = arr1[i]
        k++
        j++
    }

    while (j < arr2.length) {
        newArr[k] = arr2[j]
        k++
        j++
    }

    return newArr

}

//let x : number[] = mergeArray([1,2,3],[6,7,8,9,10])
//console.log(x)


function sumTwoNumbers(): number | null {
    let result: string | null = prompt('enter two numbers between space')

    if (typeof (result) === 'string') {
        let numArr = result.split(' ')
        let sum: number = Number(numArr[0]) + Number(numArr[1])
        return sum
    }
    return null
}

function passMark(mark: number): string {
    if (mark >= 50 && mark <= 100) {
        return "passed"
    } else {
        return "failed"
    }
}


//passMark(50)


function specialArray(nums: number[]): number {
    for (let i = 0; i <= nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= i) {
                count++
            }
        }

        if (count == i) {
            return i
        }
    }
    return -1
};

function speciaArray(nums: number[]): number {
    for (let i = 0; i <= nums.length; i++) {
        if (nums.filter((val) => val >= i).length === i) {
            return i
        }
    }
    return -1
};



function maxLengthBetweenEqualCharacters(s: string): number {
    let n = s.length - 1
    for (let i = 0; i <= n; i++) {
        console.log(s[i], s[n - i])
        console.log(i, n - i)
        if (s[i] === s[n - i]) {
            if (i >= n - i) {
                return -1
            }
            let arr = s.split('')
            console.log(i + 1, -(i + 1))
            return arr.slice(i + 1, -(i + 1)).length
        }
    }
    return -1
};

// binary search only possible in sorted Array
function binarySearch(arr: number[], k: number) {
    let mid = Math.floor(arr.length - 1 / 2)
    let n = arr.length
    for (let i = 0; i < n; i++) {
        if (k < arr[mid]) {
            n = mid - 1
        } else if (k > arr[mid]) {
            i = mid + 1
        } else {
            return `value in ${mid} th position`
        }

    }
    return `not such value is here`
}

//let arr = [1,2,3,4,5,6,7,8,9,10]
//console.log(binarySearch(arr,5))

// binary search can only be worked of sorted array

function binarySearchRecursive(arr: number[], k: number) {
    function search(start: number, end: number) {
        let mid = Math.floor((start + end) / 2)
        if (start >= end) {
            return 'no such value'
        }

        if (k > arr[mid]) {
            return search(mid + 1, end)
        } else if (k < arr[mid]) {
            return search(start, mid - 1)
        } else {
            return `value is in ${mid}th position`
        }
    }
    return search(0, arr.length - 1)
}

//let arr = [1,2,3,4,5,6,7,8,9,10]
//console.log(binarySearchRecursive(arr,11))

function log(target: any, key: any) {
    console.log('this is from log')
}

// class Some {
//     @log
//     display(){
//         console.log('jus to display')
//     }
// }

//let something = new Some()
//something.display() 

class MaxHeap {
    value: number[]
    constructor() {
        this.value = []
    }

    insert(val: number) {
        if (!this.value.length) {
            this.value.push(val)
            return true
        }

        this.value.push(val)
        let index = this.value.length - 1

        let heapUp = (index: number) => {
            let parentIndex: number = Math.floor((index - 1) / 2)
            if (this.value[index] > this.value[parentIndex]) {
                [this.value[index], this.value[parentIndex]] = [this.value[parentIndex], this.value[index]]
                heapUp(parentIndex)
            } else {
                return
            }
        }

        heapUp(index)
    }
}

// let s = new MaxHeap()
// s.insert(1)
// s.insert(2)
// s.insert(5)
// s.insert(3)
// s.insert(10)
// console.log(s)

// check if a substring is in the string
function stringCheck(string: string, s: string): boolean {
    let i = 0, j = 0;
    while (i < string.length) {
        if (string[i] === s[j]) {
            j++
        } else {
            j = 0
        }
        i++

        if (j >= s.length) {
            return true
        }
    }
    return false
}

//console.log(stringCheck('thisissomething','ism'))

function stringCount(string: string, s: string): number {
    let i = 0, j = 0, count = 0;

    while (i < string.length) {
        if (string[i] === s[j]) {
            j++
        } else {
            j = 0
        }

        if (j >= s.length) {
            count++
            j = 0
        }
        i++
    }

    return count
}

//console.log(stringCount('mysdfdsfdmysdsdsfdmy','my'))

function logging(target, name) {
    console.log(target)
    console.log(name)

}

class Some {

    @logging
    some(some) {
        console.log(some)
    }

}

// let s = new Some()
// s.some('hai')

function uppercase(target, name, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        const result = original.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}

// Apply the @uppercase decorator to a function
// class Example {
//     @uppercase
//     greet(name) {
//         return `Hello, ${name}!`;
//     }

//     @uppercase
//     saySomething(message) {
//         return message;
//     }
// }

// const example = new Example();
// const greeting = example.greet("John");
// const message = example.saySomething("This is a message.");

// console.log(greeting); // Output: "HELLO, JOHN!"
// console.log(message);  // Output: "THIS IS A MESSAGE."

// let n = 42
// let k = 2

// let rem = n % k
//  console.log((n-rem)/k)


 let n  = 4

for(let i = 0 ; i<=2*n ; i++){
    let s = ""
    let k = i > n ?(2*n) - i: i ;

    //loop for space
    for(let m= 0 ; m < k; m++ ){
        s+= " "
    }
    
    for(let j = 0 ; j< (n-k)+1 ; j++){
        s+= " *"
    }
    console.log(s)
}

export { }