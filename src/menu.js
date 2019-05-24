import React, { Component } from 'react';
import MenuItem from './components/menuItem';
import Form from './components/form';
import './menu.css';
import { connect } from 'react-redux';
import { createItem, deleteItem, updateItem, readItems } from './redux/actions/actions'
import axios from 'axios';
import uuid from 'uuid';

//main component that wraps major part of application
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { openAddForm: false };
  }

  componentDidMount() {
    this.props.readItems();
    console.log(this.props.menuItems)
  }

  //function to trigger form rendering
  handleAddClick = () => this.setState({ openAddForm: true });

  //function to handle item addition
  handleAddItem = ({ name, price }) => {

    if (name == "") name = "untitled";
    if (price == "") price = 999;

    const newItem = {
      id: uuid.v4(),
      name, price
    }

    axios.post('/api/menuItems', { ...newItem }).then(({data : {name}}) => {
      console.log(`Item - ${name} added successfully`);
    }).catch(e => console.log("Addition failed , Error ", e));

    this.props.createItem(newItem);
    this.handleCancel();
  }

  //function to handle item deletion
  handleDeleteItem = (id) => {

    axios.delete(`/api/menuItems/${id}`).then(({data : {name}}) => {
      console.log(`Item - ${name} deleted successfully`);
    }).catch(e => console.log("Deletion failed, Error ",e));

    this.props.deleteItem(id)
  }

  //function to handle item updates
  handleUpdateItem = (item) => {

    axios.put(`/api/menuItems/${item.id}`,{item}).then( ({data : {name}}) => {
      console.log(`Item - ${name} updated successfully`);
    }).catch(e => console.log('Updation failed, Error ',e));

    this.props.updateItem(item);
  }

  //function to unmount form component or in short close it
  handleCancel = () => this.setState({ openAddForm: false });

  render() {

    const { loading, errors } = this.props;

    return (
      <>
        {/* Heading */}
        <h1><i className="fas fa-list-alt"></i> e-Menu</h1>

        {/* Menu component starts */}
        <div className="menu" >

          <div className="heading menu-row">
            <div className="menu-item-name">Name</div>
            <div className="menu-item-price">Price</div>
            <div className="operations"> Operations</div>
          </div>

          {
            this.state.loading ? (
              <div className="menu-row">
                <div className="msg">Loading Items...</div>
              </div>
            ) : this.state.errors ? (
              <div className="menu-row">
                <div className="err msg">Error in loading Items</div>
              </div>
            ) : (
                  <>
                    {this.props.menuItems.length > 0 ? this.props.menuItems.map((item, i) => {
                      return <MenuItem key={item.name + "-" + item.price + "-" + item.id} id={item.id}
                        name={item.name} price={item.price}
                        handleDelete={this.handleDeleteItem}
                        handleUpdate={this.handleUpdateItem}
                        closeForm={this.handleCancel} />
                    }) : (
                        <div className="menu-row">
                          <div className="msg">List is empty.</div>
                        </div>
                      )}
                  </>
                )
          }

        </div>
        {/* Menu component ends */}

        {!this.state.openAddForm ? (
          <span onClick={this.handleAddClick} className="add btn"><i className="fas fa-plus"></i></span>
        ) : (
            <div className="menu"><Form addItem={this.handleAddItem} closeForm={this.handleCancel} /></div>
          )}
      </>
    )
  }
}

//subscribing to redux store updates
const mapStateToProps = ({ menuItems, loading, errors }) => ({
  menuItems, loading, errors
})

//connecting our main component to redux store
export default connect(mapStateToProps, { createItem, deleteItem, updateItem, readItems })(Menu);