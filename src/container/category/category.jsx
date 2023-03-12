import React, { Component, Fragment } from "react";
import Category from "../../component/category/category";
import Sidebar from "../../component/layouts/sidebar";

class category extends Component {
    state = {
        categories: []
    }

    getDataApi = function() {
        fetch('https://localhost/Payana/public/api/category')
        .then(response => response.json())
        // .then(json => console.log(json.data))
        .then(json => {
            this.setState({
                categories: json.data
            })
        })
    }
    
    handleRemove = (data) => {
        // console.log(data);
        fetch(`https://localhost/Payana/public/api/category/destroy/${data}`, { method: 'DELETE' })
        .then(response => response.json())
        .then((res) => {
            console.log(res);
            alert(res.message);
            this.getDataApi();
        });
    }

    componentDidMount(){
        this.getDataApi()
    }
    
    render() {
        return (
            <Fragment>
                <p className="m-5 text-xl text-emerald-800">Category</p>
                <hr />
                <div className="flex justify-content-center">
                    {
                        this.state.categories.map(categories => {
                            return <Category 
                            key={categories.id} 
                            data={categories} 
                            remove={this.handleRemove}
                            // image={"https://localhost/Payana/public/"+categories.image}
                            />
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default category;