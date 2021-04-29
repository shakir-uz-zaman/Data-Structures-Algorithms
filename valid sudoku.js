

let board =
    [
         ["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]
    ];
const isValidSudoku = function (board) {
    //console.log(board);
    let rows=[];
    let columns=[];
    let boxes =[];

    for(let i=0;i<9;i++){

        rows.push([]);
        columns.push([]);
        boxes.push([]);
    }
    for(let row=0;row<9;row++){
        for(let col=0;col<9;col++){
            let cell= board[row][col];
            if(cell!== "."){
                if(rows[row].includes(cell)){
                 return false;
                }else{
                    rows[row].push(cell);
                }
                if(columns[col].includes(cell)){
                    return false;
                }else {
                    columns[col].push(cell);
                }
                let boxIndex=Math.floor(row/3)*3 + Math.floor(col/3);
                if (boxes[boxIndex].includes(cell)) {
                    return false;
                } else boxes[boxIndex].push(cell);
            }
        }
    }
    return true;


};
console.log(isValidSudoku(board));