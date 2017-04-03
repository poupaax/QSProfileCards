Feature: User views the main informations about all members of the team (pedro, v�tor and miriam)
  #As an user
  As a user
  I want to see a list of the team members (pedro, v�tor and miriam)
So that I can know the team better and see the main information

#Scenario: View the team members (pedro, v�tor and miriam)
Scenario Outline: View the team members (pedro, v�tor and miriam)
Given that I'm in the main page
When the page is loaded and exists members
Then the application shows a list of team members (pedro, v�tor and miriam) with your main informations (photo, short bio, facebook/linkedin links)
#every scenario outline requires an "Examples:" table

#Scenario: ?
Scenario Outline: Don't exists members
Given that I'm in the main page
And doesn't exists members
When the page is loaded
Then the application shows a default message: "Don't exists members."
#every scenario outline requires an "Examples:" table

Scenario Outline: A <member> exists
Given that I'm in the main page
And a <member> exists
When the page is loaded
Then that <member> appears with his available main information
#what information?

Examples:
|member |
|miriam |
|v�tor	|
|pedro 	|

Scenario Outline: A <member> not exist
Given that I'm in the main page
And a <member> does not exist
When the page is loaded
Then that <member> will not appear

Examples:
|member |
|miriam |
|v�tor	|
|pedro 	|

Scenario Outline: A <member> has a name <name>
Given that I'm in the main page
And the <member> of the team has a name <name>
When the page is loaded
Then the application shows <member> <name>
  #the <member> also appears? besides the <name>?

Examples:
|member | name			|
|miriam | Miriam Pereira	|
|v�tor	| V�tor Dias		|
|pedro 	| Pedro Jorge		|

Scenario Outline: A <member> don't have <name>
Given that I'm in the main page
And some <member> of team don't have <name>
When the page is loaded
Then the application show <default name>

Examples:
|member | name           | default name	|
|miriam | Miriam Pereira | User		|
|v�tor	| V�tor Dias     | User		|
|pedro 	| Pedro Jorge    | User		|

Scenario Outline: An <member> have <photo>
Given that I'm in the main page
And some <member> of team have <photo>
When the page is loaded
Then the application show <member> <photo>

Examples:
|member | photo		|
|miriam | miriam.jpg	|
|v�tor	| v�tor.jpg	|
|pedro 	| pedro.jpg 	|

Scenario Outline: An <member> don't have <photo>
Given that I'm in the main page
And some <member> of team don't have <photo>
When the page is loaded
Then the application show a <default photo>

Examples:
|member | photo      | default photo	|
|miriam | miriam.jpg | default.jpg	|
|v�tor	| v�tor.jpg  | default.jpg	|
|pedro 	| pedro.jpg  | default.jpg	|

Scenario Outline: An <member> have <short bio>
Given that I'm in the main page
And some <member> of team have <short bio>
When the page is loaded
Then the application show <member> <short bio>

Examples:
|member | short bio                         			|
|miriam | 21 years. Master's student. Front end developer. 	|
|v�tor	| 22 years. Master's student. Front end developer.  	|
|pedro 	| 22 years. Master's student.				|

Scenario Outline: An member don't have <short bio>
Given that I'm in the main page
And some member of team don't have <short bio>
When the page is loaded
Then the application don't show member <short bio>

Example:
|member | short bio                         			|
|miriam | 21 years. Master's student. Front end developer. 	|
|v�tor	| 22 years. Master's student. Front end developer.  	|
|pedro 	| 22 years. Master's student.				|

Scenario Outline: An <member> have <facebook link>
Given that I'm in the main page
And some <member> of team have <facebook link>
When the page is loaded
Then the application show facebook icon with <member>'s <facebook link>

Example:
|member | facebook link           			|
|miriam | https://www.facebook.com/miriampereira95	|
|v�tor	| https://www.facebook.com/vitor.dias.3954	|
|pedro 	| https://www.facebook.com/pedrombjorge		|

Scenario Outline: An <member> don't have <facebook link>
Given that I'm in the main page
And some <member> of team don't have <facebook link>
When the page is loaded
Then the application show the disabled facebook icon

Example:
|member | facebook link           			|
|miriam | https://www.facebook.com/miriampereira95	|
|v�tor	| https://www.facebook.com/vitor.dias.3954	|
|pedro 	| https://www.facebook.com/pedrombjorge		|

Scenario Outline: An <member> have <linkedin link>
Given that I'm in the main page
And some <member> of team have <linkedin link>
When the page is loaded
Then the application show linkedin icon with <member>'s <linkedin link>

Example:
|member | linkedin link           				|
|miriam | https://www.linkedin.com/in/miriammpereira/		|
|v�tor	| https://www.linkedin.com/in/v�tor-dias-6aa9a310b/	|
|pedro 	| https://www.linkedin.com/in/pedrombjorge/		|

Scenario Outline: An <member> don't have <linkedin link>
Given that I'm in the main page
And some <member> of team don't have <linkedin link>
When the page is loaded
Then the application show the disabled linkedin icon

Example:
|member | linkedin link           				|
|miriam | https://www.linkedin.com/in/miriammpereira/		|
|v�tor	| https://www.linkedin.com/in/v�tor-dias-6aa9a310b/	|
|pedro 	| https://www.linkedin.com/in/pedrombjorge/		|