# VeRy.js
VeRy.Js 1KB Javascript Library, Similar like jQuery. The javascript library inspired from Vanila.js, So you can easily use it for vanila js.


Here Are Few functions Which You Can Use For Your Javascript Program

first select element by selector:

///////////////////////////////////////////

v / VeRy can use

ex:
v("Element id / type / class"); Or VeRy("Element id / type / class");

//////////////////////////////////////////

Show() Method In VeRy :

v("element").show();

///////////////////////////////////////

Hide() Method In VeRy :

v("element").hide();

////////////////////////////////////////

You can make ajax call in VeRy using ajaxCall() Method In VeRy :

v("element").ajaxCall(method, url, data, bool, callback);

method  =  form POST / GET method
url = your server side script path
data = your form data
bool = keep it true
callback =  can use to get response from server 

ex:
function(response)
{
  alert(response);
}

Full Code:

v("element").ajaxCall(method, url, data, bool, function(response)
{
  console.log(response);
}

///////////////////////////////////////////////////

append method In VeRy:

append(element, element_id, element_data, parent_element);

element = An html tag which you want to append to html doc
element_id = Give an Id for that html tag/element
element_data = Element data, which you want to show in your html tag
parent_element = Element Id Where you want to show the data it's optional field

ex:
<div class="test"></div>
v.('.test').append('<span>', 'test_child', '<b>Here is the data</b>');

//////////////////////////////////////////////////////////

VeRy Event :

to fire an event/ trigger event use event() method 

event(eventType, eventHandler);

eventType = event type / here you need to give an event type for this such as "click, change, mouseover, mouseout, etc."

eventHandler = event handler use to run a code which you want to run on perticular event


v('element').event("click",function(){
     alert("Hello! Clicked");
});
////////////////////////////////////////////////////////////

parent() method, it can be use to get a parent node/element of an element

ex: 
v('element').parent();


//////////////////////////////

child() method, it can be use to get a child node/element of an element

ex:
v('element').child();

///////////////////////////////////////

attr() method, it can be use to get an attribute of element

ex:
v('element').attr('id');

//////////////////////////////////////////////

addAttr() method, it can be use to add an attribute to a specific element.

ex:
v('element').addAttr('id','value');

////////////////////////////////////////////


removeAttr() method, it can be use to remove an attribute from a specific element.

ex:
v('element').removeAttr('id');

//////////////////////////////////////////////////

css() method can be user to add style to an element

ex:
v('element').css('display:block; color:#333; background:#ccc;');


These are usefull method of this javascript library you can do easily everything by this version of VeRy.js

VeRy.js can fill your all basic requirement, of javascript library. It's a small and powerfull solution to boost up you code using vanila.js and core javascript

For More Information And Best Practice : http://veryjs.org/
