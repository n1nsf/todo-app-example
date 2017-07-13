import React, { Component } from 'react'
import Form from './common/Form'
import List from './common/List'

class App extends Component {

  state = {
    items: ['item1', 'item2', 'item3', 'item4']
  }

  addItem(text) {
    let items = this.state.items;
    items.push(text);
    this.setState({ items: items });
  }

  delItem(index) {
    let items = this.state.items;
    items.splice(index, 1);
    this.setState({ items: items });
  }
  render() {
    return (
      <div>
        <Form additem={ this.addItem.bind(this) }/>
        <List delitem={this.delItem.bind(this)} items={ this.state.items }/>
      </div>
    )
  }
}

export default App;
