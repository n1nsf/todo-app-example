import React from 'react';

class List extends React.Component {

    handleDeleteClick(index) {
        this.props.delitem(index);
    }
    render() {
        return (
            <table>
                <tbody>
                    {
                        this.props.items.map((item, index) => {
                            return (
                                <tr key={ index }>
                                    <td>{ item }</td>
                                    <td>
                                        <button onClick={ this.handleDeleteClick.bind(this, index) } type="button">del</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

}

export default List