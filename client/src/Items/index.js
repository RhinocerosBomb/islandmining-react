import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './actions'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const {fetchItemList, setCurrentItem, updateItem, createItem, deleteItem} = actions;

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      newName: '',
      newDescription: '',
    }
  }

  setCurrentEdittedIte(id) {
    this.props.setCurrentItem(id);
    let currentItem = this.props.items.filter((i) => {
      return i.id == id
    }).shift();
    let {name, description} = currentItem;
    this.setState({name, description})
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updateItem = (id) => {
    this.props.updateItem(id, this.state.name, this.state.description)
    this.props.setCurrentItem(null);
  }

  deleteItem = (id) => {
    this.props.deleteItem(id)
  }

  createItem = () => {
    this.props.createItem(this.state.newName, this.state.newDescription)
    this.setState({newName: '', newDescription: ''})
  }


  componentWillMount() {
    this.props.fetchItemList()
  }

  render() {
    return (
      <div>
        <h2>Item List</h2>
        <Paper>
          {
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  this.props.items && this.props.items.map((item) => {
                    if (this.props.currentItem == item.id) {
                      return (<TableRow key={item.id}>
                        <TableCell>
                          <TextField
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            label="Description"
                            value={this.state.description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                          />
                        </TableCell>
                        <TableCell><Button onClick={this.updateItem.bind(this, item.id)}>Save</Button></TableCell>
                      </TableRow>)
                    } else {
                      return (<TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>
                          <Button onClick={this.setCurrentEdittedIte.bind(this, item.id)}>Edit</Button>
                          <Button onClick={this.deleteItem.bind(this, item.id)}>Delete</Button>
                        </TableCell>
                      </TableRow>)
                    }
                  })
                }
              </TableBody>
            </Table>
          }
        </Paper>
        <br/>
        <br/>
        <h2>New Item</h2>
        <Paper>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    label="Name"
                    value={this.state.newName}
                    onChange={this.handleChange('newName')}
                    margin="normal"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    label="Description"
                    value={this.state.newDescription}
                    onChange={this.handleChange('newDescription')}
                    margin="normal"
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={this.createItem.bind(this)}>Save</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
        <br/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.itemsReducer.list,
  currentItem: state.itemsReducer.currentItem,
});

export default connect(
  mapStateToProps, {fetchItemList, setCurrentItem, updateItem, createItem, deleteItem}
)(Index);