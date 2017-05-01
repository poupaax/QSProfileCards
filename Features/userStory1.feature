Feature: User views the main informations about all members of the team (pedro, v�tor and miriam)
As an user
I want to see a list of the team members (pedro, v�tor and miriam)
So that I can know the team better and see the main information

Scenario: View the team members (pedro, v�tor and miriam)
Given that I'm in the main page
When the page is loaded and exists members
Then the application shows a list of team members (pedro, v�tor and miriam) with your main informations (photo, short bio, facebook/linkedin links)

Scenario: There are no members to show
Given that I'm in the main page
And doesn't exists members
When the page is loaded
Then the application shows a default message: "There are no members to show."

Scenario Outline: A member exists
Given that I'm in the main page
And a <member> exists
When the page is loaded
Then that <member> appears with his available main information (photo, short bio, facebook/linkedin links)

Examples:
|member |
|miriam |
|v�tor	|
|pedro 	|

Scenario: A member not exist
Given that I'm in the main page
And a member does not exist
When the page is loaded
Then that member will not appear

Scenario Outline: A member has a name
Given that I'm in the main page
And the <member> of the team has a <name>
When the page is loaded
Then the application shows <member>'s <name>

Examples:
|member | name			    |
|miriam | Miriam Pereira	|
|v�tor	| V�tor Dias		|
|pedro 	| Pedro Jorge		|

Scenario Outline: A member don't have name
Given that I'm in the main page
And some <member> of team don't have name
When the page is loaded
Then the application show <default name>

Examples:
|member | default name	|
|miriam | User		    |
|v�tor	| User		    |
|pedro 	| User		    |

Scenario Outline: An member have photo
Given that I'm in the main page
And some <member> of team have <photo>
When the page is loaded
Then the application show <member>'s <photo>

Examples:
|member | photo		 |
|miriam | miriam.jpg |
|v�tor	| v�tor.jpg	 |
|pedro 	| pedro.jpg  |

Scenario Outline: An member don't have photo
Given that I'm in the main page
And some <member> of team don't have photo
When the page is loaded
Then the application show a <default photo>

Examples:
|member | default photo  |
|miriam | default.jpg	 |
|v�tor	| default.jpg	 |
|pedro 	| default.jpg	 |

Scenario Outline: An member have short bio
Given that I'm in the main page
And some <member> of team have <short bio>
When the page is loaded
Then the application show <member>'s <short bio>

Examples:
|member | short bio                         			   |
|miriam | 21 years old. Master's student. Front end developer. |
|v�tor	| 22 years old. Master's student. Front end developer. |
|pedro 	| 23 years old. Master's student.				       |

Scenario: An member don't have short bio
Given that I'm in the main page
And some member of team don't have short bio
When the page is loaded
Then the application don't show member short bio

Scenario Outline: An member have facebook link
Given that I'm in the main page
And some <member> of team have <facebook link>
When the page is loaded
Then the application show facebook icon with <member>'s <facebook link>

Examples:
|member | facebook link           			        |
|miriam | https://www.facebook.com/miriampereira95	|
|v�tor	| https://www.facebook.com/vitor.dias.3954	|
|pedro 	| https://www.facebook.com/pedrombjorge		|

Scenario: An member don't have facebook link
Given that I'm in the main page
And some member of team don't have facebook link
When the page is loaded
Then the application show the disabled facebook icon

Scenario Outline: An member have linkedin link
Given that I'm in the main page
And some <member> of team have <linkedin link>
When the page is loaded
Then the application show linkedin icon with <member>'s <linkedin link>

Examples:
|member | linkedin link           				            |
|miriam | https://www.linkedin.com/in/miriammpereira/		|
|v�tor	| https://www.linkedin.com/in/v�tor-dias-6aa9a310b/	|
|pedro 	| https://www.linkedin.com/in/pedrombjorge/		    |

Scenario: An member don't have linkedin link
Given that I'm in the main page
And some member of team don't have linkedin link
When the page is loaded
Then the application show the disabled linkedin icon