import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';


class GoogleAuth extends React.Component
{
	
	componentDidMount()
	{
		window.gapi.load('client:auth2',()=>{
			window.gapi.client.init({
				clientId:'218786323049-8080227d2igcqks7cs6ug8dju4jtkqqt.apps.googleusercontent.com',
				scope:'email'
			}).then(()=>{
				this.auth=window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);

			});
		});
	}

	onSignedIn=()=>
	{
		this.auth.signIn();
	}

	onSignedOut=()=>
	{
		this.auth.signOut();
	}



	onAuthChange=(isSignedIn)=>
	{
		if(isSignedIn)
		{
			this.props.signIn(this.auth.currentUser.get().getId());
		}
		else{
			this.props.signOut();
		}
		
	}

	renderAuthButton()
	{
		if(this.props.isSignedIn===null)
		{
			return(
				<div></div>
			);
		}
		else if(this.props.isSignedIn){
			return(
				<div>
					<button 
					onClick={this.onSignedOut}
					className="ui red google button">
						<i className="google icon"/>
						Sign Out
					</button>
				</div>
			);
		}
		else{
			return(
				<div>
					<button 
					onClick={this.onSignedIn}
					className="ui green google button">
						<i className="google icon"/>
						Sign In 
					</button>
				</div>
			);
		}
	}
	render()
	{
		return(
		<div>{this.renderAuthButton()}</div>
		);
	}
}


const mapStateToProp=(state)=>
{
	return {isSignedIn:state.auth.isSignedIn};
}
export default connect(mapStateToProp,{signIn,signOut})(GoogleAuth);