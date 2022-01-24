// OddOccurencesInArray

function solution (A) {

     let set1 = new Set();

     for (let i = 0; i < A.length; i++) {
         let a = A[i];
         if (set1.has(a)) {
            set1.delete(a);
         } else {
            set1.add(a);
         }
     }
     let setIter = set1.values();
     return setIter.next().value;
}

[[[9,3,9,3,9,7,9]]].forEach(([e]) => console.log(solution(e)));