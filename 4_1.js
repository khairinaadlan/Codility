// FrogRiverOne

function solution(X, A) {
    //  console.log(X,A)

    let set = new Set();

    for (let i = 1; i <= X; i++) {
        set.add(i);
        //  console.log(set);
    }

    for (let i = 0; i < A.length; i++) {
        if (set.delete(A[i])) {
            //  console.log(set);
            if (set.size == 0) {
                return i;
            }
        }
    }
    return -1;
}

[
    [5, [1, 3, 1, 4, 2, 3, 5, 4]],
    [1, [1]],
].forEach(([e1, e2]) => console.log(solution(e1, e2)));
