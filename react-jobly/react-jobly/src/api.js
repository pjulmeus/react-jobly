import React from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
}

static async getCompanySearch(name) {
  let res = await this.request(`companies/?name=${name}`); 
  return res;
}
static async registerUsers(data) {
  console.log(data);
  let res = await this.request(`auth/register`, data, "post"); 
  console.log("register");
  console.log("res", res)
  this.token = res
  console.log("token", this.token);
  return res;
}

static async authenticateUsers(data) {
  console.log(data);
   let res = await this.request(`auth/token`, {...data}, "post"); 
  return res
  // const lowerUsername = data.username.toLowerCase();
  // console.log("lowercase" , lowerUsername);
  // let res2 = await axios.get(`${BASE_URL}/users/${lowerUsername}`).then(res2=> console.log("res2", res2))


}

static async getUsers(username) {
  const lowerUsername = username.toLowerCase();
  let res = await this.request(`users/${lowerUsername}`)
  return res.user;
}

static async getUsers(usernam, id) {
  const lowerUsername = username.toLowerCase();
  let res = await this.request(`users/${lowerUsername}/jobs/${id}`)
  return res.user;
}

static async deleteUsers(username) {
  const lowerUsername = username.toLowerCase();
  let res = await this.request(`users/${lowerUsername}`, {}, "delete")
  return res.user;
}

static async patchUsers(data) {
  console.log(data);
  console.log(data.username);
  console.log(data.firstName);
  const lowerUsername = data.username.toLowerCase();
  let res = await this.request(`users/${lowerUsername}`, {firstName : data.first_name,
  lastName: data.lastName, email : data.email}, "patch")
 console.log("new res" , res.user);
  return res.user;
}

}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi