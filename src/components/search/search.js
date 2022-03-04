import React, {Component} from "react";

export default class Search extends Component {

  state = {
    search: '',
    type: 'all'
  }

  handleKey = (event) => {
    if(event.key === 'Enter') {
      this.props.updateSearch(this.state.search, this.state.type);
    }
  }

  handleFillter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}), () => {
      this.props.updateSearch(this.state.search, this.state.type);
    })
  }

    render() {

        return (
          <>
            <div className="row">
                <div className="input-field">
                  <input 
                    type="search" 
                    className="validate" 
                    placeholder="Введите название фильма на английском языке"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                  />
                  <button 
                    className="btn btn-search blue lighten-1" 
                    onClick={() => this.props.updateSearch(this.state.search, this.state.type)}>
                    Поиск
                  </button>
                </div>
              <div>
                <label>
                  <input className="with-gap" name="type" type="radio" data-type="all" onChange={this.handleFillter} checked={this.state.type === 'all'}/>
                  <span>All</span>
                </label>
                <label>
                  <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFillter} checked={this.state.type === 'movie'}/>
                  <span>Movies only</span>
                </label>
                <label>
                  <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFillter} checked={this.state.type === 'series'}/>
                  <span>Series only</span>
                </label>
              </div>
            </div>
          </>
        )
    }
}