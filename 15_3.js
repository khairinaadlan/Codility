// CountTriangles

function solution(A) {
    
    let a = A.sort((a, b) => a - b); 
    // sorted: 1, 2, 5, 8, 10, 12
    let triangles = 0;

    for (let catBack = 0; catBack < A.length - 2; catBack++) {
        let catFront = catBack + 2;

        for (let m = catBack + 1; m < A.length - 1; m++) {
            
            while(catFront < A.length && a[catBack] + a[m] > a[catFront]) {
                catFront++;
            }
            triangles += catFront - m - 1;
            
        }
    }
    return triangles;
}

[[[10, 2, 5, 1, 8, 12]]].forEach(([e]) => console.log(solution(e)))