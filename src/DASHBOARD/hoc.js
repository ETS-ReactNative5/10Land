import React,{Component} from 'react';

import axios from 'axios'
class hoc extends Component{

   
    


    async componentDidMount(){
      await  axios({
            'method':'GET',
            'url':'api/fetch',
            'headers': {
                'content-type':'application/octet-stream',
                'x-rapidapi-host':'example.com',
                'x-rapidapi-key': process.env.RAPIDAPI_KEY
             }
             ,
            'params': {
                'id':'12312321'
            },
        })

    }

    state = {
        showsidedraw: false,
        showsign: false,
        showRegister: false,
        showco: true,
        password: null,
        showcomponent: false ,
        buffer: "",
        shown: false,
        Landid: "",
       
        flag: false,
        Account:""
    };


    

render(){


return(
<React.Fragment>



</React.Fragment>


);

}


}

export default hoc;