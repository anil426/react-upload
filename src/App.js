import React from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './components/Upload';
import axios from 'axios';



 class App extends React.Component{
  state={
    'doc': undefined,
    'image': undefined
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    console.log('this method called')
    //const doc = e.target.elements.doc.value;
    //console.log(doc);
    this.fileUpload()/* .then((response)=>{
      console.log(response.data); 
    })*/


  }

  handleOnChangeDoc=(e)=> {
    const doc = e.target.files[0];
    console.log(doc);
    this.setState(()=>({doc}))
}

handleOnChangeImg=(e)=> {
    const image = e.target.files[0];
    console.log(image);
    this.setState(()=>({image}))

}



fileUpload=()=>{
  console.log("file upload method called");
  const data = new FormData();
  data.append('doc',this.state.doc);
  data.append('img',this.state.image);
  console.log(data.getAll('doc'))

  axios.post('http://localhost/ReactJsPhpUpload/ReactAjaxReq.php',data)
  .then(res=>{
    console.log(res)
  })
}

  render(){
    return(

   <Upload  handleOnSubmit={this.handleOnSubmit} 
            handleOnChangeDoc={this.handleOnChangeDoc} 
            handleOnChangeImg={this.handleOnChangeImg}/>    
     

    )
  }
 }
export default App;