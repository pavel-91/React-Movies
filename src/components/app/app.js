import React, {Component} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Content from "../content/content";

export default class App extends Component {


    render() {

        return (
					<>
						<Header />
						<Content/>
						<Footer />
					</>
        )
    }
}