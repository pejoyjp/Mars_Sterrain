const Directions = {
    N: 1,
    S: 2,
    E: 3,
    W: 4
}

export default class Position {
    x = 1
    y = 1
    direction = Directions.N
    
    rotate90Left() {
        switch (this.direction) {
            case Directions.N:
                this.direction = Directions.W
                break
            case Directions.S:
                this.direction = Directions.E
                break
            case Directions.E:
                this.direction = Directions.N
                break
            case Directions.W:
                this.direction = Directions.S
                break
            default:
                break
        }
    }
    rotate90Right() {
        switch (this.direction) {
            case Directions.N:
                this.direction = Directions.E
                break
            case Directions.S:
                this.direction = Directions.W
                break
            case Directions.E:
                this.direction = Directions.S
                break
            case Directions.W:
                this.direction = Directions.N
                break
            default:
                break
        }
        
    }
    moveInSameDirection() {
        switch (this.direction) {
            case Directions.N:
                this.y += 1
                break
            case Directions.S:
                this.y -= 1
                break
            case Directions.E:
                this.x += 1
                break
            case Directions.W:
                this.x -= 1
                break
            default:
                break
        }
    }

    stratMoving(maxPoints, moves) {
        for (let i = 0; i < moves.length; i++){
            switch (moves[i]) {
                case 'F':
                    this.moveInSameDirection()
                    break
                case 'L':
                    this.rotate90Left()
                    break
                case 'R':
                    this.rotate90Right()
                    break
                default:
                    break
               
            }

        }
        

        if (this.direction === 1) {
            this.direction = 'N'
        } else if (this.direction === 2) {
            this.direction = 'S'
        }else if (this.direction === 3) {
            this.direction = 'E'
        } else {
            this.direction = 'W'
        }
    }
}
