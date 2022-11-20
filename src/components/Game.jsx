import React, { useEffect } from 'react';
import { useState } from 'react';
import { generateMap } from '../initialization/Map';
import Position from '../initialization/Position.js';




function Game(props) {
    const [command, setCommand] = useState('')
    const [result, setResult] = useState(false)
    const [gameMap,setGameMap] = useState(generateMap(props.row, props.column))

  
    
    const position = new Position()
    position.stratMoving(gameMap, command)
    
    const handleCommand = (e) => {
        setCommand(e.target.value)
        setResult(false)
      
    }

    const handleSubmit = (e) => {

        
        for (let i = 0; i < command.length; i++){
            if ((command[i] !== 'R') && (command[i] !== 'L') && (command[i] !== 'F')){
                return alert("Caption, please input correct comands :)")
            }
        }
        
        /*

        if (position.x >= props.row) {
            position.x = props.row - 1
        }

        if (position.y >= props.column) {
            position.y = props.column - 1
        }
        */
        console.log(position.x,position.y)

        setGameMap(prev => {
            prev[position.x][position.y] = '★ '
            const arrCopy = prev.slice()
            return arrCopy
        })
        setResult(true)
        e.preventDefault();
    }

    
    const reStart = () => {
        setGameMap(generateMap(props.row, props.column))
        setGameMap(prev => {
            prev[1][1] = '✈'
            const arrCopy = prev.slice()
            return arrCopy
        })
    }
    
    const quitGame = () => {
        window.location.reload()
    }
    useEffect(() => {
        setGameMap(prev => {
            prev[1][1] = '✈'
            const arrCopy = prev.slice()
            return arrCopy
        })
    }, [])    
    

    
 
    

    

    
    return (
        <div className='game'>
            <h1>Mars terrain</h1>
            <div className='gameItems'>
                <div className='restart' onClick={reStart}>Restrat</div>
                <div className='quit' onClick={quitGame}>Quit</div>
            </div>

            {result === false?
                <label>Captain, Please input your command!</label>
                : <label>Caption, Your Direction is <span style={{ color: "red" }}>{position.direction || 'unknow'} </span>
                    ,Your Position is
                    <span style={{ color: "red" }}>  {position.x},{position.y} </span>
                </label>}
            
            <div>
                <input type='text' onChange = { handleCommand} value = {command}/>
                <button onClick={handleSubmit}>Go</button>
            </div>
            <div className='map'>
                {gameMap.map((items,index) => {
                    return (<div key={index} className='block'>{items}</div>)
                })}
            </div>

            
        </div>
    );
}

export default Game;