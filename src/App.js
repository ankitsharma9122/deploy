import Leftnav from './components/Leftnav';
import Rightnav from './components/Rightnav';
import style from './App.module.css';
import eclectica from './assets/eclectica.png';
function App() {
  return (
    <div>
    <div className={style.main}>
    <Leftnav/>
    <Rightnav/>
    </div>
    <div className={style.body}>
 
    <h1 className={style.gap}>Make cool Landing pages with App</h1>
    <div className={style.gap}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Impedit nihil tenetur minus quidem est deserunt molestias
    accusamus harum ullam tempore debitis et, expedita, 
    repellat delectus aspernatur neque itaque qui quod.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Impedit nihil tenetur minus quidem est deserunt molestias
    accusamus harum ullam tempore debitis et, expedita, 
    repellat delectus aspernatur neque itaque qui quod.
    </div>
    </div>
   
    </div>
  );
}

export default App;
