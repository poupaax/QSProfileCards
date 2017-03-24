Feature: User views the main informations about all members of the team (pedro, vítor and miriam)
As a user 
I want to see a list of the team members (pedro, vítor and miriam)
So that I can know the team better and see the main information

Scenario Outline: View the team members (pedro, vítor and miriam)
Given that I'm in the main page
When the page is loaded and exists members
Then the application shows a list of team members (pedro, vítor and miriam) with your main informations (photo, short bio, facebook/linkedin links)

Scenario Outline: Don't exists members
Given that I'm in the main page
And don't exists members
When the page is loaded
Then the application shows a default message: "Don't exists members."

Scenario Outline: An <member> exist
Given that I'm in the main page
And an <member> exist
When the page is loaded
Then that <member> appear with your available main information

Example:
|member |
|miriam |
|vítor	|
|pedro 	|

Scenario Outline: An <member> not exist
Given that I'm in the main page
And an <member> not exist
When the page is loaded
Then that <member> not appear

Example:
|member |
|miriam |
|vítor	|
|pedro 	|

Scenario Outline: An <member> have <name>
Given that I'm in the main page
And some <member> of team have <name>
When the page is loaded
Then the application show <member> <name>

Example:
|member | name			|
|miriam | Miriam Pereira	|
|vítor	| Vítor Dias		|
|pedro 	| Pedro Jorge		|

Scenario Outline: An <member> don't have <name>
Given that I'm in the main page
And some <member> of team don't have <name>
When the page is loaded
Then the application show <default name>

Example:
|member | name           | default name	|
|miriam | Miriam Pereira | User		|
|vítor	| Vítor Dias     | User		|
|pedro 	| Pedro Jorge    | User		|

Scenario Outline: An <member> have <photo>
Given that I'm in the main page
And some <member> of team have <photo>
When the page is loaded
Then the application show <member> <photo>

Example:
|member | photo		|
|miriam | miriam.jpg	|
|vítor	| vítor.jpg	|
|pedro 	| pedro.jpg 	|

Scenario Outline: An <member> don't have <photo>
Given that I'm in the main page
And some <member> of team don't have <photo>
When the page is loaded
Then the application show a <default photo>

Example:
|member | photo      | default photo	|
|miriam | miriam.jpg | default.jpg	|
|vítor	| vítor.jpg  | default.jpg	|
|pedro 	| pedro.jpg  | default.jpg	|

Scenario Outline: An <member> have <short bio>
Given that I'm in the main page
And some <member> of team have <short bio>
When the page is loaded
Then the application show <member> <short bio>

Example:
|member | short bio                         			|
|miriam | 21 years. Master's student. Front end developer. 	|
|vítor	| 22 years. Master's student. Front end developer.  	|
|pedro 	| 22 years. Master's student.				|

Scenario Outline: An member don't have <short bio>
Given that I'm in the main page
And some member of team don't have <short bio>
When the page is loaded
Then the application don't show member <short bio>

Example:
|member | short bio                         			|
|miriam | 21 years. Master's student. Front end developer. 	|
|vítor	| 22 years. Master's student. Front end developer.  	|
|pedro 	| 22 years. Master's student.				|

Scenario Outline: An <member> have <facebook link>
Given that I'm in the main page
And some <member> of team have <facebook link>
When the page is loaded
Then the application show facebook icon with <member>'s <facebook link>

Example:
|member | facebook link           			|
|miriam | https://www.facebook.com/miriampereira95	|
|vítor	| https://www.facebook.com/vitor.dias.3954	|
|pedro 	| https://www.facebook.com/pedrombjorge		|

Scenario Outline: An <member> don't have <facebook link>
Given that I'm in the main page
And some <member> of team don't have <facebook link>
When the page is loaded
Then the application show the disabled facebook icon

Example:
|member | facebook link           			|
|miriam | https://www.facebook.com/miriampereira95	|
|vítor	| https://www.facebook.com/vitor.dias.3954	|
|pedro 	| https://www.facebook.com/pedrombjorge		|

Scenario Outline: An <member> have <linkedin link>
Given that I'm in the main page
And some <member> of team have <linkedin link>
When the page is loaded
Then the application show linkedin icon with <member>'s <linkedin link>

Example:
|member | linkedin link           				|
|miriam | https://www.linkedin.com/in/miriammpereira/		|
|vítor	| https://www.linkedin.com/in/vítor-dias-6aa9a310b/	|
|pedro 	| https://www.linkedin.com/in/pedrombjorge/		|

Scenario Outline: An <member> don't have <linkedin link>
Given that I'm in the main page
And some <member> of team don't have <linkedin link>
When the page is loaded
Then the application show the disabled linkedin icon

Example:
|member | linkedin link           				|
|miriam | https://www.linkedin.com/in/miriammpereira/		|
|vítor	| https://www.linkedin.com/in/vítor-dias-6aa9a310b/	|
|pedro 	| https://www.linkedin.com/in/pedrombjorge/		|