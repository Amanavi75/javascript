

//Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and 
//it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. 
//It also has the ability to cancel requests. 
import axios from 'axios';

axios.get('url')
.then((response) => {

	// Code for handling the response
})
.catch((error) => {

	// Code for handling the error
})



// Some lines have been removed here

function getGroups() {
    return axios.get(`${SERVER_URL}/api/account/groups`)
        .then(({ data }) => {
            return data.map((groupName: any) => { return { display: groupName, value: groupName }});
        });
}
