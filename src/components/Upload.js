import React from 'react';
import FileUpload from './FileUpload';
import Submit from './Submit';


class Upload extends React.Component {
    state={
        errorDoc : '',
        errorImg :''
    }
    handleOnChangeDoc=(e)=> {
        const res=this.checkMimeTypeDoc(e);
        if(!res){
        this.props.handleOnChangeDoc(e);
        }
        else{
               this.setState(()=> ({errorDoc: res}))
        }

    }
    handleOnChangeImg=(e)=> {
        const res=this.checkMimeTypeImg(e);
        if(!res){
        this.props.handleOnChangeImg(e);
        }
        else{
               this.setState(()=> ({errorImg: res}))
        }

    }

    checkMimeTypeImg=(event)=>{
        //getting file object
        let files = event.target.files 
        //define message container
        let err = ''
        // list allow mime type
       const types = ['image/png', 'image/jpeg', 'image/gif']
        // loop access array
        for(var x = 0; x<files.length; x++) {
         // compare file type find doesn't matach
      
             if (types.every(type => files[x].type !== type)) {
             // create error message and assign to container   
             err += files[x].type+' is not a supported format\n';
           }
         };
      
       if (err !== '') { // if message not same old that mean has error 
            event.target.value = null // discard selected file
            console.log(err)
             return err; 
        }
       return false;
      
      }
      
      checkMimeTypeDoc=(event)=>{
        //getting file object
        let files = event.target.files 
        //define message container
        let err = ''
        // list allow mime type
       const types = ['application/pdf']
        // loop access array
        for(var x = 0; x<files.length; x++) {
         // compare file type find doesn't matach
         
             if (types.every(type => files[x].type !== type)) {
             // create error message and assign to container   
             err += files[x].type+' is not a supported format\n';
           }
         };
      
       if (err !== '') { // if message not same old that mean has error 
            event.target.value = null // discard selected file
            console.log(err)
             return err; 
        }
       return false;
      
      }

    

    render() {
        return (

            <div>
                <form action="post" onSubmit={this.props.handleOnSubmit} encType="multipart/form-data">
                    
                    {(this.state.errorDoc!=='') && <p>{this.state.errorDoc}</p>}
                    {(this.state.errorImg!=='') && <p>{this.state.errorImg}</p>}
                    <FileUpload typeName="doc" onChange={this.handleOnChangeDoc} />
                    <FileUpload typeName="img" onChange={this.handleOnChangeImg} />
                    <Submit submit="upload" />
                </form>
            </div>
        )
    }
}

export default Upload;