/*esta momentariamente */
function PopUp(){

    return(
        <div id='pop-up'>
            <select>
                <option value='option1'>personal</option>
                <option value='option2'>test2</option>
                <option value='option3'>test3</option>
                <option value='option4'>test4</option>
                <option value='option5'>test5</option>
            </select>
            <span id='check-list'>
                <label htmlFor="check">marcar como completo</label>
                <input type="checkbox" id='check'/>
            </span>

            <fieldset>
                <legend>tareas</legend>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </fieldset>

            <input type="date" id='date-imput'/>


            <fieldset>
                <legend>usuario</legend>
                <input list="user-list" id='user-name'/>
                <datalist id='user-list'>
                    <option value="rene">rene</option>
                    <option value="david">david</option>
                    <option value="yesena">yesena</option>
                    <option value="admi">admin</option>
                </datalist>
                <button>grabar</button>
                <button>cancelar</button>
            </fieldset>
            <button id='delete-card'>borrar carta</button>
        </div>
    );
}
export default PopUp;