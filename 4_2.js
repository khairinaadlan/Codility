// PermCheck

function solution(A) {
    // // method 1
    // let newA = A.sort();
    // for (let i = 0; i < A.length; i++) {
    //     if (newA[i] == newA[i + 1] - 1) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // }

    // method 2
    let setA = new Set();

		for (let i = 0; i < A.length; i++) {
			setA.add(A[i]);
		}
		
		for (let i = 0; i < A.length; i++) {
			if(!setA.has(i + 1)) {
				return 0;
			}
		}
		return 1;
}

[[[4, 1, 3, 2]],[[4, 1, 3]]].forEach(([e]) => console.log(solution(e)))