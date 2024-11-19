//get Knight next possible moves
const getPath = (x,y) => {
    return [
        [x+1, y+2],
        [x+1, y-2],
        [x-1, y+2],
        [x-1, y-2],
        [x+2, y+1],
        [x+2, y-1],
        [x-2, y+1],
        [x-2, y-1]
    ]
}

//traverse the graph using BFS and return the path and distance
const knightMoves = (curr,dst) => {
    const queue = [[curr,[],0]];
    const [c,d] = dst;
    const visited = new Set();
    while(queue.length > 0){
        let [src, arr, distance] = queue.shift();
        const [x,y] = src;
        if(x >= 0 && x <= 7 && y >= 0 && y <= 7){
            if(x === c && y === d){
                const temp = arr.split(` `);
                return {temp, distance};
            }
            const val = x + `+` + y;
            if(!visited.has(val)){
                visited.add(val);
                const path = getPath(x,y);
                path.forEach((node)=>{
                    queue.push([node, arr+src+` `, distance + 1]);
                })
            }
        }

    }

    return false;
};

//print the result in console
const printMoves = (curr, dst) => {
    const result = knightMoves(curr, dst)
    if(result !== false){
        const arr = result.temp;
        const dist = result.distance;
        const temp = dst[0] + `,` + dst[1]
        console.log(`You made it in ${dist} moves!  Here's your path:`);
        for(let i = 0; i < arr.length - 1; i++ ){
            console.log(`${arr[i]} --> `);
        }
        console.log(temp);
    }
    else{
        console.log(null);
    }
};

printMoves([3,3],[4,4]); //You made it in 2 moves!  Here's your path: 3,3 --> 2,5 --> 4,4