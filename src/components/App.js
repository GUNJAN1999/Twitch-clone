import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';

/*
218786323049-8080227d2igcqks7cs6ug8dju4jtkqqt.apps.googleusercontent.com
*/

const App=()=>
{
	return(
		<div>
		<BrowserRouter>
			<div>
				<Header/>
				<Route path="/" exact component={StreamList}/>
				<Route path="/streams/new" exact component={StreamCreate}/>
				<Route path="/streams/edit" exact component={StreamEdit}/>
				<Route path="/streams/delete" exact component={StreamDelete}/>
				<Route path="/streams/show" exact component={StreamShow}/>
			</div>
		</BrowserRouter>
		</div>
	);
}

export default App;