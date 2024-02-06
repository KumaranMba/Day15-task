// container
let container_div = document.createElement('div');                                     //creating a div 
container_div.setAttribute("class","container-fluid");                                 //set attribute for the class of bootstrap
document.body.appendChild(container_div);                                              // adding created element to body of html file

//row
let row_div = document.createElement('div');                                      // creating a div 
row_div.setAttribute('class',"row min-vw-100 min-vh-100 bg-light bg-gradient");   //set attribute for the class of bootstrap
container_div.appendChild(row_div);                                               // appending created element row to the container.

//col-3

let col_div = document.createElement('div');                                           // creating a div 
col_div.setAttribute('class','col-3 p-3');                                             //  set attribute for the class of bootstrap
row_div.appendChild(col_div);                                                          // appending created element row to the container.

//header
let header_div = document.createElement('div');                                       // creating a div for header  
col_div.appendChild(header_div);                                                      // appending the header to the col-3.

//header tag
let h1_tag = document.createElement('p');                                                //  create an element p
h1_tag.setAttribute('class','h1');                                                      //set attribute for the class of bootstrap
h1_tag.setAttribute('style',"font-size:3vw;");                                          //  setting the font size of h1 to be responsive according to screen viewport
h1_tag.textContent='Form Submission:';                                                  //  adding text to the h1 element
header_div.appendChild(h1_tag);                                                         //  appending h1 to header

// form tag

let form_tag = document.createElement('form');                                          // create an element for form
form_tag.setAttribute('id','Food');                                                     //  setting the id of the form to Food
form_tag.setAttribute('method','get');                                                  //  setting the method of the form to get
form_tag.setAttribute('name','FoodOrder');                                              //  giving the name attribute to the form
col_div.appendChild(form_tag);                                                          //  appending the form to the column div

//firstname

let firstname_div = document.createElement('div');                                      //  create a div for the first name
firstname_div.setAttribute('class','col');                                              //   giving the name attribute to the firstname
form_tag.appendChild(firstname_div);                                                    //   appending the firstname div to the form

//firstname label

let firstname_label = document.createElement('label');                                   //  create a label for the first name    
firstname_label.setAttribute('for','firstname');                                         //  setting attribute for the label firstname            
firstname_label.setAttribute('class',"form-label");                                      //  setting attribute for the class firstname
firstname_label.textContent="First Name:";                                               //  setting the label content
firstname_div.appendChild(firstname_label);                                              //  adding the label to the first name div
let break_tag = document.createElement('br');                                            //  create a <break> for new line
firstname_label.appendChild(break_tag);                                                  //  Appending the break to the firstname

// input box

let firstname_input = document.createElement('input');                                    // creating a input for the label
firstname_input.setAttribute('type','text');                                              // setting the attribute type of the element to 'text'
firstname_input.setAttribute('id','firstname');                                           // Assigning the id  for the input       
firstname_input.setAttribute('class','form-control');                                     // setting the attribute class to the input 
firstname_input.setAttribute('placeholder',"First Name");                                 // setting the attribute placeholder for  the input 
firstname_input.setAttribute('name',"First");                                             // setting the attribute name to get the value. 
firstname_input.setAttribute('value',"");                                                 // set the arrtibute value to asign the value name. 
firstname_input.setAttribute('required','');                                              // Making as a mandotary field as input              
firstname_div.appendChild(firstname_input);                                               // Appending the input to the firstname 
let firstname_break = document.createElement('br');                                       // creating the break tag for the input 
firstname_input.appendChild(firstname_break);                                             // Appending the break tag to the input 

//lastname
let lastname_div = document.createElement('div');                                          //  create a div for the last name
lastname_div.setAttribute('class','col');                                                  //  Assigning the name attribute to the firstname                           
form_tag.appendChild(lastname_div);                                                        //   Appending the firstname div to the form

//lastname label

let lastname_label = document.createElement('label');                                         //  create a label for the last name
lastname_label.setAttribute('for','lastname');                                                //  setting attribute for the label lastname
lastname_label.setAttribute('class',"form-label mt-2");                                       //  setting attribute for the class lastname
lastname_label.textContent="Last Name:";                                                      //  setting the label content
lastname_div.appendChild(lastname_label);                                                     // Appending the input to the lastname
let lastname_break = document.createElement('br');                                            // creating the break tag for the input 
lastname_label.appendChild(lastname_break);                                                   // Appending the break tag to the input

// input box

let lastname_input = document.createElement('input');                                          // creating a input for the label
lastname_input.setAttribute('type','text');                                                    // setting the attribute type of the element to 'text'
lastname_input.setAttribute('id','lastname');                                                  // Assigning the id  for the input
lastname_input.setAttribute('class','form-control');                                           // setting the attribute class to the input 
lastname_input.setAttribute('placeholder',"Last Name");                                        // setting the attribute placeholder for the input
lastname_input.setAttribute('name',"Last");                                                    // setting the attribute name to get the value.
lastname_input.setAttribute('value',"");                                                       // set the arrtibute value to asign the value name.
lastname_input.setAttribute('required','');                                                    // Making as a mandotary field as input
lastname_div.appendChild(lastname_input);                                                      // Appending the input to the firstname
lastname_input.appendChild(lastname_break);                                                    // Appending the break tag to the input

// address line1

let address_div = document.createElement('div');
address_div.setAttribute('class',"col");
form_tag.appendChild(address_div);

//address label

let address_line1 = document.createElement("label");
address_line1.setAttribute('for','addressline1');
address_line1.setAttribute('class',"form-label mt-2");
address_line1.textContent="Address Line1:";
address_div.appendChild(address_line1);
let address_break = document.createElement('br');
address_line1.appendChild(address_break);

// input box
let address_input = document.createElement('input');
address_input.setAttribute('type','text');
address_input.setAttribute('id','addressline1');
address_input.setAttribute('class','form-control');
address_input.setAttribute('placeholder',"Address");
address_input.setAttribute('name',"address1line");
address_input.setAttribute('value',"");
address_input.setAttribute('required','');
address_div.appendChild(address_input);
address_input.appendChild(address_break);


// address line2
let address_div2 = document.createElement('div');
address_div2.setAttribute('class',"col");
form_tag.appendChild(address_div2);

//address label

let address_line2 = document.createElement("label");
address_line2.setAttribute('for','addressline2');
address_line2.setAttribute('class',"form-label mt-2");
address_line2.textContent="Address Line2:";
address_div2.appendChild(address_line2);
let address_linebreak = document.createElement('br');
address_line2.appendChild(address_linebreak);

// input box
let address_input2 = document.createElement('input');
address_input2.setAttribute('type','text');
address_input2.setAttribute('id','addressline2');
address_input2.setAttribute('class','form-control');
address_input2.setAttribute('placeholder',"Address");
address_input2.setAttribute('name',"address2line");
address_input2.setAttribute('value',"");
address_input2.setAttribute('required','');
address_div2.appendChild(address_input2);
address_input2.appendChild(address_break);

//city div
let city_div = document.createElement('div');
city_div.setAttribute('class','col');
form_tag.appendChild(city_div);

//city label
let city = document.createElement("label");
city.setAttribute('for','city');
city.setAttribute('class',"form-label mt-2");
city.textContent="City:";
city_div.appendChild(city);
let city_linebreak = document.createElement('br');
city_div.appendChild(city_linebreak);

//city input
let city_input = document.createElement('input');
city_input.setAttribute('type','text');
city_input.setAttribute('id','city');
city_input.setAttribute('class','form-control');
city_input.setAttribute('placeholder',"city");
city_input.setAttribute('name',"city");
city_input.setAttribute('value',"");
city_input.setAttribute('required','');
city_div.appendChild(city_input);
city_input.appendChild(city_linebreak);


//pincode div
let pincode_div = document.createElement('div');
pincode_div.setAttribute('class','col');
form_tag.appendChild(pincode_div);

//pincode label

let pincode = document.createElement("label");
pincode.setAttribute('for','pincode');
pincode.setAttribute('class',"form-label mt-2");
pincode.textContent="Pincode:";
pincode_div.appendChild(pincode);
let pincode_linebreak = document.createElement('br');
pincode.appendChild(pincode_linebreak);

//pincode input
let pincode_input = document.createElement('input');
pincode_input.setAttribute('type','text');
pincode_input.setAttribute('minlength','6');
pincode_input.setAttribute('maxlength','6');
pincode_input.setAttribute('id','pincode');
pincode_input.setAttribute('class','form-control');
pincode_input.setAttribute('name','pincode');
pincode_input.setAttribute('placeholder',"pincode");
pincode_input.setAttribute('value',"");
pincode_input.setAttribute('required','');
pincode_div.appendChild(pincode_input);


//gender tag

let div_gender = document.createElement('div');
div_gender.setAttribute('class'," col mt-2");
form_tag.appendChild(div_gender);

// label for gender
let label = document.createElement('label');
label.textContent="Gender:";
div_gender.appendChild(label);

// radio button
let radio_button1 = document.createElement('input');
radio_button1.setAttribute('type','radio');
radio_button1.setAttribute('name','gender');
radio_button1.setAttribute('id','male');
radio_button1.setAttribute('value','male');
radio_button1.setAttribute('checked','');
radio_button1.setAttribute('class',"form-check-input m-1");
div_gender.appendChild(radio_button1);

// label for male

let male_label = document.createElement('label');
male_label.setAttribute("for","male");
male_label.textContent= "Male";
male_label.setAttribute("class",'form-check-label');
div_gender.appendChild(male_label);

// radio button
let radio_button2 = document.createElement('input');
radio_button2.setAttribute('type','radio');
radio_button2.setAttribute('name','gender');
radio_button2.setAttribute('id','female');
radio_button2.setAttribute('value','female');
radio_button2.setAttribute('checked','');
radio_button2.setAttribute('class',"form-check-input m-1");
div_gender.appendChild(radio_button2);

// label for female

let female_label = document.createElement('label');
female_label.setAttribute("for","female");
female_label.textContent= "Female";
female_label.setAttribute("class",'form-check-label');
div_gender.appendChild(female_label);

//ratio others
let other = document.createElement('input');
other.setAttribute('type','radio');
other.setAttribute('name','gender');
other.setAttribute('id','other');
other.setAttribute('value','other');
other.setAttribute('checked','');
other.setAttribute('class',"form-check-input m-1");
div_gender.appendChild(other);

// label for other

let other_label = document.createElement('label');
other_label.setAttribute("for","other");
other_label.textContent= "Other";
other_label.setAttribute("class",'form-check-label');
div_gender.appendChild(other_label);

//label checkbox
let div_checkbox = document.createElement('div');
div_checkbox.setAttribute("class","m-2");
div_checkbox.textContent="Choice of Food:"
form_tag.appendChild(div_checkbox);

//let list
let list = document.createElement('div');
list.setAttribute("class"," form-check d-flex flex-column flex-wrap align-items-start border rounded m-2");
div_checkbox.appendChild(list);

// let choice1-tag
let check_tag = document.createElement('div');
list.appendChild(check_tag);

//choice 1
let check_box1 = document.createElement('input');
check_box1.setAttribute('type','checkbox');
check_box1.setAttribute('id','choice1');
check_box1.setAttribute('class','form-check-input');
check_box1.setAttribute('value',"Margherita Pizza");
check_box1.setAttribute('name',"choice");
check_tag.appendChild(check_box1);

//label choice1
let choice1_label = document.createElement('label');
choice1_label.setAttribute('class','form-check-label');
choice1_label.setAttribute('for',"choice1");
choice1_label.textContent="Margherita Pizza";
check_tag.appendChild(choice1_label);

//let choice2-tag
let check_tag2 = document.createElement('div');
list.appendChild(check_tag2);

//choice 2
let check_box2 = document.createElement('input');
check_box2.setAttribute('type','checkbox');
check_box2.setAttribute('id','choice2');
check_box2.setAttribute('class','form-check-input');
check_box2.setAttribute('value',"Peppy Paneer Pizza");
check_box2.setAttribute('name',"choice");
check_tag2.appendChild(check_box2);

//label choice2
let choice2_label = document.createElement('label');
choice2_label.setAttribute('class','form-check-label');
choice2_label.setAttribute('for',"choice2");
choice2_label.textContent="Peppy Paneer Pizza";
check_tag2.appendChild(choice2_label);

//let choice3-tag
let check_tag3 = document.createElement('div');
list.appendChild(check_tag3);

//choice 3
let check_box3 = document.createElement('input');
check_box3.setAttribute('type','checkbox');
check_box3.setAttribute('id','choice3');
check_box3.setAttribute('class','form-check-input');
check_box3.setAttribute('value',"Indi Tandoori Paneer");
check_box3.setAttribute('name',"choice");
check_tag3.appendChild(check_box3);

//label choice3
let choice3_label = document.createElement('label');
choice3_label.setAttribute('class','form-check-label');
choice3_label.setAttribute('for',"choice3");
choice3_label.textContent="Indi Tandoori Paneer";
check_tag3.appendChild(choice3_label);

//let choice4-tag
let check_tag4 = document.createElement('div');
list.appendChild(check_tag4);

//choice 4
let check_box4 = document.createElement('input');
check_box4.setAttribute('type','checkbox');
check_box4.setAttribute('id','choice4');
check_box4.setAttribute('class','form-check-input');
check_box4.setAttribute('value',"veggie paradise Pizza");
check_box4.setAttribute('name',"choice");
check_tag4.appendChild(check_box4);

//label choice4
let choice4_label = document.createElement('label');
choice4_label.setAttribute('class','form-check-label');
choice4_label.setAttribute('for',"choice4");
choice4_label.textContent="veggie paradise Pizza";
check_tag4.appendChild(choice4_label);

//let choice5-tag
let check_tag5 = document.createElement('div');
list.appendChild(check_tag5);

//choice 5
let check_box5 = document.createElement('input');
check_box5.setAttribute('type','checkbox');
check_box5.setAttribute('id','choice5');
check_box5.setAttribute('class','form-check-input');
check_box5.setAttribute('value',"Golden Corn");
check_box5.setAttribute('name',"choice");
check_tag5.appendChild(check_box5);

//label choice5
let choice5_label = document.createElement('label');
choice5_label.setAttribute('class','form-check-label');
choice5_label.setAttribute('for',"choice5");
choice5_label.textContent="Golden Corn";
check_tag5.appendChild(choice5_label);

//select state

let state_div =document.createElement('div');
state_div.setAttribute('class','mb-3');
form_tag.appendChild(state_div);

// select label
let state_label = document.createElement('label');
state_label.setAttribute('for','inputState');
state_label.setAttribute('class',"form-label");
state_label.textContent='State:';
state_div.appendChild(state_label);


//select
let  select_tag=document.createElement('select');
select_tag.setAttribute('class','form-select');
select_tag.setAttribute('id','inputState')
select_tag.setAttribute('name','state');
state_div.appendChild(select_tag);

// created a state for each us states, and append it to the select tag.
let states =["---select---",'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal pradesh','jharkhand','karnataka',
'kerala','Madhya pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','punjab','Rajasthan','sikkim','Tamil Nadu','Telangana','Tripura','UttaraKhand','Uttar Pradesh','West Bengal'];

states.forEach((state)=>{                                     // iteration                         
    let option =document.createElement('option');             // create a option to create a element
    option.textContent = state;                               // Assigning the content to the element
    option.value = state;                                     //  set value attribute of option same as textcontent
    select_tag.appendChild(option);                           //  Appending the option to the select element
});

//country div
let country_div =document.createElement('div');
country_div.setAttribute('class','mb-3');
form_tag.appendChild(country_div);

// select label
let country_label = document.createElement('label');
country_label.setAttribute('for','country');
country_label.setAttribute('class',"form-label");
country_label.textContent='Country:';
country_div.appendChild(country_label);


//select country
let country_tag=document.createElement('select');
country_tag.setAttribute('class','form-select');
country_tag.setAttribute('id','country');
country_tag.setAttribute('name','country');
country_tag.setAttribute('required','');
country_div.appendChild(country_tag);

// A list of array  that contain all countries.
let Countries =["---Select---",'Afghanistan','Albania','Algeria','Andorra','Angola','United States','Oman','Zimbabwe','Japan','Portugal','Lithuania','Argentina',
'Belgium','Australia','Costa Rica','Belize','Canada','Iceland','Bolivia','cuba','The Bahamas','kenya','Denmark','Qatar','Yemen','vanuatu','Ireland','China','Italy','India','Russia',
'Mexico','Germany','Luxembourg','Israel','Croatia','Jamaica','Estonia','Cameroon','Hungary','United Kingdom','Andorra','Finland','Rwanda','Timor-Leste','Afghanistan','France','Chile',
'Algeria','Brazile','Greece','Iraq','Malaysia','colombia','Botswana','Ecuador'];

    Countries.forEach(country=>{                                   //  loop through the list of countries
       let option=document.createElement('option');                //  create a option to create a element
        option.textContent= country;                               //  Assigning the content to the element     
        option.value = country;                                    //  set value attribute of option same as textcontent
        country_tag.appendChild(option);                           //  Appending the option to the select element
    });


// submit div

let submit_div = document.createElement('div');
submit_div.setAttribute('class','d-flex justify-content-center');
form_tag.appendChild(submit_div);

// button
let button_tag = document.createElement('button');
button_tag.setAttribute('type','submit');
button_tag.setAttribute('class','btn btn-outline-primary');
button_tag.setAttribute('value','Register');
button_tag.textContent="Submit";
submit_div.appendChild(button_tag);

//col-9 div

let col_tableDiv = document.createElement('div');
col_tableDiv.setAttribute('class','col-9 p-3');
row_div.appendChild(col_tableDiv);

//header
let header_tableDiv = document.createElement('div');
col_tableDiv.appendChild(header_tableDiv);

//header tag
let h1_table = document.createElement('p');
h1_table.setAttribute('class','h1');
h1_table.setAttribute('style',"font-size:3vw;");
h1_table.textContent='Table';
header_tableDiv.appendChild(h1_table);

// table div

let table_div = document.createElement('div');
table_div.setAttribute('id', 'userFormTable');
col_tableDiv.appendChild(table_div);

// table
let table =  document.createElement('table');
table.setAttribute('class',' table grid text-center');
table.setAttribute('id','table');
col_tableDiv.appendChild(table);

//table  
let thead = document.createElement('thead');
table.appendChild(thead);

//table row for header
let tr_head =document.createElement('tr') ;
thead.appendChild(tr_head);

// create a list of array  to store column name and its attribute.
let th_name =["First name","Last name","Address","City","Pincode","Gender","Food","State","Country"];

    th_name.forEach( name=>{                                    //Iteration
        let th=document.createElement('th');                    // create the header tag
        th.setAttribute('class','table-dark');                  // Attribute the  class to the element
        th.textContent = name;                                  // Assigning the content to the header  
        tr_head.appendChild(th);                                // Append the header to the table row.
    });

// table to body

let tbody = document.createElement('tbody');                     //  Create the table body tag .
tbody.setAttribute('id','tablebody');                            //  Attributeing the id to the element
table.appendChild(tbody);                                        //  append the tabebody to the table

let formEl = document.forms.FoodOrder;                           // Accessing the form elements in the document

formEl.addEventListener('submit',(event)=>{                       //  Adding an event listener to the submit button
        event.preventDefault();                                   //  preventing the default action of the form
        const firstname = formEl.elements.First.value;            //  getting value from the form element firstname
        const lastname  = formEl.elements.Last.value;             //  getting value from the form element lastname 
        const address1line = formEl.elements.address1line.value;   //  getting value from the form element address1line
        const address2line = formEl.elements.address2line.value;   //  getting value from the form element address2line
        const city = formEl.elements.city.value;                   //  getting value from the form element city
        const pincode = formEl.elements.pincode.value;             //  getting value from the form element pincode
        const gender = formEl.elements.gender.value;               //  getting value from the form element gender
        const  state = formEl.elements.state.value;                //  getting value from the form element state
        const country = formEl.elements.country.value;             //  getting value from the form element country
        const choiceEl = formEl.elements.choice;                   //  getting value from the form element choice
        
        // createing a table row and table data to assign content
        let tr = document.createElement('tr');
        let td1 = tr.appendChild(document.createElement('td'));
        let td2 = tr.appendChild(document.createElement('td'));
        let td3 = tr.appendChild(document.createElement('td'));
        let td4 = tr.appendChild(document.createElement('td'));
        let td5 = tr.appendChild(document.createElement('td'));
        let td6 = tr.appendChild(document.createElement('td'));
        let td7 = tr.appendChild(document.createElement('td'));
        let td8 = tr.appendChild(document.createElement('td'));
        let td9 = tr.appendChild(document.createElement('td'));

        td1.textContent = firstname;                                // Assigning the first name value to the tabledata1
        td2.textContent = lastname;                                 // Assigning the last name value to the tabledata2
        td3.textContent = address1line  + address2line;             // Assigning the address value to the tabledata3
        td4.textContent = city;                                     // Assigning the city value to the tabledata4
        td5.textContent = pincode;                                  // Assigning the pincode value to the tabledata5 
        td6.textContent = gender;                                   // Assigning the gender value to the tabledata6
        td8.textContent = state;                                    // Assigning the state value to the tabledata8
        td9.textContent = country;                                  // Assigning the country value to the tabledata9

        const  foodChoice = [...choiceEl];                          //  convert node list into array for manipulation
        let selectedCount = 0;                                      //  variable for counting how many times user select an item
        let fooditems =[];                                          //  A variable is declared  for storing the array of objects
        for(let i=0; i<foodChoice.length ; i++){                    //  iteration 
            if(foodChoice[i].checked == true){                      //  check which food is selected by user
                selectedCount++;                                    //  increment the count of selected items
                fooditems.push(foodChoice[i].value);                //  push the value of checked item into array
            }
       };
        if (selectedCount >= 2) {                                                  //  checking  whether two or more items are selected or not
            fooditems.forEach((item)=>{                                            //  adding each item in array to the table
                let unorderlist = document.createElement('ul');                    //  create an unordered list element
                td7.appendChild(unorderlist);                                      //  unorderlist items are append to the tabledata7 
                let list = unorderlist.appendChild(document.createElement('li'));  //  creating a list item and appending to the unorderlist
                list.innerHTML += item;                                            //  Assigning  values to each TD from array
                document.getElementById('tablebody').appendChild(tr);              //  Appending table row to the table body
            });
        }
        else{
            alert('Please select Choice of Food at least 2 options.');              //   show an error message when less than two choices are selected
        }

         document.getElementById("Food").reset();                                   //  resetting the form after submission

});


