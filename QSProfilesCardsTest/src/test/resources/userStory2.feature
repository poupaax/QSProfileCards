Feature: User views the detailed information of the member of the team (pedro, vítor and miriam)
As an user
I want to see the detailed information of the member of the team (pedro, vítor and miriam)
So that I see all the information about the member

Scenario Outline: View the information
Given exists "<members>"
When the user click on "<members>" of the team
Then the application opens a new page with all information and "<name>" about the "<members>"

  Examples:
    |members        | name			    |
    |Miriam Pereira | Miriam Pereira	|
    |Vítor Dias	    | Vítor Dias		|
    |Pedro Jorge 	| Pedro Jorge		|

Scenario Outline: An member have name
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show "<members>" name "<name>"

  Examples:
    |members        | name			            |
    |Miriam Pereira | Miriam de Mesquita Pereira|
    |Vítor Dias	    | Vítor Fernandes Dias		|
    |Pedro Jorge 	| Pedro Miguel Brito Jorge	|

Scenario Outline: An member don't have name
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show "<members>" default name "<default name>"

Examples:
|members         | default name	|
|Miriam Pereira  | User 		|
|Vítor Dias      | User 		|
|Pedro Jorge  	 | User 		|

Scenario Outline: An member have photo
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show "<members>" photos "<photo>"

Examples:
|members         | photo		|
|Miriam Pereira  | miriam.jpg	|
|Vítor Dias	     | vítor.jpg	|
|Pedro Jorge 	 | pedro.jpg	|

Scenario Outline: An member don't have photo
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show a "<members>" with default photo "<default photo>"

Examples:
|members        | default photo	|
|Miriam Pereira | default.jpg	|
|Vítor Dias	    | default.jpg	|
|Pedro Jorge 	| default.jpg	|

Scenario Outline: An member have short bio
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show members "<members>" short bio "<short bio>"

Examples:
|members        | short bio                         				  |
|Miriam Pereira | 21 years old. Master's student. Front End Developer.|
|Vítor Dias	    | 22 years old. Master's student. Front End Developer.|
|Pedro Jorge 	| 23 years old. Master's student.					  |

Scenario Outline: An member don't have short bio
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show "<members>" short bio message "<msg>"

Examples:
|members        | msg                         	  |
|Miriam Pereira | The user don't have information.|
|Vítor Dias	    | The user don't have information.|
|Pedro Jorge 	| The user don't have information.|

Scenario Outline: An member have facebook link
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show facebook icon with "<members>" facebook link "<facebook link>"

Examples:
|members        | facebook link           					|
|Miriam Pereira | https://www.facebook.com/miriampereira95	|
|Vítor Dias	    | https://www.facebook.com/vitor.dias.3954	|
|Pedro Jorge 	| https://www.facebook.com/pedrombjorge		|

Scenario Outline: An member don't have facebook link
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show the "<members>" facebook default "<face link>"

Examples:
|members        | face link           	|
|Miriam Pereira | https://www.facebook.com/	|
|Vítor Dias	    | https://www.facebook.com/	|
|Pedro Jorge 	| https://www.facebook.com/	|

Scenario Outline: An member have linkedin link
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show linkedin icon with "<members>" linkedin link "<linkedin link>"

Examples:
|members        | linkedin link           							|
|Miriam Pereira | https://www.linkedin.com/in/miriammpereira/		|
|Vítor Dias	    | https://www.linkedin.com/in/vitor-dias-6aa9a310b/	|
|Pedro Jorge 	| https://www.linkedin.com/in/pedrombjorge/			|

Scenario Outline: An member don't have linkedin link
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show the "<members>" linkedin default "<linkedin link>"

Examples:
|members        | linkedin link           	|
|Miriam Pereira | https://www.linkedin.com/	|
|Vítor Dias	    | https://www.linkedin.com/	|
|Pedro Jorge 	| https://www.linkedin.com/ |

Scenario Outline: An member have projects
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show the "<members>" projects "<projects>"

Examples:
|members        | projects       				        |
|Miriam Pereira | Irrigation4U			                |
|Vítor Dias	    | Online Auctions Website, Irrigation4U |
|Pedro Jorge 	| Online Auctions Website, Irrigation4U	|

Scenario Outline: An member don't have projects
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show the "<members>" projects default "<msg projects>"

Examples:
|members        | msg projects       			    |
|Miriam Pereira | The user don't have information.  |
|Vítor Dias	    | The user don't have information.	|
|Pedro Jorge 	| The user don't have information.	|

Scenario Outline: An member have tags
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show the "<members>" tags "<tags>"

Examples:
|members        | tags																									|
|Miriam Pereira | #PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP									|
|Vítor Dias	    | #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL	|
|Pedro Jorge 	| #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS								|

Scenario Outline: An member don't have tags
Given that I'm in the detailed page of "<members>"
And exists "<members>" on detailed page
When the detailed page is loaded
Then the application show the "<members>" tags default "<msg tags>"

Examples:
|members        | msg tags       			|
|Miriam Pereira | The user don't have tags. |
|Vítor Dias	    | The user don't have tags.	|
|Pedro Jorge 	| The user don't have tags.	|