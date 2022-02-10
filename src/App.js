import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header} from './components';
import { Home, Cart } from './pages';

function App() {
  return(
    <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/cart" element={<Cart />} exact/>
          </Routes>        
        </div>
      </div>
  );
}

export default App;


// class App extends React.Component {

//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       // window.store.dispatch(setPizzas(data.pizzas)); 
//       this.props.setPizzas(data.pizzas); 
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header/>
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home items={this.props.items}/>} exact/>
//             <Route path="/cart" element={<Cart />} exact/>
//           </Routes>        
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
