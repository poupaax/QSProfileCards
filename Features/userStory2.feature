Feature: User views the detailed information of the member of the team (pedro, vítor and miriam)
As an user
I want to see the detailed information of the member of the team (pedro, vítor and miriam)
So that I see all the information about the member

Scenario Outline: View the information
Given exists members of the team
When the user click on member of the team
Then the application opens a new page with all information about the member

Scenario Outline: An <member> have <name>
Given that I'm in the detailed page
And some <member> of team have <name>
When the page is loaded
Then the application show <member> <name>

Example:
|member | name 				|
|miriam | Miriam Pereira	|
|vítor	| Vítor Dias 		|
|pedro 	| Pedro Jorge		|

Scenario Outline: An <member> don't have <name>
Given that I'm in the detailed page
And some <member> of team don't have <name>
When the page is loaded
Then the application show <default name>

Example:
|member | name           | default name		|
|miriam | Miriam Pereira | User 			|
|vítor	| Vítor Dias     | User 			|
|pedro 	| Pedro Jorge    | User 			|

Scenario Outline: An <member> have <photo>
Given that I'm in the detailed page
And some <member> of team have <photo>
When the page is loaded
Then the application show <member> <photo>

Example:
|member | photo			|
|miriam | miriam.jpg	|
|vítor	| vítor.jpg		|
|pedro 	| pedro.jpg		|

Scenario Outline: An <member> don't have <photo>
Given that I'm in the detailed page
And some <member> of team don't have <photo>
When the page is loaded
Then the application show a <default photo>

Example:
|member | photo      | default photo	|
|miriam | miriam.jpg | default.jpg		|
|vítor	| vítor.jpg  | default.jpg		|
|pedro 	| pedro.jpg  | default.jpg		|

Scenario Outline: An <member> have <short bio>
Given that I'm in the detailed page
And some <member> of team have <short bio>
When the page is loaded
Then the application show <member> <short bio>

Example:
|member | short bio                         				|
|miriam | 21 years. Master's student. Front end developer. 	|
|vítor	| 22 years. Master's student. Front end developer.  |
|pedro 	| 22 years. Master's student.						|

Scenario Outline: An member don't have <short bio>
Given that I'm in the detailed page
And some member of team don't have <short bio>
When the page is loaded
Then the application don't show member <short bio>

Example:
|member | short bio                         				|
|miriam | 21 years. Master's student. Front end developer. 	|
|vítor	| 22 years. Master's student. Front end developer.  |
|pedro 	| 22 years. Master's student.						|

Scenario Outline: An <member> have <facebook link>
Given that I'm in the detailed page
And some <member> of team have <facebook link>
When the page is loaded
Then the application show facebook icon with <member>'s <facebook link>

Example:
|member | facebook link           					|
|miriam | https://www.facebook.com/miriampereira95	|
|vítor	| https://www.facebook.com/vitor.dias.3954	|
|pedro 	| https://www.facebook.com/pedrombjorge		|

Scenario Outline: An <member> don't have <facebook link>
Given that I'm in the detailed page
And some <member> of team don't have <facebook link>
When the page is loaded
Then the application show the disabled facebook icon

Example:
|member | facebook link           					|
|miriam | https://www.facebook.com/miriampereira95	|
|vítor	| https://www.facebook.com/vitor.dias.3954	|
|pedro 	| https://www.facebook.com/pedrombjorge		|

Scenario Outline: An <member> have <linkedin link>
Given that I'm in the detailed page
And some <member> of team have <linkedin link>
When the page is loaded
Then the application show linkedin icon with <member>'s <linkedin link>

Example:
|member | linkedin link           							|
|miriam | https://www.linkedin.com/in/miriammpereira/		|
|vítor	| https://www.linkedin.com/in/vítor-dias-6aa9a310b/	|
|pedro 	| https://www.linkedin.com/in/pedrombjorge/			|

Scenario Outline: An <member> don't have <linkedin link>
Given that I'm in the detailed page
And some <member> of team don't have <linkedin link>
When the page is loaded
Then the application show the disabled linkedin icon

Example:
|member | linkedin link           							|
|miriam | https://www.linkedin.com/in/miriammpereira/		|
|vítor	| https://www.linkedin.com/in/vítor-dias-6aa9a310b/	|
|pedro 	| https://www.linkedin.com/in/pedrombjorge/			|

Scenario Outline: An <member> have <projects>
Given that I'm in the detailed page
And some <member> of team have <projects>
When the page is loaded
Then the application show the <member>'s <projects>.

Example:
|member | projects       							|
|miriam | Irrigation4U, UCook, SIGOC				|
|vítor	| Irrigation4U, UCook, Leilão de Artigos	|
|pedro 	| Irrigation4U, UCook, Leilão de Artigos	|

Scenario Outline: An <member> don't have <projects>
Given that I'm in the detailed page
And some <member> of team don't have <projects>
When the page is loaded
Then the application don't show the projects section

Example:
|member | projects       							|
|miriam | Irrigation4U, UCook, SIGOC				|
|vítor	| Irrigation4U, UCook, Leilão de Artigos	|
|pedro 	| Irrigation4U, UCook, Leilão de Artigos	|

Scenario Outline: An <member> have <certificates>
Given that I'm in the detailed page
And some <member> of team have <certificates>
When the page is loaded
Then the application show the <member>'s <certificates>

Example:
|member | certificates  			|
|miriam | CodeSchool, EggHead		|
|vítor	| CodeSchool, EggHead		|
|pedro 	| Marketing Digital, FPF	|

Scenario Outline: An <member> don't have <certificates>
Given that I'm in the detailed page
And some <member> of team don't have <certificates>
When the page is loaded
Then the application don't show the certificates section

Example:
|member | certificates  			|
|miriam | CodeSchool, EggHead		|
|vítor	| CodeSchool, EggHead		|
|pedro 	| Marketing Digital, FPF	|

Scenario Outline: An <member> have <languages>
Given that I'm in the detailed page
And some <member> of team have <languages>
When the page is loaded
Then the application show the <member>'s <languages>

Example:
|member | languages  							|
|miriam | Portuguese, English, Spanish			|
|vítor	| Portuguese, English, Spanish, French	|
|pedro 	| Portuguese, English, Spanish			|

Scenario Outline: An <member> don't have <languages>
Given that I'm in the detailed page
And some <member> of team don't have <languages>
When the page is loaded
Then the application don't show the languages section

Example:
|member | languages  							|
|miriam | Portuguese, English, Spanish			|
|vítor	| Portuguese, English, Spanish, French	|
|pedro 	| Portuguese, English, Spanish			|

Scenario Outline: An <member> have <tags>
Given that I'm in the detailed page
And some <member> of team have <tags>
When the page is loaded
Then the application show the <member>'s <tags>

Example:
|member | tags																									|
|miriam | #PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP									|
|vítor	| #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL	|
|pedro 	| #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS								|

Scenario Outline: An <member> don't have <tags>
Given that I'm in the detailed page
And some <member> of team don't have <tags>
When the page is loaded
Then the application don't show the tags section

Example:
|member | tags																									|
|miriam | #PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP									|
|vítor	| #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL	|
|pedro 	| #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS								|