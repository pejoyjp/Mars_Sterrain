export const generateMap = (row, column) => {
    const map = []
    for (let i = 0; i < row; i++){
        map[i] = []
        for (let j = 0; j < column; j++){
            map[i][j] = '☐ ' 
        }
    }
    return map
}