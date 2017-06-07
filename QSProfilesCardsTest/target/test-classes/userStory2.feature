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
And some <member> of team don't have name
When the detailed page is loaded
Then the application show <default name>

Examples:
|members | default name	|
|miriam | User 			|
|vítor	| User 			|
|pedro 	| User 			|

Scenario Outline: An member have photo
Given that I'm in the detailed page of "<members>"
And some <member> of team have <photo>
When the detailed page is loaded
Then the application show <member>'s <photo>

Examples:
|members | photo			|
|miriam | miriam.jpg	|
|vítor	| vítor.jpg		|
|pedro 	| pedro.jpg		|

Scenario Outline: An member don't have photo
Given that I'm in the detailed page of "<members>"
And some <member> of team don't have photo
When the detailed page is loaded
Then the application show a <default photo>

Examples:
|members | default photo	|
|miriam | default.jpg	|
|vítor	| default.jpg	|
|pedro 	| default.jpg	|

Scenario Outline: An member have short bio
Given that I'm in the detailed page of "<members>"
And some <member> of team have <short bio>
When the detailed page is loaded
Then the application show <member> <short bio>

Examples:
|members | short bio                         				|
|miriam | 21 years. Master's student. Front end developer. 	|
|vítor	| 22 years. Master's student. Front end developer.  |
|pedro 	| 22 years. Master's student.						|

Scenario: An member don't have short bio
Given that I'm in the detailed page of "<members>"
And some member of team don't have short bio
When the detailed page is loaded
Then the application don't show member's short bio

Scenario Outline: An member have facebook link
Given that I'm in the detailed page of "<members>"
And some <member> of team have <facebook link>
When the detailed page is loaded
Then the application show facebook icon with <member>'s <facebook link>

Examples:
|members | facebook link           					|
|miriam | https://www.facebook.com/miriampereira95	|
|vítor	| https://www.facebook.com/vitor.dias.3954	|
|pedro 	| https://www.facebook.com/pedrombjorge		|

Scenario: An member don't have facebook link
Given that I'm in the detailed page of "<members>"
And some member of team don't have facebook link
When the detailed page is loaded
Then the application show the disabled facebook icon

Scenario Outline: An member have linkedin link
Given that I'm in the detailed page of "<members>"
And some <member> of team have <linkedin link>
When the detailed page is loaded
Then the application show linkedin icon with <member>'s <linkedin link>

Examples:
|members | linkedin link           							|
|miriam | https://www.linkedin.com/in/miriammpereira/		|
|vítor	| https://www.linkedin.com/in/vítor-dias-6aa9a310b/	|
|pedro 	| https://www.linkedin.com/in/pedrombjorge/			|

Scenario: An member don't have linkedin link
Given that I'm in the detailed page of "<members>"
And some member of team don't have linkedin link
When the detailed page is loaded
Then the application show the disabled linkedin icon

Scenario Outline: An member have projects
Given that I'm in the detailed page of "<members>"
And some <member> of team have <projects>
When the detailed page is loaded
Then the application show the <member>'s <projects>.

Examples:
|members | projects       							|
|miriam | Irrigation4U, UCook, SIGOC				|
|vítor	| Irrigation4U, UCook, Leilão de Artigos	|
|pedro 	| Irrigation4U, UCook, Leilão de Artigos	|

Scenario: An member don't have projects
Given that I'm in the detailed page of "<members>"
And some member of team don't have projects
When the detailed page is loaded
Then the application don't show the projects section

Scenario Outline: An member have certificates
Given that I'm in the detailed page of "<members>"
And some <member> of team have <certificates>
When the detailed page is loaded
Then the application show the <member>'s <certificates>

Examples:
|members | certificates  			|
|miriam | CodeSchool, EggHead		|
|vítor	| CodeSchool, EggHead		|
|pedro 	| Marketing Digital, FPF	|

Scenario: An member don't have certificates
Given that I'm in the detailed page of "<members>"
And some member of team don't have certificates
When the detailed page is loaded
Then the application don't show the certificates section

Scenario Outline: An member have languages
Given that I'm in the detailed page of "<members>"
And some <member> of team have <languages>
When the detailed page is loaded
Then the application show the <member>'s <languages>

Examples:
|members | languages  							|
|miriam | Portuguese, English, Spanish			|
|vítor	| Portuguese, English, Spanish, French	|
|pedro 	| Portuguese, English, Spanish			|

Scenario: An member don't have languages
Given that I'm in the detailed page of "<members>"
And some member of team don't have languages
When the detailed page is loaded
Then the application don't show the languages section

Scenario Outline: An member have tags
Given that I'm in the detailed page of "<members>"
And some <member> of team have <tags>
When the detailed page is loaded
Then the application show the <member>'s <tags>

Examples:
|members | tags																									|
|miriam | #PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP									|
|vítor	| #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL	|
|pedro 	| #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS								|

Scenario: An member don't have tags
Given that I'm in the detailed page of "<members>"
And some member of team don't have tags
When the detailed page is loaded
Then the application don't show the tags section