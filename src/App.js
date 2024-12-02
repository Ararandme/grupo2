import PopUp from './task/popUP';
import LeftSide from "./task/left-slide";
import SetGroupName from "./task/taskFactory";
import {newCard} from "./task/newCard";
import './App.css';

function App(callbackfn, thisArg) {

    let task = {
        array1:[['asd','rene'],
        ['test2','arar'],
        ['newtest2','david']],
        array2:[['asd','rese'],
            ['test2','arar'],
            ['newtest2','david']],
    }

    let taskMap = task.array2.map(([arg1, arg2]) => newCard(arg1, arg2));
    console.log(taskMap);
  return (

        <div id="App">
            <div className="left-slide">
                <LeftSide name="crear nota personal"/>
                <LeftSide name="tareas"/>
            </div>
            <SetGroupName nombreTarea="personal" newcard={taskMap}/>
            <SetGroupName nombreTarea="test1" newcard={taskMap}/>
            <PopUp></PopUp>
        </div>


  );
}

export default App;

