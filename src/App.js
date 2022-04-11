import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<main>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/products' element={<Products></Products>}></Route>
					<Route path='/orders' element={<Orders></Orders>}></Route>
					<Route path='/login' element={<SignIn></SignIn>}></Route>
					<Route path='/register' element={<SignUp></SignUp>}></Route>
					<Route path='*' element={<NotFound></NotFound>}></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
