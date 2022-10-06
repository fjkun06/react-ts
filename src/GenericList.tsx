import React from 'react'

//1. Create generic interfce and export so as to use in any other file
export interface GenericListProps<Type>{
  items: Type[];
  itemsRenderer: (item: Type) => JSX.Element; //this does the mapping and return ur divs
}

// interface Info<T>{
//   fname: T;
//   lname: T;
// }

class User<Type>{
  fname!: Type;
  lname!: Type;
  constructor(fname: Type,lname: Type){
this.fname = fname;
this.lname = lname;
  }

  fullName(){
    return this.fname + " " + this.lname;
  }
}

const users = [
  new User<string>("Frank","Lucas"),
  new User<string>("Mike","Tohson"),
  new User<string>("Zone","Yemeli"),
]

//2. create class which extends this one
 class GenericList<Type> extends React.Component<GenericListProps<Type>,{}>{

  render(){
    const {items, itemsRenderer } = this.props;

  return (
    <div>{items.map(itemsRenderer)}</div>
  )
}}

class UserList extends GenericList<typeof users[0]>{}

//3. Pass data and function to ur class in a function
export const GenericListt = () => {
  // console.log(typeof users[0])
  return (
  <UserList items={users} itemsRenderer={(item) => <div key={item.fname}>{item.fullName()}</div>}/>
  
  // <div>hello</div>
  )
}




