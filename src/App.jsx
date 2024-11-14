import './App.css'

function App() {
  
  function inserir(num){
   let n = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = n + num;
  }

  function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
      document.getElementById('resultado').innerHTML = eval(resultado)
    }
  }

  function clean(){
    document.getElementById('resultado').innerHTML = '';
  }

  function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
  }

  return (
    <div className='container'>
      <div className='calculadora'>
        <h1>Calculadora</h1>
        <p id='resultado'></p>
        <table>
          <tr>
            <th><button type='button' onClick={() => clean()}>C</button></th>
            <th><button type='button' onClick={() => back()}>bc</button></th>
            <th><button type='button' onClick={() => inserir('*')}>*</button></th>
            <th><button type='button' onClick={() => inserir('/')}>/</button></th>
          </tr>
          <tr>
            <th><button type='button' onClick={() => inserir('9')}>9</button></th>
            <th><button type='button' onClick={() => inserir('8')}>8</button></th>
            <th><button type='button' onClick={() => inserir('7')}>7</button></th>
            <th><button type='button' onClick={() => inserir('-')}>-</button></th>
          </tr>
          <tr>
            <th><button type='button' onClick={() => inserir('6')}>6</button></th>
            <th><button type='button' onClick={() => inserir('5')}>5</button></th>
            <th><button type='button' onClick={() => inserir('4')}>4</button></th>
            <th><button type='button' onClick={() => inserir('+')}>+</button></th>
          </tr>
          <tr>
            <th><button type='button' onClick={() => inserir('3')}>3</button></th>
            <th><button type='button' onClick={() => inserir('2')}>2</button></th>
            <th><button type='button' onClick={() => inserir('1')}>1</button></th>
            <th rowSpan={2}><button id='rowspan' type='button' onClick={() => calcular()}>=</button></th>
          </tr>
          <tr>
            <th colSpan={2}><button id='colspan' type='button' onClick={() => inserir('0')}>0</button></th>
            <th><button type='button' onClick={() => inserir('.')}>.</button></th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default App
