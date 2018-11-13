var StudentAll = React.createClass({   
  
  getInitialState: function () {  
    return { name: '' ,address: '',email:'',contact:'',id:'',Buttontxt:'Save', data1: []};  
  },  
   handleChange: function(e) {  
        this.setState({[e.target.name]: e.target.value});  
    },  
  
  componentDidMount() {  
   
    $.ajax({  
       url: "api/getdata",  
       type: "GET",  
       dataType: 'json',  
       ContentType: 'application/json',  
       success: function(data) {           
         this.setState({data1: data});   
           
       }.bind(this),  
       error: function(jqXHR) {  
         console.log(jqXHR);  
             
       }.bind(this)  
    });  
  },  
    
DeleteData(id){  
  var studentDelete = {  
        'id': id  
           };        
    $.ajax({  
      url: "/api/Removedata/",  
      dataType: 'json',  
      type: 'POST',  
      data: studentDelete,  
      success: function(data) {  
        alert(data.data);  
         this.componentDidMount();  
  
      }.bind(this),  
      error: function(xhr, status, err) {  
         alert(err);   
             
            
      }.bind(this),  
      });  
    },  
   
  
  
    EditData(item){           
   this.setState({name: item.name,address:item.address,contact:item.contact,email:item.email,id:item._id,Buttontxt:'Update'});  
     },  
  
   handleClick: function() {  
   
   var Url="";  
   if(this.state.Buttontxt=="Save"){  
      Url="/api/savedata";  
       }  
      else{  
      Url="/api/Updatedata";  
      }  
      var studentdata = {  
        'name': this.state.name,  
        'address':this.state.address,  
        'email':this.state.email,  
        'contact':this.state.contact,  
        'id':this.state.id,  
          
    }  
    $.ajax({  
      url: Url,  
      dataType: 'json',  
      type: 'POST',  
      data: studentdata,  
      success: function(data) {         
          alert(data.data);         
          this.setState(this.getInitialState());  
          this.componentDidMount();  
           
      }.bind(this),  
      error: function(xhr, status, err) {  
         alert(err);       
      }.bind(this)  
    });  
  },  
  
  render: function() {  
    return (   
      <div  className="container" >  
       <p style={{fontSize:'25px'}}><b> MEAN CRUD</b></p>  
  <form>  
    <div className="col-sm-12 col-md-12">   
  <table className="table-bordered">  
     <tbody>  
    <tr>  
      <td><b>Name</b></td>  
      <td>  
         <input className="form-control" type="text" value={this.state.name}    name="name" onChange={ this.handleChange } />  
          <input type="hidden" value={this.state.id}    name="id"  />  
      </td>  
    </tr>  
  
  
    <tr>  
      <td><b>Email</b></td>  
      <td>  
        <input type="text"  className="form-control" value={this.state.email}  name="email" onChange={ this.handleChange } />  
      </td>  
    </tr>  
  
    <tr>  
      <td></td>  
      <td>  
        <input className="btn btn-primary" type="button" value={this.state.Buttontxt} onClick={this.handleClick} />  
      </td>  
    </tr>  
  
 </tbody>  
    </table>  
</div>  
   
  
<div className="col-sm-12 col-md-12 "  style={{marginTop:'50px',marginLeft:'300px'}} >  
   
     </div>  
</form>          
      </div>  
    );  
  }  
});  
  
ReactDOM.render(<StudentAll  />, document.getElementById('root'))  